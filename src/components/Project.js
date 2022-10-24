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
            <div className=''>
            <div className="relative mb-10 items-center text-3xl flex font-semibold text-white font-mono after:block 
                    after:bg-blue-300 after:h-[1px] after:w-[200px] after:ml-5 after:bg-secondary-border
                    before:bg-blue-300 before:h-[1px] before:w-[40px] before:mr-5 before:bg-secondary-border">
                        Some of My Projects
                    </div>
            </div>
        </section>
    </>
  )
}

export default Navbar;