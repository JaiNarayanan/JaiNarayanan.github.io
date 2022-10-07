import './App.css';
import Navbar from './components/Navbar'
import IconBar from './components/IconBar';
import Biography from './components/Biography';
import Home from './components/Home';

const Portfolio = () => {
  return(
    <>
      <div className="bg-primary-gray h-screen">
        <Navbar />
        <IconBar />
        <div id="content" className="h-screen">
          {/* <Home /> */}
          {/* <Biography />   */}
        </div>
      </div>
    </>  
  )
}

export default Portfolio;
