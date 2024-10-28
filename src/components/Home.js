
import React from 'react';
 import './Home.css' // Import the CSS file for styling
 import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home-section">
      <div className="container text-center text-white">
        <h1 className="display-4">Transforming Waste into Worth</h1>
        <p className="lead">Join us in creating a sustainable future through recycling.</p>
        <p>Welcome to <b>Niisharu31 Impex. Inc.</b>, where we believe in the power of recycling. We buy a variety of recyclable materials, ensuring they are processed responsibly and efficiently. Together, we can reduce waste and promote a greener planet.</p>
        <Link to="/services" className="btn btn-success mt-3">Learn More About Our Services.</Link>
      </div>
    </section>
  );
};

export default Home;
