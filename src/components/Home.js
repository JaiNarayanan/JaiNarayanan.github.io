import { Fragment } from 'react'
import profile from '../assets/me2.png'

const Navbar = () => {
  return (
    <>
        <section className="h-screen">
            <div className="text-primary-orange font-mono">
              Hello, my name is
            </div>
            <div className="text-secondary-white font-open_sans font-semibold	text-[80px]">
              Jai Narayanan
            </div>
        </section>
    </>
  )
}

export default Navbar;