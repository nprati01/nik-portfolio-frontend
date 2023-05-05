import { useState, useEffect } from "react";

function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {

		// make api call and get response
    const response = await fetch("./about.json");

		// turn response into javascript object
    const data = await response.json();

		// set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load

  useEffect(() => {
    getAboutData();
},[]);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div className="profile-container">
      <img className="profile-img" src={about.headshot} alt=""/>
      <div className="profile-details">
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p className="about-bio">{about.bio}</p>
      </div>
        <div className="profile-buttons">
          <button><a href="https://docs.google.com/document/d/1ZRlzPaXaeWZFsrkhQtBlbRcawxs1XptdA4_Nu2jG_oo/edit?usp=sharing"></a>View CV</button>
          <button><a href="https://www.linkedin.com/in/nprati/"></a>LinkedIn</button>
          <button><a href="https://github.com/nprati01"></a>GitHub</button>
        </div>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
