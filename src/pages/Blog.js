import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
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

const feedProxyUrl = (substackUrl) =>
    `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`${substackUrl}/feed`)}`;

const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

const parseFeed = (data) => {
    if (data.status !== 'ok' || !Array.isArray(data.items)) {
        throw new Error('Could not load feed');
    }
    return data.items.map((item) => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        content: item.content || item.description || '',
    }));
};

// Post content is HTML pulled from the account owner's own Substack feed, not
// arbitrary third-party input, so rendering it directly is safe here.
const proseStyles = {
    fontSize: 15.5,
    lineHeight: 1.75,
    color: colors.textMuted,
    overflowWrap: 'anywhere',
    wordBreak: 'break-word',
    '& p': { margin: '0 0 18px' },
    '& a': { color: colors.accent, textDecoration: 'underline', textUnderlineOffset: '3px' },
    '& img': { maxWidth: '100%', borderRadius: '10px', display: 'block', margin: '20px 0' },
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
        fontFamily: 'ui-monospace, "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace',
        backgroundColor: colors.elevated2,
        borderRadius: '4px',
        padding: '2px 5px',
        fontSize: '0.9em',
    },
    '& pre code': { backgroundColor: 'transparent', padding: 0 },
    '& hr': { border: 'none', borderTop: `1px solid ${colors.border}`, margin: '28px 0' },
};

const Blog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activePub = PUBLICATIONS.find((p) => p.key === searchParams.get('pub')) || PUBLICATIONS[0];

    // Cache of fetched feeds keyed by publication: { posts, error }
    const [feeds, setFeeds] = useState({});
    const feed = feeds[activePub.key];
    const posts = feed ? feed.posts : null;
    const error = feed ? feed.error : false;

    useEffect(() => {
        if (feeds[activePub.key]) return undefined;
        let cancelled = false;
        const { key, url } = activePub;

        fetch(feedProxyUrl(url))
            .then((res) => {
                if (!res.ok) throw new Error('Feed request failed');
                return res.json();
            })
            .then((data) => {
                if (cancelled) return;
                setFeeds((prev) => ({ ...prev, [key]: { posts: parseFeed(data), error: false } }));
            })
            .catch(() => {
                if (!cancelled) setFeeds((prev) => ({ ...prev, [key]: { posts: null, error: true } }));
            });

        return () => {
            cancelled = true;
        };
    }, [activePub, feeds]);

    const selectPub = (key) => {
        setSearchParams(key === PUBLICATIONS[0].key ? {} : { pub: key }, { replace: true });
    };

    return (
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
            <Box sx={{ maxWidth: 860, margin: '0 auto' }}>
                <Typography
                    sx={{
                        fontFamily: 'ui-monospace, "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace',
                        fontSize: 13,
                        letterSpacing: '0.14em',
                        color: colors.accent,
                        fontWeight: 600,
                        marginBottom: '10px',
                    }}
                >
                    WRITING
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'ui-monospace, "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace',
                        fontSize: { xs: 34, md: 44 },
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        marginBottom: '16px',
                    }}
                >
                    Blog
                </Typography>
                <Box
                    role="tablist"
                    aria-label="Publications"
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '24px',
                    }}
                >
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
                                    fontFamily: 'ui-monospace, "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace',
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

                <Typography sx={{ fontSize: 16, lineHeight: 1.6, color: colors.textMuted, maxWidth: 560, marginBottom: '48px' }}>
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

                {error && (
                    <Box sx={{ border: `1px solid ${colors.border}`, borderRadius: '16px', padding: '32px', backgroundColor: colors.elevated }}>
                        <Typography sx={{ fontSize: 14.5, color: colors.textMuted, lineHeight: 1.6, marginBottom: '16px' }}>
                            Couldn't load posts right now. You can read them directly on Substack instead.
                        </Typography>
                        <Box
                            component="a"
                            href={activePub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 13, fontWeight: 600, color: colors.accent, textDecoration: 'none' }}
                        >
                            Visit Substack
                            <ArrowOutwardIcon sx={{ fontSize: 13 }} />
                        </Box>
                    </Box>
                )}

                {!error && posts === null && (
                    <Typography sx={{ fontSize: 14.5, color: colors.textDim }}>Loading posts…</Typography>
                )}

                {!error && posts !== null && posts.length === 0 && (
                    <Typography sx={{ fontSize: 14.5, color: colors.textDim }}>No posts yet — check back soon.</Typography>
                )}

                {!error && posts !== null && posts.length > 0 && (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
                        {posts.map((post) => (
                            <Box
                                key={post.link}
                                component="article"
                                sx={{
                                    minWidth: 0,
                                    paddingBottom: '56px',
                                    borderBottom: `1px solid ${colors.border}`,
                                    '&:last-of-type': { borderBottom: 'none', paddingBottom: 0 },
                                }}
                            >
                                {post.pubDate && (
                                    <Typography
                                        sx={{
                                            fontFamily: 'ui-monospace, "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace',
                                            fontSize: 12.5,
                                            color: colors.textDim,
                                            marginBottom: '10px',
                                        }}
                                    >
                                        {formatDate(post.pubDate)}
                                    </Typography>
                                )}
                                <Typography sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 700, marginBottom: '20px', color: colors.text, lineHeight: 1.2 }}>
                                    {post.title}
                                </Typography>

                                <Box sx={proseStyles} dangerouslySetInnerHTML={{ __html: post.content }} />

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
                                        marginTop: '8px',
                                        '&:hover .cta-arrow': { transform: 'translate(3px, -3px)' },
                                    }}
                                >
                                    View on Substack
                                    <ArrowOutwardIcon className="cta-arrow" sx={{ fontSize: 13, transition: 'transform 0.15s ease' }} />
                                </Box>
                            </Box>
                        ))}
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Blog;
