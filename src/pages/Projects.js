import React from 'react';
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import projectsData from '../projects.json';
import colors from '../theme/colors';

const Projects = () => {
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
            <Box sx={{ maxWidth: 1312, margin: '0 auto' }}>
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
                    PORTFOLIO
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
                    Projects
                </Typography>
                <Typography sx={{ fontSize: 16, lineHeight: 1.6, color: colors.textMuted, maxWidth: 560, marginBottom: '48px' }}>
                    DevOps tooling, infrastructure, and automation I've built — CI/CD pipelines, Kubernetes clusters, and the CLIs that hold them together.
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                        gap: '24px',
                    }}
                >
                    {projectsData.projects.map((project) => (
                        <Box
                            key={project.name}
                            component="a"
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: colors.elevated,
                                border: `1px solid ${colors.border}`,
                                borderRadius: '16px',
                                overflow: 'hidden',
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'transform 0.2s ease, border-color 0.2s ease',
                                '&:hover': { transform: 'translateY(-3px)', borderColor: colors.accent },
                                '&:hover .cta-arrow': { transform: 'translate(3px, -3px)' },
                            }}
                        >
                            <Box
                                component="img"
                                src={project.image}
                                alt={project.name}
                                sx={{ width: '100%', height: 180, objectFit: 'cover', display: 'block', backgroundColor: colors.elevated2 }}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, padding: '22px' }}>
                                <Typography sx={{ fontSize: 17, fontWeight: 700, marginBottom: '8px', color: colors.text }}>
                                    {project.name}
                                </Typography>
                                <Typography sx={{ fontSize: 13.5, color: colors.textMuted, lineHeight: 1.6, marginBottom: '18px' }}>
                                    {project.description}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 13, fontWeight: 600, color: colors.accent, marginTop: 'auto' }}>
                                    <GitHubIcon sx={{ fontSize: 15 }} />
                                    View on GitHub
                                    <ArrowOutwardIcon className="cta-arrow" sx={{ fontSize: 13, transition: 'transform 0.15s ease' }} />
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Projects;
