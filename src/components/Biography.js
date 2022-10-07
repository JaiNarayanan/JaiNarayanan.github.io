import { Fragment } from 'react'
import profile from '../assets/me2.png'

const Navbar = () => {
  return (
    <>
        <section className="px-80 pt-36 h-screen">
            <div class="grid-container grid grid-cols-6">
                <div class="item2 col-span-4">
                    <div className='mb-10 text-3xl text-white after:'>
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