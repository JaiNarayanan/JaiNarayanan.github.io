import './App.css';
import Navbar from './components/Navbar'
import IconBar from './components/IconBar';
import Biography from './components/Biography';

const Portfolio = () => {
  return(
    <>
      <div className="bg-primary-gray h-full">
        <Navbar />
        <IconBar />
        <div id="content" className="px-40">
          <Biography />  
        </div>
      </div>
    </>  
  )
}

export default Portfolio;
