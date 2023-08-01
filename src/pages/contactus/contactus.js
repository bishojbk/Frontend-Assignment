import React from "react";

import "./contactus.styles.scss";

const ContactUsSection = () => {
  return (
    <div className="contactus-section">
      <div className="container">
        <div className="contactus-section_header">
          <h2>Contact Us</h2>
          <p>
            If you have any further inquires, please let us know by filling the
            form below
          </p>
        </div>

        <div className="contactus-section_form">
          <form action="https://formspree.io/f/mrgwbbdq" method="POST">
            <div className="d-flex">
              <div className="firstname">
                <h5>First name</h5>
                <input type="text"></input>
              </div>

              <div className="lastname">
                <h5>Last name</h5>
                <input type="text"></input>
              </div>
            </div>

            <div className="email">
              <h5>Email</h5>
              <input type="email"></input>
            </div>

            <div className="textarea">
              <h5>Message</h5>
              <textarea rows="4"></textarea>
            </div>

            <div className="button">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
