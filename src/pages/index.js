import React from "react"
import Layout from "../components/layout"
import Project from "../components/Project"
import { jobs, hardSkills, softSkills } from "../data/data"
import avatar from "../images/seth.jpg"
import omh from "../images/omh.png"
import pokemon from "../images/pokemon.png"
import hallpictures from "../images/hall-pictures.jpg"
import tmdb from "../images/tmdb.png"
import ushahidi from "../images/ushahidi.png"
import ushdotcom from "../images/ushahidi-dotcom.png"
import "../styles/styles.css"

const IndexPage = () => (
  <Layout>
    <article className="resume">
      <section className="name">
        <h1>Seth Hall</h1>
        <h2 className="title">Front End Developer</h2>
      </section>

      <section className="photo">
        <img src={avatar} />
      </section>

      <section className="about">
        <h6 className="header">About Me</h6>
        <p>
          A self-taught developer with 9 years of experience working in web
          development and front end. A life-long creative with a portfolio
          containing a variety of film, video, music and web projects. Possesses
          a strong passion and dedication to creative craft and vocation.
          Capable of collaboration across a variety of skill sets and
          personalities with a proven ability to lead and mentor. Check out my{" "}
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
              {job.company}
              <span>
                {" "}
                | {job.date} | {job.location}
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
            <span> | 1995-1998</span>
          </h5>
        </div>
        <div className="school">
          <h4 className="degree">MFA - Creative Producing - School of Film</h4>
          <h5 className="school-name">
            UNCSA<span> | 2016-2018</span>
          </h5>
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
          <Project
            title="Old Mother Hubbard"
            src={omh}
            meta={
              <p>
                HTML/CSS/Sass <br />
                Responsive Design <br />
                Foundation Framework{" "}
              </p>
            }
            url="https://www.oldmotherhubbard.com/"
            srcUrl="https://github.com/sethburtonhall/old-mother-hubbard"
          />
          <Project
            title="PokeGame"
            src={pokemon}
            meta={
              <p>
                React.js <br />
                PokeAPI <br />
              </p>
            }
            app={true}
            url="https://pokegame-sbh.netlify.com"
            srcUrl="https://github.com/sethburtonhall/react-pokedex"
          />
          <Project
            title="Ushahidi"
            src={ushdotcom}
            meta={
              <p>
                Craft CMS <br />
                Twig <br />
                HTML/CSS/Sass{" "}
              </p>
            }
            url="https://www.ushahidi.com/"
          />
          <Project
            title="Movie Search"
            src={tmdb}
            meta={
              <p>
                React.js <br />
                TMDB API <br />
                Styled Components
              </p>
            }
            app={true}
            url="https://react-tmdb-sbh.netlify.com/"
            srcUrl="https://github.com/sethburtonhall/react-movie"
          />
          <Project
            title="Hall Pictures"
            src={hallpictures}
            meta={<p>Gatsby.js</p>}
            url="https://www.hallpictures.us/"
            srcUrl="https://github.com/sethburtonhall/hall-pictures"
          />
          <Project
            title="Ushahidi Platform"
            src={ushahidi}
            meta={
              <p>
                HTML/CSS/Sass <br />
                Custom Components <br />
                Responsive Design <br />
                Handlebars.js
              </p>
            }
            url="http://preview.ushahidi.com/platform-pattern-library/master/"
            srcUrl="https://github.com/ushahidi/platform-pattern-library"
          />
        </div>
      </section>
    </article>
  </Layout>
)

export default IndexPage
