import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix.png";
import {PiCopyrightBold} from "react-icons/pi"
import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
                <div className="bottom-content">
              
              <img src={logo} alt=""  />
     
             <div className="text">
            
             <div className="copy">
             <PiCopyrightBold/>
                </div>
             <div className="copy">2023 </div> 
               <div className="copy">Cinepix.Inc </div> 
             </div>
             
              
          </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
