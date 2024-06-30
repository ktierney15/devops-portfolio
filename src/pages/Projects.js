import React, { useState } from 'react';
import projectsData from '../projects.json';
import { Typography, Button, Divider } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? projectsData.projects.length - 1 : prevSlide - 1
        );
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === projectsData.projects.length - 1 ? 0 : prevSlide + 1
        );
    };

    const styles = {
        container: {
            padding: '16px',
            maxWidth: '90vw',
            margin: '0 auto',
            position: 'relative',
        },
        sliderContainer: {
            overflow: 'hidden',
            width: '100%',
        },
        sliderWrapper: {
            display: 'flex',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${currentSlide * 100}%)`,
        },
        slide: {
            minWidth: '100%',
            boxSizing: 'border-box',
            padding: '10px',
            textAlign: 'center',
        },
        sliderButtons: {
            position: 'absolute',
            top: '50%',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            transform: 'translateY(-50%)',
        },
        button: {
            background: 'rgba(0, 0, 0, 0.5)',
            border: 'none',
            color: 'white',
            padding: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        disabledButton: {
            background: 'rgba(0, 0, 0, 0.2)',
        },
        img: {
            width: '100%',
            maxWidth: '80%',
            height: 'auto',
            marginBottom: '8px',
        },
        projectTitle: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '8px',
        },
        projectDescription: {
            marginBottom: '8px',
        },
        divider: {
            my: 1,
            borderColor: 'orange',
        },
    };

    return (
        <div style={styles.container}>
            <Typography variant="h2" align="center">Projects</Typography>
            <div style={styles.sliderContainer}>
                <div style={styles.sliderWrapper}>
                    {projectsData.projects.map((project, index) => (
                        <div key={index} style={styles.slide}>
                            <Divider sx={styles.divider} />
                            <img
                                src={project.image}
                                alt={project.name}
                                style={styles.img}
                            />
                            <Typography variant="h6" style={styles.projectTitle}>
                                {project.name}
                            </Typography>
                            <Typography variant="body1" style={styles.projectDescription}>
                                {project.description}
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ backgroundColor: '#FFA500', color: '#ffffff', marginLeft: '10px' }}
                            >
                                Github
                            </Button>
                        </div>
                    ))}
                </div>
                <div style={styles.sliderButtons}>
                    <button
                        onClick={handlePrevSlide}
                        style={{
                            ...styles.button,
                            ...(currentSlide === 0 ? styles.disabledButton : {})
                        }}
                        disabled={currentSlide === 0}
                        aria-label="Previous Slide"
                    >
                        <ArrowBackIosIcon />
                    </button>
                    <button
                        onClick={handleNextSlide}
                        style={{
                            ...styles.button,
                            ...(currentSlide === projectsData.projects.length - 1 ? styles.disabledButton : {})
                        }}
                        disabled={currentSlide === projectsData.projects.length - 1}
                        aria-label="Next Slide"
                    >
                        <ArrowForwardIosIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
