#!/usr/bin/env bash
# Validates the VERSION file against the latest release tag.
#
# VERSION holds the version the next release will be tagged with (without the
# leading "v"). It must be valid semver (MAJOR.MINOR.PATCH) and strictly
# greater than the latest v* tag, so every PR has to bump it past the last
# release before it can merge.
#
# Prints the tag to create (e.g. v1.4.0) on success. Requires tags to be
# fetched (actions/checkout with fetch-depth: 0).
set -euo pipefail

VERSION_FILE="${1:-VERSION}"

if [[ ! -f "$VERSION_FILE" ]]; then
  echo "::error::$VERSION_FILE is missing" >&2
  exit 1
fi

version="$(tr -d '[:space:]' < "$VERSION_FILE")"

if [[ ! "$version" =~ ^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$ ]]; then
  echo "::error file=$VERSION_FILE::'$version' is not a valid version (expected MAJOR.MINOR.PATCH, e.g. 1.4.0)" >&2
  exit 1
fi

latest_tag="$(git tag --list 'v*' | grep -E '^v[0-9]+\.[0-9]+\.[0-9]+$' | sort -V | tail -n 1 || true)"

if [[ -n "$latest_tag" ]]; then
  latest="${latest_tag#v}"
  highest="$(printf '%s\n%s\n' "$latest" "$version" | sort -V | tail -n 1)"
  if [[ "$version" == "$latest" || "$highest" != "$version" ]]; then
    echo "::error file=$VERSION_FILE::VERSION ($version) must be greater than the latest release ($latest_tag). Bump it in this PR." >&2
    exit 1
  fi
  echo "VERSION $version is ahead of latest release $latest_tag" >&2
else
  echo "No previous release tags found; $version will be the first release" >&2
fi

echo "v$version"
