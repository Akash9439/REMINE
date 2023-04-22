import React,{useState,useEffect} from 'react'
import './Testimonials.css'
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from '../Navbar/Navbar.js'
import User1 from '../images/user1.png'
import User2 from '../images/user2.png'
import User3 from '../images/user3.png'
import User4 from '../images/user4.png'
import Loading from '../loading.gif'

function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    fade:true
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='testimonials'>
      <Navbar />

      {isLoading?<img className='load-img' style={{width:'700',height:'350'}} src={Loading} alt='loading'/>:<Slider className='carousel' {...settings}>
        <div>
          <center>
            <img className='carousel-img' src={User1} alt='user1' />
            <h2 className='carousel-head'>Sarah Smith</h2>
            <p className='carousel-tag'>"I was hesitant to use an online service for lithium battery recycling, but this website made the process so simple and hassle-free. They provided clear instructions and even gave me a prepaid shipping label. I appreciate their commitment to sustainability and protecting the environment."</p>
          </center>
        </div>
        <div>
          <center>
            <img className='carousel-img' src={User2} alt='user1' />
            <h2 className='carousel-head'>Emily Wilson</h2>
            <p className='carousel-tag'>"I recently used this website to recycle my old laptop and I was impressed by how fast and easy the process was. They even wiped my data from the hard drive to protect my privacy. I appreciate their attention to detail and commitment to customer satisfaction. Highly recommend!"</p>
          </center>
        </div>
        <div>
          <center>
            <img className='carousel-img' src={User3} alt='user1' />
            <h2 className='carousel-head'>Michael Lee</h2>
            <p className='carousel-tag'>"As someone who is passionate about sustainability, I was thrilled to find this website. Their e-waste recycling program is a game-changer and I appreciate the impact they are making on the environment. Their prices are also very competitive and their service is top-notch."</p>
          </center>
        </div>
        <div>
          <center>
            <img className='carousel-img' src={User4} alt='user1' />
            <h2 className='carousel-head'>Heasel Smith</h2>
            <p className='carousel-tag'>"I had a great experience with this website. Their e-waste disposal service is top-notch and eco-friendly. They made it so easy to recycle my old electronics and I even got paid for it! Highly recommend their services."</p>
          </center>
        </div>
      </Slider>}



      
    </div>
  )
}

export default Testimonials