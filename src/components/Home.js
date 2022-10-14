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
        <section className="h-screen flex ">
          <div className='my-36'>
            <div className="text-primary-blue font-mono leading-loose">
              Hello, my name is
            </div>
            <div className="text-secondary-white font-open_sans font-semibold	text-[80px] leading-normal">
              Jai Narayanan
            </div>
            <div className="text-secondary-gray font-open_sans	text-[50px]">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('Student')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('Security Enthusiast')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('Software Engineer')
                    .start();
                }}
              />
            </div>
            <button className='mt-5 py-3 px-20 bg-transparent hover:bg-gray-700 text-primary-blue font-semibold border border-primary-blue rounded'>Resume</button>
            </div>
        </section>
    </>
  )
}

export default Navbar;