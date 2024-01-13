import React from 'react';

const AboutMe = () => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      {/* Picture of myself right here */}
      {/* Assuming you have an image file, replace 'your_image.jpg' with the actual file path */}
      <img
        src="https://media.licdn.com/dms/image/C5603AQENL8nPzNtwWQ/profile-displayphoto-shrink_800_800/0/1598905697996?e=1710374400&v=beta&t=OjgXmuaSfBDa6qpzIp_1J3UNmkAWxJluYV3hMr-Lx1A"
        alt="Kevin Tierney"
        // style={{ borderRadius: '50%', maxWidth: '100%', marginBottom: '20px' }}
        style={{ borderRadius: '50%', width: '50%', maxWidth: '100%', marginBottom: '20px' }}
      />
      <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
        My name is Kevin Tierney, and I am a Software Engineer who specializes in DevOps. I studied Computer Science at Elon University, where I discovered my
        passion for Software Engineering. I origionally was intending to study business, but I tried a computer science course in the spring of my freshman year and 
        never turned back. After building foundational skills, I took on an internship during the spring of my junior year contributing to the React frontend of a 
        startup companies customer portal. I really enjoyed my breif time working in frontend applications and at the time that is what I wanted to pursue. In preperation
        for this I started creating websites, mostly that would go nowhere but were great practice. The capstone of this series of projects was a blog website for 
        my girlfriend, who at the time was applying for jobs in the journalism industry. This website was both a place where readers can check out her articles, as well
        as a content management system for her to upload articles. These projects likely contributed to getting an interview for my next internship that summer, which was
        for the company I work for today. Little did I know this interview was not for a frontend position, but a DevOps position. 
      </p>

      <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
        I did not know much about devops and it was apparent on the interview, but I did have some expereince developing and deploying applications and I did well on the programming 
        portion so they gave me an amazing opprotunity to learn DevOps and work for an amazing company. In the following years I focused all of my energy on
        learning the principles and platforms that DevOps revolves around. CI/CD, contanerization, infrastructure as code, configuration as code, the cloud,
        system administrationn, and the list goes on. I really loved application development, but DevOps quickly became my passion. I quickly realized the value
        that DevOps, Platform Engineering, and Site Reliability engineering bring to an organization. This was a world I was completely unfamiliar with before starting
        this job, as I've never worked in an organization big enough to benefit from allocating resources to this type of work. 
      </p>

      <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
        Not only was I gaining crucial knowledge about this industry, but I was working for a great company that was really doing amazing things for new york. 
        Healthfirst is a not-for-profit New York health insurance company. What that means is that they are given funding by hospitals to provide affordable
        healthcare to New York residents who need it. The demograpphic this covers are people who cannot afford insurance, but also may not qualify for insurance
        that the govenment provides. This made it easy to give everything I had to contribute to this amazing company that helps so many people every day. Not to 
        mention that the people I have worked with are amazing and brilliant as well, from my boss, to my team, to the teams that we collaborated with. 
      </p>

      <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
        In the next stage of my journey, I want to continue to grow, while working for a company that has a positive impact on the world. I believe I have a skillset that
        is value to most companies and a mindset for learning new things and expanding my skillset. 
        
      </p>
    </div>
  );
};

export default AboutMe;
