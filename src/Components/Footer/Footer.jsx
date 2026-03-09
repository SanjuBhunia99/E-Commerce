import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo2.png";
import { SlSocialInstagram,SlSocialGithub  } from "react-icons/sl";
import { TiSocialLinkedinCircular, TiSocialTwitter } from "react-icons/ti";
import { FaWhatsapp, } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-logo">
        <hr />
        <img src={logo} alt="" height="60px" />
        <p>Cartify</p>
      </div>
      <ul className="footer-links">
        <li>About</li>
        <li>Products</li>
        <li>Offices</li>
        <li>Company</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <a
            href="https://www.instagram.com/thesanju_bhunia99/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialInstagram size={25} />
          </a>
        </div>
        <div className="footer-icon-container">
          <a
            href="https://wa.me/919775638730"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={25} />
          </a>
        </div>
        <div className="footer-icon-container">
          <a
            href="https://www.linkedin.com/in/sanju-bhunia99/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialLinkedinCircular size={25} />
          </a>
        </div>
        <div className="footer-icon-container">
          <a
            href="https://github.com/SanjuBhunia99/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialGithub size={25} />
          </a>
        </div>
        <div className="footer-icon-container">
          <a
            href="https://x.com/SanjuBhunia99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialTwitter size={25} />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        {/* <hr/> */}
        <p>Made with 🧡 and React</p>
        <p>Copyright © {new Date().getFullYear()}. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
