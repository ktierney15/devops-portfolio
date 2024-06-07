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
        style={{ borderRadius: '50%', width: '50%', maxWidth: '100%', marginBottom: '20px' }}
      />
      <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}> My name is Kevin Tierney, and I am a Software Engineer who specializes in DevOps. I studied Computer Science at Elon University, where I discovered my
        passion for Software Engineering. I originally was intending to study business, but I tried a computer science course in the spring of my freshman year and 
        never turned back. After building foundational skills, I took on an internship during the spring of my junior year contributing to the React frontend of a 
        startup companies customer portal. I really enjoyed my brief time working in frontend applications and at the time that is what I wanted to pursue. In preparation
        for this I started creating websites, mostly that would go nowhere but were great practice. The capstone of this series of projects was a blog website for 
        my girlfriend, who at the time was applying for jobs in the journalism industry. This website was both a place where readers can check out her articles, as well
        as a content management system for her to upload articles. These projects likely contributed to getting an interview for my next internship that summer, which was
        for the company I work for today. Little did I know this interview was not for a frontend position, but a DevOps position. 
      </p>
      
      <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
        I did not know much about devops and it was apparent, but I did have some experience developing and deploying applications and had a strong programming foundation. 
        This gave me an amazing opportunity to learn DevOps and work for Healthfirst, an amazing company that provides health insurance to low-income New Yorkers. 
        The past few years I have been focusing all of my energy on learning the principles and platforms that DevOps revolves around. CI/CD, containerization, 
        infrastructure as code, configuration as code, the cloud, system administration, and the list goes on. 
        I really love application development, but DevOps quickly became my passion. I quickly realized the value
        that DevOps, Platform Engineering, and Site Reliability engineering bring to an organization. This was a world I was completely unfamiliar with before starting
        my job, and now I am super enthusiastic to contribute and learn more about DevOps. 
      </p>
    </div>
  );
};

export default AboutMe;
