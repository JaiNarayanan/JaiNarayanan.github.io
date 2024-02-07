import { Fragment } from 'react'
import profile from '../assets/me2.png'
import Typewriter from 'typewriter-effect';

const Project = () => {

  return (
    <>
      <section className="h-screen" id="projects">
        {/* <div className="mb-8">
          <h2 className="text-primary-blue font-mono text-lg font-medium aos-init aos-animate" data-aos="fade-right">
            My Projects
          </h2>
          <h4>
            EECS 494 Metroid Recreation
          </h4>
          <h4>
            Personal contributions: 
          </h4>
          <h3 className="text-white font-sans font-bold text-2xl mt-1 aos-init aos-animate" data-aos="fade-up">Check out some of my creations!</h3>
          </div> */}
          <h4 className='text-white text-2xl font-semibold'>EECS 494 Project 1: Metroid Recreation</h4>
          <h4 className='text-white text-2xl font-semibold'>Personal Contributions:</h4>
          <ul className='ml-3'>
            <li className='text-white text-xl'>I built all of the enemies AI's and created half the weapons</li>
            <li className='text-white text-xl'>I  created the reflectable and physics components related to the laser needed for our custom level</li>
            <li className='text-white text-xl'>I contributed towards the overall feel of the player movement and authentic recreation of the map</li>
          </ul>
          <h4 className="text-white text-2xl">Tech Stack: Unity and C#</h4>
          <h4 className="text-white text-2xl">Check out the game below! Or at this <a href="https://linkstorm.itch.io/metroid">link</a></h4>
          <a href="https://linkstorm.itch.io/metroid">Game On Itch.io</a>

      </section>
    </>
  )
}

export default Project;