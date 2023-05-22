import { HiArrowNarrowRight } from 'react-icons/hi';
import { HashLink as Link } from 'react-router-hash-link';

function Home(props) {

    return(
    <div id='home' className="h-screen w-full">

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full mb-20">

        <div className="bg-stone-100  rounded-lg p-6 shadow-xl">
          <p className="text-[#00AB9B] font-bold">Hello world! My name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#1F95B6]">NICOLE PRATI</h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#00A3B2]">I am a Full Stack Developer</h2>
          <p className='text-[#406EAA] py-4 mt-4 max-w-[700px]'>I am an innovative full stack developer with a passion for problem solving and learning. Currently, I'm studying new programming languages and building web responsive projects to sharpen my developemnt skills.</p>

        </div>
        <div>

              <button className='text-white group border-2 px-6 py-3 my-8 flex items-center'>
                <Link to="#projects" smooth={true} duration={500}>
                 View Projects
                </Link>
                <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span>
              </button>

          </div>
      </div>
    </div>

    )

  }

  export default Home;
