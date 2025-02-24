import React from 'react';
import './resume.css'; // Import the CSS file

const Resume = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <h1>MURAT CAN YÜKSEL</h1>
        <div className="contact-links">
          <a href="https://www.muratcanyuksel.xyz/" target="_blank" rel="noopener noreferrer">Website</a>
          <a href="https://www.linkedin.com/in/muratcanyuksel/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/muratcan-yuksel" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.youtube.com/channel/UCP1hJydcsPZCwbn8rPiohsg" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://dev.to/muratcanyuksel" target="_blank" rel="noopener noreferrer">Dev.to</a>
        </div>
      </div>

      {/* Summary */}
      <div className="summary">
        <p>Self-motivated Developer with over 5 years of experience collaborating and working on multiple web-based projects. Passionate, hardworking coder with a penchant for developing customized interfaces that factor in unique demands for accessibility, reachability, and security. Organized approach to meeting multiple, concurrent deadlines.</p>
      </div>

      {/* Professional Experience */}
      <div className="section">
        <div className="section-title pixel-border">
          PROFESSIONAL EXPERIENCE
        </div>

        <div className="job">
          <div className="job-header">
            <div className="job-title">Web3 Security Researcher & Auditor</div>
            <div className="job-details">
              <span className="company">Sherlock/Cantina/C4/Codehawks/Immunefi</span>
              <span className="location">Remote</span>
            </div>
          </div>
          <div className="job-description">
            <ul>
              <li>Secured more than 15 projects by identifying and reporting security vulnerabilities</li>
              <li>Discovered multiple high and medium severity bugs that could have compromised protocol integrity</li>
              <li>Contributed to making Web3 a safer environment through rigorous security auditing</li>
              <li>Participated in competitive audits across major security platforms</li>
            </ul>
          </div>
        </div>

        <div className="job">
          <div className="job-header">
            <div className="job-title">Web3 Frontend Developer</div>
            <div className="job-details">
              <span className="company">The Standard</span>
              <span className="location">Remote</span>
            </div>
          </div>
          <div className="job-description">
            <ul>
              <li>Built the entire frontend for The Standard dApp on Arbitrum chain, handling millions of dollars</li>
              <li>Collaborated closely with founders and design experts to create optimal UI/UX solutions</li>
              <li>Implemented responsive, secure, and intuitive interfaces for blockchain interactions</li>
            </ul>
          </div>
        </div>

        <div className="job">
          <div className="job-header">
            <div className="job-title">Web3 Frontend Developer</div>
            <div className="job-details">
              <span className="company">Nifty Craft</span>
              <span className="location">Remote</span>
            </div>
          </div>
          <div className="job-description">
            <ul>
              <li>Resolved critical frontend challenges for a visually appealing web-based blockchain game</li>
              <li>Developed interactive and engaging user interfaces that enhanced player experience</li>
              <li>Created frontend solutions used by players globally</li>
            </ul>
          </div>
        </div>

        <div className="job">
          <div className="job-header">
            <div className="job-title">Founder / Full Stack Developer</div>
            <div className="job-details">
              <span className="company">ZodiacAI</span>
            </div>
          </div>
          <div className="job-description">
            <ul>
              <li>Founded a startup leveraging AI technology to provide daily horoscope readings</li>
              <li>Developed the full technology stack from concept to deployment</li>
              <li>Created a product with high user satisfaction despite limited marketing resources</li>
            </ul>
          </div>
        </div>

        <div className="job">
          <div className="job-header">
            <div className="job-title">Frontend Web Developer</div>
            <div className="job-details">
              <span className="company">DijitalGaraj</span>
              <span className="location">Remote</span>
            </div>
          </div>
          <div className="job-description">
            <ul>
              <li>Developed frontend for an application reaching tens of thousands of users</li>
              <li>Served as the sole frontend specialist, creating significant value for the organization</li>
              <li>Implemented and maintained all frontend components independently</li>
            </ul>
          </div>
        </div>

        <div className="job">
          <div className="job-header">
            <div className="job-title">Software Developer</div>
            <div className="job-details">
              <span className="company">Mathimals</span>
              <span className="date">June 2021 - August 2021</span>
            </div>
          </div>
          <div className="job-description">
            <ul>
              <li>Collaborated with an engineering team to build an ed-tech project implemented in multiple schools</li>
              <li>Developed educational tools aimed at teaching mathematics to children</li>
              <li>Contributed to both frontend and backend components of the application</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="section">
        <div className="section-title pixel-border">
          TECHNICAL SKILLS
        </div>

        <div className="skills-grid">
          <div className="skill-category">
            <h3>WEB DEVELOPMENT</h3>
            <div className="skills-list">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">NextJS</span>
              <span className="skill-tag">VueJS</span>
              <span className="skill-tag">NodeJS</span>
              <span className="skill-tag">ExpressJS</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>DATABASES</h3>
            <div className="skills-list">
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">PostgreSQL</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>STYLING</h3>
            <div className="skills-list">
              <span className="skill-tag">TailwindCSS</span>
              <span className="skill-tag">Bootstrap</span>
              <span className="skill-tag">Material UI</span>
              <span className="skill-tag">Figma</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>TESTING</h3>
            <div className="skills-list">
              <span className="skill-tag">Jest</span>
              <span className="skill-tag">Mocha</span>
              <span className="skill-tag">Chai</span>
              <span className="skill-tag">RTL</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>BLOCKCHAIN</h3>
            <div className="skills-list">
              <span className="skill-tag">Solidity</span>
              <span className="skill-tag">Hardhat</span>
              <span className="skill-tag">Foundry</span>
              <span className="skill-tag">Web3.js</span>
              <span className="skill-tag">Ethers.js</span>
              <span className="skill-tag">Wagmi.sh</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>TOOLS</h3>
            <div className="skills-list">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Docker</span>
            </div>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="section">
        <div className="section-title pixel-border">
          LANGUAGES
        </div>

        <div className="languages">
          <div className="language">
            <h3>Turkish</h3>
          </div>

          <div className="language">
            <h3>English</h3>
          </div>

          <div className="language">
            <h3>French</h3>
          </div>
        </div>
      </div>

      {/* Key Strength */}
      <div className="key-strength">
        <h3>GETTING THINGS DONE</h3>
        <p>Security-focused development approach • Full-stack capabilities with frontend specialization • Self-directed work ethic with proven remote collaboration skills • Blockchain technology expertise • User-centered design mindset</p>
      </div>
    </div>
  );
};

export default Resume;
