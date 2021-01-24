import art from "../images/art.png"
import dks from "../images/dks.jpg"
import omh from "../images/omh.png"
import pokemon from "../images/pokemon.png"
import hallpictures from "../images/hall-pictures.jpg"
import tmdb from "../images/tmdb.png"
import ushahidi from "../images/ushahidi.png"
import ushdotcom from "../images/ushahidi-dotcom.png"

export const frontend = "Frontend"

export const codeBio =
  "I am a Frontend/Full Stack Web Developer living in the North Carolina mountains. I favor JAMstack and serverless environments. I am currently available for work. Feel free to reach out to discuss your project."

export const filmBio =
  "I also have an MFA in Creative Producing from UNCSA. Hall Pictures is my NC based film company that specializes in the development and production of shorts, features, and series. We are truly independent, doing our best to develop great stories and produce high-quality content while providing a safe and nurturing environment for film creatives."

export const jobs = [
  {
    title: `${frontend}/Full Stack Web Developer`,
    company: "SoleLife, Inc",
    description: `SoleLife streams and automates your coaching business with tele-conferencing, chat, admin tasks, scheduling, billing, and more. As a member of the dev team, I worked on a React frontend and AWS serverless backend.`,
    date: "October 2020-December 2020",
    type: "Contract",
    location: "Remote",
  },
  {
    title: `${frontend} Web Developer`,
    company: "Ocupop",
    description: `Ocupop is a creative design agency based out of Milwaukee, WI. As a member of the dev team, I worked on a custom e-commerce platform and custom CMS marketing sites.`,
    date: "May 2020-September 2020",
    type: "Contract",
    location: "Remote",
  },
  {
    title: `${frontend} Web Developer`,
    company: "Ushahidi",
    description: `Ushahidi is a Nairobi, Kenya based technology company that designs products and initiatives that strive to solve global problems. As part of the design team I was responsible for all front end code across multiple software products and websites.`,
    date: "May 2013-October 2018",
    type: "Full Time",
    location: "Remote",
  },
  {
    title: `${frontend} Web Developer`,
    company: "Self-Employed",
    description:
      "As a freelance web developer I have partnered with creative agencies and individuals on a variety of web projects ranging from custom builds to content management systems.",
    date: "2011-2013 & 2018-2020",
    type: "Freelance",
    location: "Remote",
  },
]

export const hardSkills = [
  "HTML/CSS/JS",
  "React/Redux",
  "Firebase/AWS",
  "serverless stack",
  "JAMstack",
  "headless CMS",
  "static site generators (Next, Gatsby, Jekyll)",
  "DatoCMS, CraftCMS, CloudCannon",
  "styled components, styled system, Sass, PostCSS, etc...",
  "html templating (Handlebars, Twig, etc...)",
  "CSS frameworks (Material UI, Bootstrap, Chakra UI, Foundation, etc...)",
  "git version control (Github, BitBucket)",
  "responsive design",
  "web performance and accessibility",
  "terminal/command line",
]

export const softSkills = [
  "remote working - I am skilled in communicating across multiple time zones with multiple types of positions and personalities. In an autonomous environment I am great at time management and meeting deadlines.",
  "experience in Agile development",
  "honest and thoughtful communication",
  "excellent written and verbal communication skills",
  "listening and validating others",
  "positive and encouraging personality",
  "friendly and laid back demeanor",
  "a good sense of humor",
  "a deep understanding of the development process and the efficiency needed to see it through from start to finish",
]

export const projects = [
  {
    src: art,
    title: "Artist Rescue Trust",
    meta: ["JAMstack", "Gatsby", "Dato CMS", "GraphQL", "Netlify"],
    app: false,
    url: "https://artistrescue.org/",
    srcUrl: "https://github.com/OurKettle/artist-rescue-trust",
  },
  {
    src: dks,
    title: "DKS Studio",
    meta: ["JAMstack", "Gatsby", "Dato CMS", "GraphQL", "Netlify"],
    app: false,
    url: "https://davidkstanley.studio/",
    srcUrl: "https://github.com/sethburtonhall/dks3.0",
  },
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

export const socialNetworks = [
  {
    url: "https://github.com/sethburtonhall",
    filmUrl: "https://github.com/sethburtonhall",
    faClass: "fab fa-github",
    codeContentOnly: true,
  },
  {
    url: "https://twitter.com/sethburtonhall",
    filmUrl: "https://twitter.com/sethburtonhall",
    faClass: "fab fa-twitter",
    codeContentOnly: true,
  },
  {
    url: "https://www.instagram.com/sethburtonhall/",
    filmUrl: "https://www.instagram.com/the.creative.producer/",
    faClass: "fab fa-instagram",
    codeContentOnly: false,
  },
  {
    url: "https://www.linkedin.com/in/sethburtonhall/",
    filmUrl: "https://www.linkedin.com/in/sethburtonhall/",
    faClass: "fab fa-linkedin-in",
    codeContentOnly: false,
  },

  {
    url: "mailto:sethburtonhall@gmail.com",
    filmUrl: "mailto:seth@hallpictures.com",
    faClass: "fas fa-envelope",
    codeContentOnly: false,
  },
  {
    url: "https://github.com/sethburtonhall/home-page",
    filmUrl: "https://github.com/sethburtonhall/home-page",
    //  faClass: "",
    codeContentOnly: false,
    hasContent: true,
    content: "v1.0",
  },
]
