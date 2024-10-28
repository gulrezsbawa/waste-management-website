import React from 'react';

const Services = () => {
  return (
    <section className="services py-5">
      <div className="container bg-light">
        <h2 className="text-center">Our Services</h2>
        <h4 className="mt-4">What We Buy:</h4>
        <ul>
          <li>Plastics: We accept various types of plastic, including PET, HDPE, and more.</li>
          <li>Metals: From aluminum cans to scrap metal, we recycle it all.</li>
          <li>Paper and Cardboard: Ensure your paper waste is repurposed.</li>
          <li>Electronics: We responsibly recycle electronic waste, preventing harmful materials from ending up in landfills.</li>
        </ul>
        <h4 className="mt-4">How It Works:</h4>
        <ol>
          <li>1. Contact Us: Reach out for a quote or more information.</li>
          <li>2. Schedule a Pickup: We’ll arrange a convenient time to collect your materials.</li>
          <li>3. Get Paid: Receive competitive pricing for your recyclables.</li>
        </ol>
      </div>
    </section>
  );
};

export default Services;
