import './App.css';
import Navbar from './components/Navbar'
import IconBar from './components/IconBar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Project';

const Portfolio = () => {
  return(
    <>
      <div className="bg-primary-gray min-h-[100vh]" id="about">
        <Navbar />
        <main className="container">
          <div className="lg:px-10">
          <Home />
          <Experience />  
          <Projects />  
          </div>
        </main>
        <IconBar />
      </div>
    </>  
  )
}

export default Portfolio;
