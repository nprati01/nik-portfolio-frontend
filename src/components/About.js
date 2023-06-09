import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'
import ContactForm from './ContactForm';

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
    <div className='mx-auto my-32 bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl' id='about'>
      <div className="md:flex">
        <div className='md:shrink-0'>
          <img className="h-96 w-full object-cover object-center md:h-full md:w-full" src={about.headshot} alt=""/>
        </div>
        <div className='p-8'>
          <h2 className='uppercase tracking-wide text-3xl text-[#00A3B2] font-semibold'>{about.name}</h2>
          <h3 className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>{about.email}</h3>
          <p className="mt-2 text-slate-500">{about.bio}</p>
          <div className="my-8 grid grid-cols-1 gap-2">
          <button className="bg-[#00A3B2] hover:bg-purple-400 text-white font-bold py-2 px-4 mx-2 rounded inline-flex items-center"><FaDownload style={{color: "#fafafa",}} />
          <a href="https://docs.google.com/document/d/1ZRlzPaXaeWZFsrkhQtBlbRcawxs1XptdA4_Nu2jG_oo/edit?usp=sharing"> CV </a></button>
          <button className="bg-[#00A3B2] hover:bg-purple-400 text-white font-bold py-2 px-4 mx-2 rounded inline-flex items-center"><FaLinkedin style={{color: "#fafafa",}} /><a href="https://www.linkedin.com/in/nprati/">LinkedIn</a></button>
          <button className="text-center bg-[#00A3B2] hover:bg-purple-400 text-white font-bold py-2 px-4 mx-2 rounded inline-flex items-center"><a href="https://github.com/nprati01"><FaGithub style={{color: "#fafafa", size: "lg",}} /></a>GitHub</button>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>

  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
