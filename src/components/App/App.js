
import './App.css';
// IMPORT COMPONENTS
import Nav from "../Nav";
import About from "../About"
import Projects from "../Projects"
import Home from "../Home"
import Skills from "../Skills"
// import Resume from '../Resume';





function App() {
  const URL = "http://localhost:4000/";

  return (

    <div className="App">
      <Nav />
      <Home />
      <About URL={URL}/>
      <Projects URL={URL} />
      <Skills />
      {/* <Resume /> */}






    </div>
  );
}

export default App;
