import './App.css';
import Navbar from './components/Navbar'
import IconBar from './components/IconBar';
import Biography from './components/Biography';
import Home from './components/Home';
import Project from './components/Project';

const Portfolio = () => {
  return(
    <>
      <div className="bg-primary-gray min-h-[100vh]">
        <Navbar />
        <IconBar />
        <div id="content" className="h-[100%] px-[20%]">
          <Home />
          {/* <Biography />   */}
          <Project />
        </div>
      </div>
    </>  
  )
}

export default Portfolio;
