import React from "react";
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import LinkIcon from '@mui/icons-material/Link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import colors from '../theme/colors';

const stack = ['CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'AWS', 'Linux'];

const panes = [
  {
    to: '/projects',
    icon: <FolderOutlinedIcon sx={{ fontSize: 19 }} />,
    title: 'Projects',
    description: 'CI/CD, cloud infra, and app delivery.',
    cta: 'View',
    borderRight: true,
    borderBottom: true,
  },
  {
    to: '/resume',
    icon: <DescriptionOutlinedIcon sx={{ fontSize: 19 }} />,
    title: 'Resume',
    description: 'Experience, skills, and tools.',
    cta: 'View',
    borderRight: false,
    borderBottom: true,
  },
  {
    to: '/blog',
    icon: <TerminalOutlinedIcon sx={{ fontSize: 19 }} />,
    title: 'Blog',
    description: 'Notes on DevOps and SRE.',
    cta: 'Read',
    borderRight: true,
    borderBottom: false,
  },
];

const Pane = ({ to, icon, title, description, cta, borderRight, borderBottom }) => (
  <Box
    component={Link}
    to={to}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '26px',
      textDecoration: 'none',
      color: 'inherit',
      borderRight: borderRight ? `1px solid ${colors.border}` : 'none',
      borderBottom: borderBottom ? `1px solid ${colors.border}` : 'none',
      transition: 'background 0.2s ease',
      '&:hover': { backgroundColor: colors.elevated2 },
      '&:hover .cta-arrow': { transform: 'translate(3px, -3px)' },
    }}
  >
    <Box>
      <Box
        sx={{
          width: 38,
          height: 38,
          borderRadius: '9px',
          backgroundColor: colors.elevated2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: colors.accent,
          marginBottom: '16px',
        }}
      >
        {icon}
      </Box>
      <Typography sx={{ fontSize: 17, fontWeight: 700, marginBottom: '6px', color: colors.text }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: 13, color: colors.textMuted, lineHeight: 1.5 }}>
        {description}
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 13, fontWeight: 600, color: colors.accent, marginTop: '14px' }}>
      {cta}
      <ArrowOutwardIcon className="cta-arrow" sx={{ fontSize: 13, transition: 'transform 0.15s ease' }} />
    </Box>
  </Box>
);

const Home = () => {
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
      }}
    >
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          padding: { xs: '48px 24px', md: '100px 64px' },
          backgroundImage: `radial-gradient(circle, rgba(247,247,247,0.06) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          backgroundPosition: '-10px -10px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 620,
            height: 620,
            left: -180,
            top: -180,
            background: `radial-gradient(circle, ${colors.accent}33 0%, transparent 70%)`,
            filter: 'blur(10px)',
            pointerEvents: 'none',
          }}
        />

        <Box
          sx={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: '56px', md: '72px' },
            alignItems: 'center',
            maxWidth: 1312,
            margin: '0 auto',
          }}
        >
          {/* left: intro */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
            <Typography
              sx={{
                fontFamily: 'ui-monospace, "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace',
                fontSize: 13,
                letterSpacing: '0.14em',
                color: colors.accent,
                fontWeight: 600,
              }}
            >
              SOFTWARE ENGINEER · DEVOPS
            </Typography>
            <Typography
              sx={{
                fontFamily: 'ui-monospace, "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace',
                fontSize: { xs: 40, md: 56 },
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: colors.text,
              }}
            >
              Kevin Tierney
            </Typography>
            <Typography sx={{ fontSize: 18, lineHeight: 1.6, color: colors.textMuted, maxWidth: 460 }}>
              I build and ship the infrastructure other engineers build on — CI/CD pipelines, containers, and cloud systems that hold up at 3am.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '12px' }}>
              <Button
                component={Link}
                to="/projects"
                sx={{
                  backgroundColor: colors.accent,
                  color: colors.bg,
                  fontWeight: 600,
                  fontSize: 15,
                  padding: '13px 26px',
                  borderRadius: '8px',
                  textTransform: 'none',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  '&:hover': { backgroundColor: colors.accent, transform: 'translateY(-2px)', boxShadow: `0 12px 30px -8px ${colors.accent}` },
                }}
              >
                View Projects
              </Button>
              <Button
                component={Link}
                to="/resume"
                sx={{
                  backgroundColor: 'transparent',
                  color: colors.textMuted,
                  border: `1px solid ${colors.border}`,
                  fontWeight: 600,
                  fontSize: 15,
                  padding: '13px 26px',
                  borderRadius: '8px',
                  textTransform: 'none',
                  transition: 'border-color 0.15s ease, color 0.15s ease',
                  '&:hover': { borderColor: colors.accent, color: colors.text, backgroundColor: 'transparent' },
                }}
              >
                Get Resume
              </Button>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
              {stack.map((item) => (
                <Box
                  key={item}
                  sx={{
                    fontFamily: 'ui-monospace, "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace',
                    fontSize: 12.5,
                    color: colors.textDim,
                    backgroundColor: colors.elevated,
                    border: `1px solid ${colors.border}`,
                    padding: '6px 12px',
                    borderRadius: '100px',
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Box>

          {/* right: explore window */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Typography
              sx={{
                fontFamily: 'ui-monospace, "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace',
                fontSize: 13,
                letterSpacing: '0.14em',
                color: colors.accent,
                fontWeight: 600,
              }}
            >
              EXPLORE
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                aspectRatio: '1 / 1',
                backgroundColor: colors.elevated,
                border: `1px solid ${colors.border}`,
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              {panes.map((pane) => (
                <Pane key={pane.to} {...pane} />
              ))}

              {/* Connect */}
              <Box sx={{ padding: '26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: '9px',
                      backgroundColor: colors.elevated2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: colors.accent,
                      marginBottom: '16px',
                    }}
                  >
                    <LinkIcon sx={{ fontSize: 19 }} />
                  </Box>
                  <Typography sx={{ fontSize: 17, fontWeight: 700, marginBottom: '10px', color: colors.text }}>
                    Connect
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Box
                    component="a"
                    href="https://github.com/ktierney15"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      fontSize: 13,
                      fontWeight: 600,
                      color: colors.textMuted,
                      textDecoration: 'none',
                      transition: 'color 0.15s ease',
                      '&:hover': { color: colors.accent },
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: 14 }} />
                    GitHub
                  </Box>
                  <Box
                    component="a"
                    href="https://www.linkedin.com/in/kevin-tierney-a7b607192/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      fontSize: 13,
                      fontWeight: 600,
                      color: colors.textMuted,
                      textDecoration: 'none',
                      transition: 'color 0.15s ease',
                      '&:hover': { color: colors.accent },
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: 14 }} />
                    LinkedIn
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          borderTop: `1px solid ${colors.border}`,
          padding: { xs: '24px', md: '28px 64px' },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: '16px', sm: 0 },
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography sx={{ fontSize: 13.5, color: colors.textDim }}>© 2026 Kevin Tierney</Typography>
        <Box sx={{ display: 'flex', gap: '32px' }}>
          <Box component={Link} to="/projects" sx={{ fontSize: 13.5, color: colors.textMuted, textDecoration: 'none', '&:hover': { color: colors.text } }}>Projects</Box>
          <Box component={Link} to="/resume" sx={{ fontSize: 13.5, color: colors.textMuted, textDecoration: 'none', '&:hover': { color: colors.text } }}>Resume</Box>
          <Box component={Link} to="/blog" sx={{ fontSize: 13.5, color: colors.textMuted, textDecoration: 'none', '&:hover': { color: colors.text } }}>Blog</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
