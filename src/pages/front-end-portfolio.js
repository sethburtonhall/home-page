import React from "react"

// Components
import Layout from "../components/layout"
import SEO from "../components/Seo"
import { Helmet } from "react-helmet"
import Project from "../components/Project"

// Data
import { frontend, jobs, hardSkills, softSkills, projects } from "../data/data"
import avatar from "../images/seth-code.jpg"

// Styles
import { GlobalStyle, StyledFooter, StyledResume } from "../design-system"

const FrontEnd = () => {
  return (
    <>
      <GlobalStyle />
      <StyledResume>
        <Layout>
          <SEO title="Seth Hall" description="Full Stack Web Developer" />
          <Helmet>
            <body className="code" />
            <title>Code</title>
          </Helmet>
          <article className="resume">
            <section className="name">
              <h1>Seth Hall</h1>
              <h2 className="title">
                {frontend}/Full Stack Web Developer
                <a
                  href="https://github.com/sethburtonhall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github"
                >
                  <i className="fab fa-github"></i>
                </a>
              </h2>
            </section>

            <section className="photo">
              <img src={avatar} alt="avatar" />
            </section>

            <section className="about">
              <h6 className="header">About Me</h6>
              <p>
                I am a {frontend} Web Developer (working towards Full Stack),
                living in the great state of North Carolina. With 10 years of
                development experience, I am capable of collaborating across a
                variety of skill sets and personalities. I have been working
                remotely since 2006 and thanks to my tenacity, and the web
                community, I have taught myself design and development. If we
                work together and I don't know something, I will say so and then
                I will learn whatever is needed for that specific project. I am
                married and have an 9-year-old daughter and a 6-year-old son, so
                it is important to balance my time between work and family. I
                possess a strong passion and dedication to creative craft and
                vocation and I am ready to work on great products with an even
                greater team. (This could be you!). Check out my{" "}
                <a
                  href="https://www.instagram.com/sethburtonhall/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgb(210, 1, 106)" }}
                >
                  Instagram{" "}
                </a>
                and{" "}
                <a
                  href="https://www.hallpictures.us"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgb(94, 94, 206)" }}
                >
                  Short Films
                </a>
                , or say{" "}
                <a
                  href="mailto:sethburtonhall@gmail.com?Subject=Hello"
                  target="_top"
                  rel="noopener noreferrer"
                  style={{ color: "rgb(247, 114, 49)" }}
                >
                  Hello
                </a>
                .
              </p>
            </section>

            <section className="work">
              <h6 className="header">Development Experience</h6>

              {jobs.map((job, i) => (
                <div key={i} className="job">
                  <h4 className="job-title">{job.title}</h4>
                  <h5 className="company">
                    {job.company} - {job.type}
                    <br />
                    <br />
                    <span>
                      {" "}
                      {job.date} | {job.location}
                    </span>
                  </h5>
                  <p>{job.description}</p>
                </div>
              ))}
            </section>

            <section className="education">
              <h6 className="header">Education</h6>
              <div className="school">
                <h4 className="degree">BA - Mass Communications</h4>
                <h5 className="school-name">North Carolina State University</h5>
              </div>
              <div className="school">
                <h4 className="degree">
                  MFA - Creative Producing - School of Film
                </h4>
                <h5 className="school-name">UNCSA</h5>
              </div>
              <div className="school">
                <h4 className="degree">Certified ScrumMaster®</h4>
                <h5 className="school-name">
                  Scrum Alliance<span> | 2019</span>
                </h5>
              </div>
            </section>

            <section className="skills">
              <h6 className="header">Skills</h6>
              <div className="skills-flex">
                <div className="skills-wrapper">
                  <h4 className="title">Hard Skills</h4>
                  <ul className="skills-list">
                    {hardSkills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="skills-wrapper">
                  <h4 className="title">Soft Skills</h4>
                  <ul className="skills-list">
                    {softSkills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="projects">
              <h6 className="header">Projects</h6>
              <div className="project-items">
                {projects.map((project, i) => (
                  <Project
                    key={i}
                    src={project.src}
                    title={project.title}
                    meta={project.meta}
                    app={project.app}
                    url={project.url}
                    srcUrl={project.srcUrl}
                  />
                ))}
              </div>
            </section>
          </article>
          <StyledFooter>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>{" "}
            &{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS Grids
            </a>
            <div className="footer-bg"></div>
          </StyledFooter>
        </Layout>
      </StyledResume>
    </>
  )
}

export default FrontEnd
