import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import { jobs, hardSkills, softSkills } from "../data/data"
import avatar from "../images/seth.jpg"
import omh from "../images/omh.png"
import pokemon from "../images/pokemon.png"
import hallpictures from "../images/hall-pictures.jpg"
import "../styles/styles.css"

const IndexPage = () => (
  <Layout>
    <article className="resume">
      <section className="name">
        <h1>Seth Hall</h1>
        <h2 className="title">Front End Developer</h2>
      </section>

      <section className="photo">
        <img src={avatar} alt="Seth Hall Avatar" />
      </section>

      <section className="about">
        <h6 className="header">About Me</h6>
        <p>
          A self-taught developer with 9 years of experience working in web
          development and front end. A life-long creative with a portfolio
          containing a variety of film, video, music and web projects. Possesses
          a strong passion and dedication to creative craft and vocation.
          Capable of collaboration across a variety of skill sets and
          personalities with a proven ability to lead and mentor.
        </p>
      </section>

      <section className="work">
        <h6 className="header">Work Experience</h6>

        {jobs.map((job, i) => (
          <div key={i} className="job">
            <h4 className="job-title">{job.title}</h4>
            <h5 className="company">
              {job.company}
              <span>
                {" "}
                {job.date} · {job.location}
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
          <h5 className="school-name">
            North Carolina State University
            <span> 1995-1998</span>
          </h5>
        </div>
        <div className="school">
          <h4 className="degree">
            MFA - Creative Producing <br /> School of Film
          </h4>
          <h5 className="school-name">
            UNCSA <span> 2016-2018</span>
          </h5>
        </div>
      </section>

      <section className="skills">
        <h6 className="header">Skills</h6>
        <div className="skills-flex">
          <div className="skills-wrapper">
            <h4 className="title">Hard Skills</h4>
            <ul>
              {hardSkills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills-wrapper">
            <h4 className="title">Soft Skills</h4>
            <ul>
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
          <Project
            title="Old Mother Hubbard"
            src={omh}
            meta={
              <p>
                HTML/CSS <br />
                Responsive Design <br />
                Foundation Framework{" "}
              </p>
            }
            url="https://www.oldmotherhubbard.com/"
            srcUrl="https://github.com/sethburtonhall/old-mother-hubbard"
          />
          <Project
            title="React PokeGame"
            src={pokemon}
            meta={
              <p>
                React <br />
                PokeAPI <br />
              </p>
            }
            url="https://pokegame-sbh.netlify.com"
            srcUrl="https://github.com/sethburtonhall/react-pokedex"
          />
          <Project
            title="Hall Pictures"
            src={hallpictures}
            meta={
              <p>
                Gatsby.js
              </p>}
            url="https://www.hallpictures.us/"
            srcUrl="https://github.com/sethburtonhall/hall-pictures"
          />
          <Project
            src={omh}
            meta="Custom HTML/CSS from Adobe XD mocks. Custom HTML/CSS from Adobe XD mocks"
            url="https://www.oldmotherhubbard.com/"
          />
          <Project
            src={omh}
            meta="Custom HTML/CSS from Adobe XD mocks"
            url="https://www.oldmotherhubbard.com/"
          />
          <Project
            src={omh}
            meta="Custom HTML/CSS from Adobe XD mocks"
            url="https://www.oldmotherhubbard.com/"
          />
        </div>
      </section>
    </article>
  </Layout>
)

export default IndexPage
