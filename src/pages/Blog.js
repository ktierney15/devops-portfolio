import React, { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import colors from '../theme/colors';

const PUBLICATIONS = [
    {
        key: 'systems',
        label: 'Software',
        url: 'https://systemsandsoftware.substack.com',
        description: "Notes on software engineering and things I'm learning",
    },
    {
        key: 'cutman',
        label: 'Martial Arts',
        url: 'https://cutmanmma.substack.com',
        description: 'Writing on MMA',
    },
];

const MONO = 'ui-monospace, "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace';

const feedProxyUrl = (substackUrl) =>
    `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`${substackUrl}/feed`)}`;

const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

const htmlToText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return (doc.body.textContent || '').replace(/\s+/g, ' ').trim();
};

const excerpt = (text, maxLength = 220) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength).replace(/\s+\S*$/, '')}…`;
};

// Substack post URLs look like https://<pub>.substack.com/p/<slug>
const slugFromLink = (link) => {
    const parts = link.replace(/[?#].*$/, '').split('/').filter(Boolean);
    return parts[parts.length - 1];
};

const parseFeed = (data) => {
    if (data.status !== 'ok' || !Array.isArray(data.items)) {
        throw new Error('Could not load feed');
    }
    return data.items.map((item) => {
        const content = item.content || item.description || '';
        const text = htmlToText(content);
        const enclosure = item.enclosure || {};
        const image =
            item.thumbnail ||
            (enclosure.link && (!enclosure.type || enclosure.type.startsWith('image/')) ? enclosure.link : '');
        return {
            title: item.title,
            link: item.link,
            slug: slugFromLink(item.link),
            pubDate: item.pubDate,
            content,
            image,
            summary: excerpt(item.description && item.description !== content ? htmlToText(item.description) : text),
            readMinutes: Math.max(1, Math.round(text.split(' ').length / 230)),
        };
    });
};

// Feeds are cached for the whole session so moving between the list and a
// post (or between tabs) doesn't refetch.
const feedCache = {};
const loadFeed = (pub) => {
    if (!feedCache[pub.key]) {
        feedCache[pub.key] = fetch(feedProxyUrl(pub.url))
            .then((res) => {
                if (!res.ok) throw new Error('Feed request failed');
                return res.json();
            })
            .then(parseFeed)
            .catch((err) => {
                delete feedCache[pub.key];
                throw err;
            });
    }
    return feedCache[pub.key];
};

const useFeed = (pub) => {
    const [state, setState] = useState({ key: null, posts: null, error: false });

    useEffect(() => {
        let cancelled = false;
        loadFeed(pub)
            .then((posts) => {
                if (!cancelled) setState({ key: pub.key, posts, error: false });
            })
            .catch(() => {
                if (!cancelled) setState({ key: pub.key, posts: null, error: true });
            });
        return () => {
            cancelled = true;
        };
    }, [pub]);

    // Ignore results left over from a previously selected publication.
    if (state.key !== pub.key) return { posts: null, error: false };
    return state;
};

// Post content is HTML pulled from the account owner's own Substack feed, not
// arbitrary third-party input, so rendering it directly is safe here.
const proseStyles = {
    fontSize: 16,
    lineHeight: 1.8,
    color: colors.textMuted,
    overflowWrap: 'anywhere',
    wordBreak: 'break-word',
    '& p': { margin: '0 0 20px' },
    '& a': { color: colors.accent, textDecoration: 'underline', textUnderlineOffset: '3px' },
    '& img': { maxWidth: '100%', height: 'auto', borderRadius: '10px', display: 'block', margin: '20px 0' },
    '& h1, & h2, & h3': { color: colors.text, fontWeight: 700, margin: '28px 0 14px', lineHeight: 1.3 },
    '& h1': { fontSize: 24 },
    '& h2': { fontSize: 21 },
    '& h3': { fontSize: 18 },
    '& ul, & ol': { margin: '0 0 18px', paddingLeft: '22px' },
    '& li': { marginBottom: '8px' },
    '& blockquote': {
        margin: '20px 0',
        padding: '4px 20px',
        borderLeft: `3px solid ${colors.accent}`,
        color: colors.textMuted,
        fontStyle: 'italic',
    },
    '& pre': {
        backgroundColor: colors.elevated2,
        border: `1px solid ${colors.border}`,
        borderRadius: '10px',
        padding: '16px',
        overflowX: 'auto',
        fontSize: 13.5,
    },
    '& code': {
        fontFamily: MONO,
        backgroundColor: colors.elevated2,
        borderRadius: '4px',
        padding: '2px 5px',
        fontSize: '0.9em',
    },
    '& pre code': { backgroundColor: 'transparent', padding: 0 },
    '& hr': { border: 'none', borderTop: `1px solid ${colors.border}`, margin: '28px 0' },
};

const PageShell = ({ children }) => (
    <Box
        sx={{
            mx: -2.5,
            mt: -2.5,
            minHeight: 'calc(100vh - 73px)',
            textAlign: 'left',
            backgroundColor: colors.bg,
            color: colors.text,
            fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
            padding: { xs: '48px 24px', md: '80px 64px' },
        }}
    >
        <Box sx={{ maxWidth: 860, margin: '0 auto' }}>{children}</Box>
    </Box>
);

const PostMeta = ({ post }) => (
    <Typography sx={{ fontFamily: MONO, fontSize: 12.5, color: colors.textDim }}>
        {[formatDate(post.pubDate), `${post.readMinutes} min read`].filter(Boolean).join('  ·  ')}
    </Typography>
);

const LoadError = ({ pub }) => (
    <Box sx={{ border: `1px solid ${colors.border}`, borderRadius: '16px', padding: '32px', backgroundColor: colors.elevated }}>
        <Typography sx={{ fontSize: 14.5, color: colors.textMuted, lineHeight: 1.6, marginBottom: '16px' }}>
            Couldn't load posts right now. You can read them directly on Substack instead.
        </Typography>
        <Box
            component="a"
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 13, fontWeight: 600, color: colors.accent, textDecoration: 'none' }}
        >
            Visit Substack
            <ArrowOutwardIcon sx={{ fontSize: 13 }} />
        </Box>
    </Box>
);

const PostCard = ({ pub, post }) => (
    <Box
        component={Link}
        to={`/blog/${pub.key}/${post.slug}`}
        sx={{
            display: 'flex',
            gap: '24px',
            alignItems: 'stretch',
            padding: { xs: '22px', md: '28px' },
            borderRadius: '16px',
            border: `1px solid ${colors.border}`,
            backgroundColor: colors.elevated,
            color: 'inherit',
            textDecoration: 'none',
            transition: 'border-color 0.15s ease, background 0.15s ease, transform 0.15s ease',
            '&:hover': { borderColor: colors.accent, backgroundColor: colors.elevated2, transform: 'translateY(-2px)' },
            '&:hover .cta-arrow': { transform: 'translateX(3px)' },
            '&:focus-visible': { outline: `2px solid ${colors.accent}`, outlineOffset: '2px' },
        }}
    >
        <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
            <PostMeta post={post} />
            <Typography sx={{ fontSize: { xs: 20, md: 23 }, fontWeight: 700, color: colors.text, lineHeight: 1.25, margin: '10px 0 12px' }}>
                {post.title}
            </Typography>
            <Typography sx={{ fontSize: 15, lineHeight: 1.65, color: colors.textMuted, marginBottom: '18px' }}>
                {post.summary}
            </Typography>
            <Box sx={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 13, fontWeight: 600, color: colors.accent }}>
                Read post
                <Box component="span" className="cta-arrow" sx={{ transition: 'transform 0.15s ease' }}>→</Box>
            </Box>
        </Box>
        {post.image && (
            <Box
                component="img"
                src={post.image}
                alt=""
                loading="lazy"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    width: 120,
                    height: 160,
                    flexShrink: 0,
                    objectFit: 'cover',
                    borderRadius: '10px',
                    border: `1px solid ${colors.border}`,
                }}
            />
        )}
    </Box>
);

const Blog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activePub = PUBLICATIONS.find((p) => p.key === searchParams.get('pub')) || PUBLICATIONS[0];
    const { posts, error } = useFeed(activePub);

    const selectPub = (key) => {
        setSearchParams(key === PUBLICATIONS[0].key ? {} : { pub: key }, { replace: true });
    };

    return (
        <PageShell>
            <Typography sx={{ fontFamily: MONO, fontSize: 13, letterSpacing: '0.14em', color: colors.accent, fontWeight: 600, marginBottom: '10px' }}>
                WRITING
            </Typography>
            <Typography sx={{ fontFamily: MONO, fontSize: { xs: 34, md: 44 }, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '16px' }}>
                Blog
            </Typography>

            <Box role="tablist" aria-label="Publications" sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {PUBLICATIONS.map((pub) => {
                    const selected = pub.key === activePub.key;
                    return (
                        <Box
                            key={pub.key}
                            component="button"
                            type="button"
                            role="tab"
                            aria-selected={selected}
                            onClick={() => selectPub(pub.key)}
                            sx={{
                                fontFamily: MONO,
                                fontSize: 13,
                                fontWeight: 600,
                                padding: '8px 16px',
                                borderRadius: '999px',
                                cursor: 'pointer',
                                border: `1px solid ${selected ? colors.accent : colors.border}`,
                                backgroundColor: selected ? 'rgba(255, 165, 0, 0.12)' : colors.elevated,
                                color: selected ? colors.accent : colors.textMuted,
                                transition: 'all 0.15s ease',
                                '&:hover': { color: selected ? colors.accent : colors.text, borderColor: selected ? colors.accent : colors.textDim },
                                '&:focus-visible': { outline: `2px solid ${colors.accent}`, outlineOffset: '2px' },
                            }}
                        >
                            {pub.label}
                        </Box>
                    );
                })}
            </Box>

            <Typography sx={{ fontSize: 16, lineHeight: 1.6, color: colors.textMuted, maxWidth: 560, marginBottom: '40px' }}>
                {activePub.description}, cross-posted from{' '}
                <Box
                    component="a"
                    href={activePub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: colors.accent, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                    my Substack
                </Box>
                .
            </Typography>

            {error && <LoadError pub={activePub} />}

            {!error && posts === null && <Typography sx={{ fontSize: 14.5, color: colors.textDim }}>Loading posts…</Typography>}

            {!error && posts !== null && posts.length === 0 && (
                <Typography sx={{ fontSize: 14.5, color: colors.textDim }}>No posts yet — check back soon.</Typography>
            )}

            {!error && posts !== null && posts.length > 0 && (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {posts.map((post) => (
                        <PostCard key={post.link} pub={activePub} post={post} />
                    ))}
                </Box>
            )}
        </PageShell>
    );
};

export const BlogPost = () => {
    const { pubKey, slug } = useParams();
    const pub = PUBLICATIONS.find((p) => p.key === pubKey) || PUBLICATIONS[0];
    const { posts, error } = useFeed(pub);
    const post = posts && posts.find((p) => p.slug === slug);
    const backTo = pub.key === PUBLICATIONS[0].key ? '/blog' : `/blog?pub=${pub.key}`;

    return (
        <PageShell>
            <Box
                component={Link}
                to={backTo}
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: MONO,
                    fontSize: 13,
                    fontWeight: 600,
                    color: colors.textMuted,
                    textDecoration: 'none',
                    marginBottom: '36px',
                    '&:hover': { color: colors.accent },
                }}
            >
                <ArrowBackIcon sx={{ fontSize: 15 }} />
                {pub.label}
            </Box>

            {error && <LoadError pub={pub} />}

            {!error && posts === null && <Typography sx={{ fontSize: 14.5, color: colors.textDim }}>Loading post…</Typography>}

            {!error && posts !== null && !post && (
                <Typography sx={{ fontSize: 14.5, color: colors.textDim }}>
                    Couldn't find that post. It may be older than what the feed includes — try{' '}
                    <Box component="a" href={pub.url} target="_blank" rel="noopener noreferrer" sx={{ color: colors.accent }}>
                        Substack
                    </Box>
                    .
                </Typography>
            )}

            {post && (
                <Box component="article">
                    <PostMeta post={post} />
                    <Typography
                        component="h1"
                        sx={{ fontSize: { xs: 28, md: 38 }, fontWeight: 700, color: colors.text, lineHeight: 1.2, letterSpacing: '-0.01em', margin: '12px 0 32px' }}
                    >
                        {post.title}
                    </Typography>

                    <Box sx={proseStyles} dangerouslySetInnerHTML={{ __html: post.content }} />

                    <Box
                        sx={{
                            marginTop: '40px',
                            paddingTop: '28px',
                            borderTop: `1px solid ${colors.border}`,
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '24px',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            component={Link}
                            to={backTo}
                            sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 13, fontWeight: 600, color: colors.textMuted, textDecoration: 'none', '&:hover': { color: colors.accent } }}
                        >
                            <ArrowBackIcon sx={{ fontSize: 14 }} />
                            All {pub.label.toLowerCase()} posts
                        </Box>
                        <Box
                            component="a"
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontSize: 13,
                                fontWeight: 600,
                                color: colors.accent,
                                textDecoration: 'none',
                                '&:hover .cta-arrow': { transform: 'translate(3px, -3px)' },
                            }}
                        >
                            View on Substack
                            <ArrowOutwardIcon className="cta-arrow" sx={{ fontSize: 13, transition: 'transform 0.15s ease' }} />
                        </Box>
                    </Box>
                </Box>
            )}
        </PageShell>
    );
};

export default Blog;
