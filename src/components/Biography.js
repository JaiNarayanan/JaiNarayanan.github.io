import { Fragment } from 'react'
import profile from '../assets/me2.png'

const Navbar = () => {
  return (
    <>
        <section className="h-screen flex px-10 py-5">
            <div class="grid-container grid grid-cols-6">
                <div class="item2 col-span-4">
                    <div className="relative mb-10 items-center text-3xl flex font-semibold text-white font-mono after:block 
                    after:bg-blue-300 after:h-[1px] after:w-[200px] after:ml-5 after:bg-[#233554]
                    before:bg-blue-300 before:h-[1px] before:w-[40px] before:mr-5 before:bg-[#233554]">
                        About Me
                    </div>
                </div>
                <div class="item1 col-span-2 pt-20">
                    <img className="rounded-md h-64 w-64" />                    
                </div>

            </div>
        </section>
    </>
  )
}

export default Navbar;