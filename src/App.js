import './App.css';
import Navbar from './components/Navbar'
import IconBar from './components/IconBar';
import Biography from './components/Biography';
import Home from './components/Home';

const Portfolio = () => {
  return(
    <>
      <div className="bg-primary-gray min-h-[100vh]">
        <Navbar />
        <IconBar />
        <div id="content" className="h-[100%] px-[25%]">
          <Home />
          {/* <Biography />   */}
        </div>
      </div>
    </>  
  )
}

export default Portfolio;
