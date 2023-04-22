import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';
import Faq from './Faq/Faq';
import Aboutus from './Aboutus/Aboutus';
import Testimonials from './Testimonials/Testimonials';
import Footer from './Footer/Footer';


const questions = [
   { id: 1, title: 'What is e-waste?', answer: 'E-waste, or electronic waste, is any electronic device that has reached the end of its useful life and is discarded.' },
   { id: 2, title: 'Why is it important to recycle e-waste?', answer: 'E-waste contains hazardous materials such as lead, mercury, and cadmium that can pose a threat to human health and the environment if not properly disposed of. Recycling e-waste helps to prevent these materials from entering landfills and polluting the environment.' },
   { id: 3, title: 'What types of lithium batteries can be recycled?', answer: 'Lithium-ion batteries, which are commonly found in smartphones, laptops, and electric vehicles, can be recycled.' },
   { id:4, title:' What happens to the hazardous materials in e-waste during the recycling process?', answer:' The hazardous materials in e-waste are typically removed and disposed of in an environmentally responsible way. For example, lead and mercury can be recovered and reused in other products, while other materials may be treated and neutralized before being safely disposed of.'},
   { id:5,title:'What happens to the recycled materials after they are processed?',answer: 'The recycled materials are typically sold to manufacturers who use them to make new products. For example, recycled metals may be used to make new batteries or other electronic devices.'},
   { id:6,title: 'How can I dispose of my e-waste and lithium batteries?', answer: ' Many recycling companies offer e-waste and lithium battery recycling services. You can also check with your local government to see if they offer e-waste recycling programs. It is important to not dispose of e-waste and lithium batteries in the regular trash as they can pose a threat to the environment.'}
];

function App() {
  return (
   <div className='App'>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={[<Navbar />,<Home />]} />
            <Route path='/aboutus' element={<Aboutus />}/>
            <Route path='/services' element={<Services />} />
            <Route path='/testimonials' element={<Testimonials />}/>
            <Route path='/faq' element={<Faq questions={questions} />}/>
            <Route path='/footer' element={<Footer />}/>
         </Routes>
     </BrowserRouter>
   </div> 
  );
}

export default App;
