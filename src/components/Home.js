import { Fragment } from 'react'
import profile from '../assets/me2.png'
import Typewriter from 'typewriter-effect';

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
                <h1 class="text-white md:text-5xl sm:text-4xl text-4xl mt-3 font-bold font-sans">Jai Narayanan</h1>
                <h1 class="text-gray-300 md:text-5xl text-3xl md:mt-2 mt-1 font-bold font-sans">
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
                <p class="block mt-5 text-fonts-gray font-sans">I‘m a junior web developer with a passion for building web applications. I have very good skills in JavaScript, React, PHP and MySQL. I am also a UI Designer and I am always ready to learn new technologies.</p>
                <div className="buttons mt-8 flex items-center flex-wrap lg:justify-start justify-center">
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Navbar;