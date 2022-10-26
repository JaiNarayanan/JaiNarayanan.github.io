import './App.css';
import Navbar from './components/Navbar'
import IconBar from './components/IconBar';
import Home from './components/Home';
import Projects from './components/Project';

const Portfolio = () => {
  return(
    <>
      <div className="bg-primary-gray min-h-[100vh]">
        <Navbar />
        <IconBar />
        <main className="container">
          <div className="lg:px-10">
          <Home />
          <Projects />  
          </div>
        </main>
      </div>
    </>  
  )
}

export default Portfolio;
