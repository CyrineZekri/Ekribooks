import React from 'react';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import './Footer.css';

function CustomFooter() {
  return (
    <div className="Full">

      <Footer.Divider />
      <div className="Details">
        <div className="Media">
          <Footer.Icon href="#" icon={BsFacebook} className="icon" />
          <Footer.Icon href="#" icon={BsInstagram} className="icon" />
          <Footer.Icon href="#" icon={BsTwitter} className="icon" />
        </div>
        <Footer.Copyright href="#" by=" Made With Love by Cyrine ♥" className="copyright no-underline" />

      </div>
    </div>
  );
}

export default CustomFooter;
