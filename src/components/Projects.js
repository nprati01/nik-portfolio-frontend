import { useState, useEffect } from "react";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {

		//make api call and get response
    const response = await fetch("./projects.json");

		// turn response into javascript object
    const data = await response.json();

		// set the projects state to the data
    setProjects(data);

  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load

  useEffect(() => {
    getProjectsData();
});

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return(
      <div className="w-full md:h-full text-stone-100 my-32" id="projects">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-stone-100 border-cyan-500">Check out some of my recent projects  </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project) =>(
              <div key={project.id} style={{backgroundImage: `url(${project.image})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto" id="project-bg-div">
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font bold text-white tracking-wider">{project.name}</span>
                  <div className="pt-8 text-center">
                    <a href={project.git}>
                      <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Code</button>
                    </a>
                    <a href={project.live}>
                      <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Live</button>
                    </a>

                  </div>
                </div>
              </div>

            ))}


          </div>

        </div>


      </div>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
