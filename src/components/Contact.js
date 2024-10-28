import React from 'react';

const Contact = () => {
  return (
    <section className="contact py-5">
      <div className="container bg-light">
        <h2 className="text-center">Get in Touch</h2>
        <p className="text-center">Have questions or want to schedule a pickup? Contact us today!</p>
        <ul className="list-unstyled text-center">
          <li>Phone: +1 587-573-2731</li>
          <li>Email: [Your Email Address]</li>
          <li>Address: 125 Taracove Crescent North East, Calgary, Alberta</li>
        </ul>
        <p className="text-center">Follow Us on Social Media:</p>
        <div className="text-center">
          <a href="https://facebook.com" className="btn btn-primary me-2">Facebook</a>
          <a href="https://twitter.com" className="btn btn-info me-2">Twitter</a>
          <a href="https://instagram.com" className="btn btn-danger">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
