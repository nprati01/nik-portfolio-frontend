import {Routes, Route} from 'react-router'
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills"


function Main(props) {
    const URL = "http://localhost:4000/";
    return(
      <main>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects URL={URL} />} />
            <Route path="/about" element={<About URL={URL} />} />
            <Route path="/skills" element={<Skills URL={URL} />} />
        </Routes>
    </main>

    )
  }

  export default Main;
