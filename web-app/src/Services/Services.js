import React,{useState,useEffect} from 'react'
import './Services.css'
import 'animate.css';
import Navbar from '../Navbar/Navbar.js'
import Card1svg from '../card1.svg'
import Card2svg from '../card2.svg'
import Card3svg from '../card3.svg'
import Loading from '../loading.gif'

function Services() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className='services'>
      <Navbar />
     {isLoading?<img className='load-img' style={{width:'700',height:'350'}} src={Loading} alt='loading'/>:<div><center>
        <h3 className='head-tag'>We are committed to providing sustainable and responsible <br /> e-waste disposal and recycling solutions to our clients. Here are the services we offer:</h3>
      </center>
      <div className='service-items'>
        <div className='card'>
          <img className='card-image' src={Card1svg} style={{width:'250px',height:'250px'}} alt='card1' />
          <center><h2 className='card-title'>E-Waste Collection and Recycling</h2></center>
          <p className='card-tag'>We offer collection and recycling services for all types of e-waste, including computers, laptops, smartphones, printers, televisions, and other electronics. Our team follows all the necessary guidelines and regulations to ensure proper disposal and recycling of e-waste, preventing environmental harm and promoting sustainability.</p>
        </div>
        <div className='card'>
          <img className='card-image' src={Card2svg} style={{width:'250px',height:'250px'}} alt='card1' />  
          <center><h2 className='card-title'>Lithium Battery Recycling</h2></center>
          <p className='card-tag'>Lithium batteries are commonly used in electronic devices, and their improper disposal can lead to serious environmental consequences. At our facility, we have specialized equipment and expertise to safely recycle lithium batteries, ensuring that they do not end up in landfills or cause pollution.</p>
        </div>
        <div className='card'>
          <img className='card-image' src={Card3svg} style={{width:'250px',height:'250px'}} alt='card1' />
          <center><h2 className='card-title'>Data Destruction Services</h2></center>
          <p className='card-tag'>We understand that data security is a critical concern for many clients when disposing of e-waste. Our team provides data destruction services that meet the highest industry standards, including the secure erasure of hard drives and other storage devices.</p>
        </div>
        {/* <div className='card'>
        <img className='card-image' src={Card1svg} style={{width:'250px',height:'250px'}} alt='card1' />
        <center><h2 className='card-title'>On-Site Services</h2></center>
        <p className='card-tag'>For clients with large quantities of e-waste, we offer on-site collection and recycling services. Our team will come to your location and handle the disposal and recycling of e-waste, ensuring that the process is seamless and efficient.</p>
        </div> */}
      </div></div>}


      
    </div>
  )
}

export default Services