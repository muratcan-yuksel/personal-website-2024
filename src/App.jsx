import React from "react";
import "./resume.css"; // Import the CSS file

const Resume = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <h1>MURAT CAN YÜKSEL</h1>
        <div className="contact-links">
          <a
            href="https://www.upwork.com/freelancers/~013e02c0111a99e5d5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upwork
          </a>
          <a
            href="https://www.linkedin.com/in/muratcanyuksel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/muratcan-yuksel"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.youtube.com/channel/UCP1hJydcsPZCwbn8rPiohsg"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a
            href="https://dev.to/muratcanyuksel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dev.to
          </a>
          <a
            href="https://blog.logrocket.com/author/muratyuksel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LogRocket Blog
          </a>
        </div>
      </div>

      {/* Summary */}
      <div className="summary">
        <p>
          Frontend Developer and Technical Writer with over 5 years of
          experience building modern, accessible, and secure web applications
          using React and TailwindCSS/MUI. I've collaborated with startups, SaaS
          companies, and crypto projects to deliver clean, scalable UI solutions
          that meet real-world needs.
          <br />
          <br />
          <strong>
            Top-rated Upwork freelancer with $30K+ earned, 100% Job Success
            Score, and consistent 5-star client reviews.
          </strong>{" "}
          I bring technical clarity, reliable delivery, and a collaborative
          mindset to every project.
          <br />
          <br />
          Let's build something great. 📬 muratcanyukselpro@gmail.com
          <br />
          🔗{" "}
          <a
            href="https://www.upwork.com/freelancers/~013e02c0111a99e5d5"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black", fontWeight: "bold" }}
          >
            View my Upwork profile
          </a>
          {" | "}
          <a
            href="https://blog.logrocket.com/author/muratyuksel/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black", fontWeight: "bold" }}
          >
            LogRocket Blog Profile
          </a>
        </p>
      </div>

      {/* Professional Experience */}
      <div className="section">
        <div className="section-title pixel-border">
          PROFESSIONAL EXPERIENCE
        </div>

        <div className="job">
          <div className="job-header">
            <div className="job-title">Senior React Developer</div>
            <div className="job-details">
              <span className="company">Upwork</span>
              <span className="location">Remote</span>
              <span className="date">2022 - Present</span>
            </div>
          </div>
          <div className="job-description">
            <ul>
              <li>
                Built $30,000+ in client projects with 100% Job Success Score
                and stellar client reviews
              </li>
              <li>
                Developed and delivered 12+ successful web projects for diverse
                international clients
              </li>
              <li>
                Implemented responsive, secure, and intuitive interfaces using
                React, Next.js, and modern frameworks
              </li>
              <li>
                Consistently exceeded client expectations with on-time delivery
                and high-quality code
              </li>
              <li>
                Notable projects include The Standard Protocol ($14,000), NFT
                Landing Pages, and MERN stack applications
              </li>
            </ul>
          </div>
        </div>

        <div className="job">
          <div className="job-header">
            <div className="job-title">Technical Writer</div>
            <div className="job-details">
              <span className="company">LogRocket Blog</span>
              <span className="location">Remote</span>
              <span className="date">2022 - Present</span>
            </div>
          </div>
          <div className="job-description">
            <ul>
              <li>
                Author technical articles focused on frontend development and
                modern web technologies
              </li>
              <li>
                Create comprehensive tutorials and guides for React, JavaScript,
                and related frameworks
              </li>
              <li>
                Contribute to developer education through well-researched,
                practical content
              </li>
              <li>
                Share expertise and insights with LogRocket's global developer
                audience
              </li>
            </ul>
          </div>
        </div>

        <div className="job">
          <div className="job-header">
            <div className="job-title">Web Developer</div>
            <div className="job-details">
              <span className="company">The Standard</span>
              <span className="location">Remote</span>
            </div>
          </div>
          <div className="job-description">
            <ul>
              <li>
                Built the entire frontend for The Standard dApp handling
                millions of dollars in transactions
              </li>
              <li>
                Collaborated closely with founders and design experts to create
                optimal UI/UX solutions
              </li>
              <li>
                Implemented responsive, secure, and intuitive interfaces for
                complex web applications
              </li>
            </ul>
          </div>
        </div>

        <div className="job">
          <div className="job-header">
            <div className="job-title">Web Developer</div>
            <div className="job-details">
              <span className="company">Nifty Craft</span>
              <span className="location">Remote</span>
            </div>
          </div>
          <div className="job-description">
            <ul>
              <li>
                Resolved critical frontend challenges for a visually appealing
                web-based game
              </li>
              <li>
                Developed interactive and engaging user interfaces that enhanced
                player experience
              </li>
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
              <li>
                Founded a startup leveraging AI technology to provide daily
                horoscope readings
              </li>
              <li>
                Developed the full technology stack from concept to deployment
              </li>
              <li>
                Created a product with high user satisfaction despite limited
                marketing resources
              </li>
            </ul>
          </div>
        </div>

        <div className="job">
          <div className="job-header">
            <div className="job-title">Frontend Web Developer</div>
            <div className="job-details">
              <span className="company">DijitalGaraj</span>
              <span className="location">Remote</span>
              <span className="date">October 2021 - August 2022</span>
            </div>
          </div>
          <div className="job-description">
            <ul>
              <li>
                Developed frontend for an application reaching tens of thousands
                of users
              </li>
              <li>
                Served as the sole frontend specialist, creating significant
                value for the organization
              </li>
              <li>
                Implemented and maintained all frontend components independently
              </li>
              <li>
                Developed enterprise-level web applications using mainly VueJS,
                Vuex and Bootstrap 5
              </li>
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
              <li>
                Collaborated with an engineering team to build an ed-tech
                project implemented in multiple schools
              </li>
              <li>
                Developed educational tools aimed at teaching mathematics to
                children
              </li>
              <li>
                Contributed to both frontend and backend components of the
                application
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="section">
        <div className="section-title pixel-border">TECHNICAL SKILLS</div>

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
              <span className="skill-tag">Supabase</span>
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
        <div className="section-title pixel-border">LANGUAGES</div>

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

      {/* Education */}
      <div className="section">
        <div className="section-title pixel-border">EDUCATION</div>
        <div className="education">
          <h3>University of Tartu</h3>
          <p>Master of Arts (MA), Semiotics</p>
        </div>
      </div>

      {/* Key Strength */}
      <div className="key-strength">
        <h3>EXPERTISE</h3>
        <p>
          Full-stack capabilities with frontend specialization • Self-directed
          work ethic with proven remote collaboration skills • User-centered
          design mindset with pixel-perfect implementation • Rapid prototyping
          and development with modern frameworks • Cross-platform responsive
          design expertise
        </p>
      </div>
    </div>
  );
};

export default Resume;
