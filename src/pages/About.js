import React from 'react';

const AboutMe = () => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto', padding: '20px', marginTop: '-25%' }}>
      {/* Picture of myself right here */}
      {/* Assuming you have an image file, replace 'your_image.jpg' with the actual file path */}
      <img
        src="https://media.licdn.com/dms/image/C5603AQENL8nPzNtwWQ/profile-displayphoto-shrink_800_800/0/1598905697996?e=1710374400&v=beta&t=OjgXmuaSfBDa6qpzIp_1J3UNmkAWxJluYV3hMr-Lx1A"
        alt="Kevin Tierney"
        // style={{ borderRadius: '50%', maxWidth: '100%', marginBottom: '20px' }}
        style={{ borderRadius: '50%', width: '50%', maxWidth: '100%', marginBottom: '20px' }}
      />
      <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
        My name is Kevin Tierney, and I am a Software Engineer who specializes in DevOps.
        {/* Further go into your story, how you discovered computer science, how you discovered DevOps, etc */}
      </p>
    </div>
  );
};

export default AboutMe;
