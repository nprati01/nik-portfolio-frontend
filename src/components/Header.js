import { Link } from "react-router-dom"



function Header(props) {


    return (
        <ul className="Nav">
          <li><Link className="nav-link" to="/">HOME</Link></li>
          <li><Link className="nav-link"to="/about">ABOUT</Link></li>
          <li><Link className="nav-link"to="/projects">PROJECTS</Link></li>
          <li><Link className="nav-link"to="/skills">SKILLS</Link></li>
        </ul>


    )
  }

  export default Header;
