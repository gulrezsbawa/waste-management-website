import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us py-5">
      <div className="container text-center bg-light">
        <h2 className="display-5">About Us</h2>
        <p className="lead">Our Mission</p>
        <p>At Niisharu31 Impex. Inc., our mission is to make recycling accessible and effective. We aim to educate our community about the importance of recycling and provide a seamless process for individuals and businesses alike.</p>
        <p className="lead">Our Vision</p>
        <p>We envision a world where waste is minimized, and resources are maximized through responsible recycling practices.</p>
        <h3 className="mt-4">Why Choose Us?</h3>
        <ul className="list-unstyled">
          <li>Eco-Friendly Practices</li>
          <li>Competitive Pricing</li>
          <li>Exceptional Customer Service</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
