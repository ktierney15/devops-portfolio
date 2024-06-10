import React from 'react';
import headshot from '../assets/headshot.jpg';

const AboutMe = () => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      {/* Picture of myself right here */}
      {/* Assuming you have an image file, replace 'your_image.jpg' with the actual file path */}
      <img
        src={headshot}
        alt="Kevin Tierney"
        // style={{ borderRadius: '50%', maxWidth: '100%', marginBottom: '20px' }}
        style={{ borderRadius: '10%', width: '50%', maxWidth: '100%', marginBottom: '20px' }}
      />
      <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}> 
      My name is Kevin Tierney, and I am a Software Engineer with a focus on DevOps. I graduated with a degree in Computer Science from Elon University, where I discovered my passion for Software Engineering. Initially, I intended to study business, but a spring semester computer science course during my freshman year changed my path.
      After building foundational skills, I interned at a startup in the spring of my junior year, contributing to the React frontend of their customer portal. This experience deepened my interest in frontend development, leading me to create several other websites. One significant project was a blog for my girlfriend, who was then applying for journalism jobs. This site featured a content management system and showcased her articles. 
      </p>
      
      <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
      These projects likely helped me secure an interview for my next internship, which turned out to be for a DevOps role at Healthfirst—a company providing health insurance to low-income New Yorkers. Although my experience in DevOps was limited, my background in developing and deploying applications, coupled with a strong programming foundation, gave me a foothold in this new field.
      Since then, I have immersed myself in learning and mastering key DevOps principles and platforms, including CI/CD, containerization, infrastructure as code, configuration as code, the cloud, and system administration. My initial interest in application development evolved into a passion for DevOps, Platform Engineering, and Site Reliability Engineering. I am now deeply enthusiastic about contributing to and advancing in the field of DevOps. 
      </p>
    </div>
  );
};

export default AboutMe;
