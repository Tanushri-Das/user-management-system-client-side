import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-white py-4 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="fs-5">
              &copy; {date} - All rights reserved by Tanushri Das
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div>
              <a
                className="me-3"
                href="https://www.linkedin.com/in/tanushri-das-06a520194/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="fs-2 linkedin" />
              </a>
              <a
                className="me-3"
                href="https://www.facebook.com/tanushri.das01?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="fs-2 facebook" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=ZvggB9FT4gM&ab_channel=MuseumofFineArts%2CBoston"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="fs-2 youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
