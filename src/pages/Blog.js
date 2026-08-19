import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import colors from '../theme/colors';

const SUBSTACK_URL = 'https://kt1515.substack.com';
const FEED_URL = `${SUBSTACK_URL}/feed`;
const PROXY_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED_URL)}`;

const stripHtml = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return (div.textContent || div.innerText || '').replace(/\s+/g, ' ').trim();
};

const truncate = (text, max) => (text.length > max ? `${text.slice(0, max).trim()}…` : text);

const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

const parseFeed = (data) => {
    if (data.status !== 'ok' || !Array.isArray(data.items)) {
        throw new Error('Could not load feed');
    }
    return data.items.map((item) => {
        const description = stripHtml(item.description || '');
        const content = stripHtml(item.content || '');
        const excerpt = description || content;
        return {
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            excerpt: truncate(excerpt, 180),
        };
    });
};

const Blog = () => {
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        let cancelled = false;

        fetch(PROXY_URL)
            .then((res) => {
                if (!res.ok) throw new Error('Feed request failed');
                return res.json();
            })
            .then((data) => {
                if (cancelled) return;
                setPosts(parseFeed(data));
            })
            .catch(() => {
                if (!cancelled) setError(true);
            });

        return () => {
            cancelled = true;
        };
    }, []);

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
                <Typography sx={{ fontSize: 16, lineHeight: 1.6, color: colors.textMuted, maxWidth: 560, marginBottom: '48px' }}>
                    Notes on DevOps, SRE, and things I'm learning, cross-posted from{' '}
                    <Box
                        component="a"
                        href={SUBSTACK_URL}
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
                            href={SUBSTACK_URL}
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
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {posts.map((post) => (
                            <Box
                                key={post.link}
                                component="a"
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    display: 'block',
                                    padding: '26px',
                                    backgroundColor: colors.elevated,
                                    border: `1px solid ${colors.border}`,
                                    borderRadius: '16px',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    transition: 'transform 0.2s ease, border-color 0.2s ease',
                                    '&:hover': { transform: 'translateY(-3px)', borderColor: colors.accent },
                                    '&:hover .cta-arrow': { transform: 'translate(3px, -3px)' },
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
                                <Typography sx={{ fontSize: 19, fontWeight: 700, marginBottom: '8px', color: colors.text }}>
                                    {post.title}
                                </Typography>
                                {post.excerpt && (
                                    <Typography sx={{ fontSize: 14, color: colors.textMuted, lineHeight: 1.6, marginBottom: '14px' }}>
                                        {post.excerpt}
                                    </Typography>
                                )}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 13, fontWeight: 600, color: colors.accent }}>
                                    Read on Substack
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
