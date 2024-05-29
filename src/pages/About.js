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
        I did not know much about devops and it was apparent on the interview, but I did have some experience developing and deploying applications and I did well on the programming 
        portion of the interview so they gave me an amazing opportunity to learn DevOps and work for an amazing company. In the following years I focused all of my energy on
        learning the principles and platforms that DevOps revolves around. CI/CD, containerization, infrastructure as code, configuration as code, the cloud,
        system administration, and the list goes on. I really loved application development, but DevOps quickly became my passion. I quickly realized the value
        that DevOps, Platform Engineering, and Site Reliability engineering bring to an organization. This was a world I was completely unfamiliar with before starting
        this job, as I've never worked in an organization big enough to benefit from allocating resources to this type of work. 
      </p>

      {/* <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
        Not only have I been gaining crucial knowledge about this industry, but I have been working for a great company that is really doing amazing things for New York. 
        Healthfirst is a not-for-profit New York health insurance company. What that means is that we are given funding by hospitals to provide affordable
        healthcare to New York residents who need it. The demographic this covers are people who cannot afford insurance, but also may not qualify for insurance
        that the government provides. This makes it easy to give everything I have to contribute to this amazing company that helps so many people every day. Not to 
        mention that the people I have work with are amazing and brilliant as well, from my boss, to my team, to the teams that we collaborate with. 
      </p> */}

    </div>
  );
};

export default AboutMe;
