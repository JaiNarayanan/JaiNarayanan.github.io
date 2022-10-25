import { Fragment } from 'react'
import profile from '../assets/me2.png'
import Typewriter from 'typewriter-effect';
import { ReactComponent as ProjectIcon } from '../assets/project-icon.svg';
import { ReactComponent as ExpandIcon } from '../assets/expand-icon.svg';

const Navbar = () => {

  // new Typewriter('#typewriter', {
  //   strings: ['Hello', 'World'],
  //   autoStart: true,
  // });

  return (
    <>
      <section className="py-[1.5rem] md:py-24">
        <div className='flex flex-wrap items-center justify-between relative'>
          <div className="xl:w-5/12 w-full p-4">
            <div className="max-w-[500px] w-full lg:text-left text-center lg:mx-0 mx-auto">
              <h4 className="text-primary-blue font-mono text-base lg:text-lg">
                Hello! My name is,
              </h4>
              <h1 className="text-white md:text-5xl sm:text-4xl text-4xl mt-3 font-bold font-sans">Jai Narayanan</h1>
              <h1 className="text-gray-300 md:text-5xl text-3xl md:mt-2 mt-1 font-bold font-sans">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('Student')
                      .pauseFor(2000)
                      .deleteAll()
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString('Software Dev')
                      .start();
                  }}
                />
              </h1>
              <p className="block mt-5 text-fonts-gray font-scp">
                I'm a junior at the <span className="text-fonts-white">University of Michigan</span> studying Computer Science.
                I'm particularly interested in software development and cybersecurity. In my free time, I enjoy swimming, gaming,
                and participating in CTFs! 
                </p>
              <div className="buttons mt-8 flex items-center flex-wrap lg:justify-start justify-center">
                <a class="hover:bg-primary-hover bg-primary-blue/[0.18] inline-flex justify-center items-center text-center
                hover:text-white duration-200 undefined false false px-6 h-14 
                rounded font-mono font-medium bg-darkLight border-none text-primary-blue hover:cursor-pointer">
                  <div className="mr-2">
                    <ProjectIcon/>
                  </div>
                  My Projects
                </a>
                <a class="ml-3 bg-primary-hover inline-flex justify-center items-center text-center
                text-white duration-200 undefined false false px-6 h-14 
                rounded font-mono font-medium bg-darkLight border-none hover:bg-primary-hover/[0.5] hover:cursor-pointer">
                  Resume
                  <div className="ml-2">
                    <ExpandIcon/>
                  </div>                  
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar;