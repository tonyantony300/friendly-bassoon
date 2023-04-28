import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Revo</h1>
        <p>We provide top-quality services to help your business succeed.</p>
        <button>Learn More</button>
      </section>
      <section className="services">
        <div className='heading'><h2>Our Services</h2></div>
        <div className="service">
          <img src="https://getquicktech.com.au/wp-content/uploads/2021/04/Tech-support.png" alt="Service 1" />
          <h3>Automated Installation support</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="service">
          <img src="https://static.wixstatic.com/media/9c185e_c26e7426f2824913bd5ec3e1ac888b2a~mv2.png/v1/fill/w_1023,h_576,al_c,q_90,enc_auto/9c185e_c26e7426f2824913bd5ec3e1ac888b2a~mv2.png" alt="Service 2" />
          <h3>Home delivery</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="service">
          <img src="https://s3.amazonaws.com/omiweb/wp-content/uploads/2017/05/30120907/bigstock-148711844.jpg" alt="Service 3" />
          <h3>24/7 Assistance</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>
      <section className="cta">
        <h2>Ready to get started?</h2>
        <button ><Link to="/contact">Contact Us</Link></button>
      </section>
    </div>
  );
}

export default Home;
