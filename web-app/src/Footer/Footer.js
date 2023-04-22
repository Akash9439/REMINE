import React, { useState,useEffect } from 'react';
import ContactImg from '../images/contact-img.svg'
import './Footer.css'
import Navbar from '../Navbar/Navbar'
import Loading from '../loading.gif'

function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Query: ${query}`);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
     <Navbar />

     {isLoading?<img className='load-img' style={{width:'700',height:'350'}} src={Loading} alt='loading'/>:<div className='footer' style={{display:'flex',flexDirection:'row'}}>
      <div className="contact" style={{backgroundColor:'rgba(0, 0, 0, 0.5)',padding:'50px',width:'400px',marginTop:'120px',marginLeft:'50px'}}>
        <h2 style={{ color: '#fff' }}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" style={{ color: '#fff' }}>Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ color: '#fff', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #fff', padding: '10px', marginBottom: '20px', width: '100%' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ color: '#fff' }}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ color: '#fff', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #fff', padding: '10px', marginBottom: '20px', width: '100%' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="query" style={{ color: '#fff' }}>Query</label>
            <textarea
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
              style={{ color: '#fff', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #fff', padding: '10px', marginBottom: '20px', width: '100%' }}
            ></textarea>
          </div>
          <button type="submit" style={{ backgroundColor: '#fff', color: '#000', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>
      <img className='contactimage' style={{width:'650px',height:'650px',marginLeft:'220px'}} src={ContactImg} alt='contact-img'/>
    </div>}
    
    </div>
  );
};

export default Footer;
