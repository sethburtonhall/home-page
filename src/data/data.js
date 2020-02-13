import omh from "../images/omh.png"
import pokemon from "../images/pokemon.png"
import hallpictures from "../images/hall-pictures.jpg"
import tmdb from "../images/tmdb.png"
import ushahidi from "../images/ushahidi.png"
import ushdotcom from "../images/ushahidi-dotcom.png"

export const jobs = [
  {
    title: "Front-End Developer",
    company: "Ushahidi",
    description:
      "Ushahidi is a Nairobi, Kenya based technology company that designs products and initiatives that strive to solve global problems. As part of the design team I was responsible for all front-end code across multiple software products and websites.",
    date: "May 2013-October 2018",
    location: "Remote",
  },
  {
    title: "Front-End Developer",
    company: "Self-Employed",
    description:
      "As a freelance web developer I have partnered with creative agencies and individuals on a variety of web projects ranging from custom builds to content management systems.",
    date: "2011-2013 & 2018-2020",
    location: "Remote",
  },
]

export const hardSkills = [
  "React.js",
  "styled components",
  "HTML/CSS/Sass/JS",
  "front-end build tools (Grunt & Gulp)",
  "package managers (NPM, Yarn)",
  "html templating (Handlebars, Twig, etc...)",
  "git version control (Github)",
  "responsive design",
  "web performance and accessibility",
  "terminal/command line",
  "cross browser/cross device development",
  "CSS frameworks (Material UI, Bootstrap, Foundation, etc...)",
  "Static site generators",
  "content management systems (Craft CMS, Wordpress, etc...)",
]

export const softSkills = [
  "remote working - I am skilled in communicating across multiple time zones with multiple types of positions and personalities. In an autonomous environment I am great at time management and meeting deadlines.",
  "experience in Agile development",
  "honest and thoughtful communication",
  "excellent written and verbal communication skills",
  "listening and validating others",
  "positive and encouraging personality",
  "friendly and laid back demeanor",
  "a sense of humor",
  "a deep understanding of the development process and the efficiency needed to see it through from start to finish",
]

export const projects = [
  {
    src: ushahidi,
    title: "Ushahidi Platform",
    meta: [
      "Custom HTML/CSS/JS",
      "Responsive Design",
      "RTL support",
      "Handlebars.js",
    ],
    app: true,
    url: "https://uchaguzi.or.ke/views/map",
    srcUrl: "https://github.com/ushahidi/platform-pattern-library",
  },
  {
    src: tmdb,
    title: "Movie Search",
    meta: ["React.js", "TMDB API", "Custom Hooks", "Styled Components"],
    app: true,
    url: "https://react-tmdb-sbh.netlify.com/",
    srcUrl: "https://github.com/sethburtonhall/react-movie",
  },
  {
    src: omh,
    title: "Old Mother Hubbard",
    meta: ["HTML/CSS", "Responsive Design", "Foundation Framework"],
    app: false,
    url: "https://www.oldmotherhubbard.com/",
    srcUrl: "https://github.com/sethburtonhall/old-mother-hubbard",
  },
  {
    src: ushdotcom,
    title: "Ushahidi.com",
    meta: ["Craft CMS", "Twig Templating", "HTML/CSS/JS"],
    app: false,
    url: "https://www.ushahidi.com/",
    srcUrl: null,
  },
  {
    src: hallpictures,
    title: "Hall Pictures",
    meta: ["Gatsby.js", "React.js", "GraphQL"],
    app: false,
    url: "https://www.hallpictures.us/",
    srcUrl: "https://github.com/sethburtonhall/hall-pictures",
  },
  {
    src: pokemon,
    title: "PokeGame",
    meta: ["React.js", "PokeAPI"],
    app: true,
    url: "https://pokegame-sbh.netlify.com",
    srcUrl: "https://github.com/sethburtonhall/react-pokedex",
  },
]
