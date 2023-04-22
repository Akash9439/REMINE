import React,{useState,useEffect} from "react";
import HeroImage from "../hero-bg.gif";
import './Home.css'
import 'animate.css';
// import Down from '../arrow-down-circle.svg'
// import {Link} from 'react-router-dom';
// import Aboutus from '../Aboutus/Aboutus';
// import Services from '../Services/Services';
import Loading from '../loading.gif'



function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  
  return (
  <div className='parent'>
    {isLoading?<img className='load-img' style={{width:'700',height:'350'}} src={Loading} alt='loading'/>:<div className="home">
      <div className='tag'>
          <h1>| REMINE</h1>
          <p className='tag'>At Remine, we believe in the power of sustainable e-cycling to protect our planet and promote a better future for all. Our mission is to create a circular economy that transforms e-waste into valuable resources, reducing the environmental impact of electronic devices while driving economic growth and innovation. By recycling your e-waste with us, you join a community committed to reducing waste, conserving natural resources, and promoting a more sustainable way of life. Together, we can create a brighter future for our planet, one cycle at a time.</p>
      </div>
      <img
          className='hero-img'
          src={HeroImage}
          alt="hero"
          style={{ width: "600px", height: "600px" }}
      />
      </div>
      /* <div className='down'>
        <img className='down-child' style={{ width: "70px", height: "70px" }} src={Down} alt='down'/>
      </div> */
      }
  </div>
  )
}

export default Home;
