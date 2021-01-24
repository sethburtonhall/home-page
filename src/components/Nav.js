import React from "react"
import { Link } from "gatsby"

const Nav = ({ toggleCode, toggleFilm }) => (
  <nav>
    <Link
      to="/"
      className="nav-link"
      activeClassName="active-code"
      onClick={toggleCode}
    >
      <i class="fas fa-code"></i>
      <span>Code</span>
    </Link>
    <Link
      to="/"
      className="nav-link"
      activeClassName="active-film"
      onClick={toggleFilm}
    >
      <i class="fas fa-video"></i>
      <span>Film</span>
    </Link>
  </nav>
)

export default Nav
