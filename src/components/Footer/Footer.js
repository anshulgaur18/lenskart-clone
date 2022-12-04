import React from "react";
import "./footer.css";
import {BsPlusCircle} from "react-icons/bs"
import {FaTwitter,FaFacebookF,FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <h1>Buy The Best Eyewear From Lenskart</h1>
        <p>
          Lenskart Is The Leading E-Commerce Portal For Eyewear In India. It Has
          Revolutionised The Eyewear Industry In The Country With Its
          Omni-Channel Approach. From An Ever-Growing Number Of Offline Stores
          Across Major Cities In The Country To Innovative Integration Of
          Technology While Purchasing Online, Lenskart Caters To Every Customer
          With Several Deals And Offers.
        </p>
        <p>
          A One-Stop Online Solution For Purchasing Eyewear And Its Accessories,
          Lenskart Delivers Them Right At Your Doorstep With Convenient Methods
          Of Payment. Sunglasses As Well As Eyeglasses Are Available For Men And
          Women In A Diverse Array Of Styles And Trendy Colours. If You Want To
          Try Out Contact Lenses, Pick The Ones Of Your Choice From The
          Extensive Variety Of Coloured Contact Lenses From Our Online Store.
        </p>
      </div>
      <div className="footerTabs">
        <div className="footerTabs1st">
          <h1>SUNGLASSES</h1>
          <BsPlusCircle size="22"/>

        </div>
        <div className="footerTabs1st">
        <h1>EYEGLASSES</h1>
          <BsPlusCircle  size="22"/>
        </div>
        <div className="footerTabs1st">
        <h1>CONTACT LENSES</h1>
          <BsPlusCircle size="22"/>
        </div>
      </div>
      <div className="footer_container">
        <div className="customer_links">
          <div className="link div">
            <h1>Services</h1>
            <p>Store Locator</p>
            <p>Enter My Power</p>
            <p>Buying Guide</p>
            <p>Frame Size</p>
          </div>
          <div className="link div">
          <h1>About Us</h1>
            <p>We Are Hiring</p>
            <p>Refer & Earn</p>
            <p>About Us</p>
            <p>Lenskart Coupons</p>
          </div>
          <div className="link div">
            <h1>Help</h1>
            <p> FAQ's</p>
          </div>
        </div>
        <div className="download_info">
          <div className="download_img">
            <img style={{paddingRight:"1rem"}} src="https://static.lenskart.com/media/desktop/img/play-store.svg" alt="play store" />
            <img src="https://static.lenskart.com/media/desktop/img/app-store.svg" alt="apple store" />
          </div>
          <span>Download Lenskart App to buy</span>
          <span>Eyeglasses, Sunglasses and Contact Lenses</span>
        </div>
      </div>
      <div className="border_bottom"></div>
      <div className="extra_info">
        <div className="lenskart_links">
          <span>T & C</span>
          <span>Privacy</span>
          <span>Disclaimer</span>
        </div>
        <div className="follow_links">
          <h2>FOLLOW US AT</h2>
          <FaFacebookF size="20"/>
          <FaInstagram  size="20"/>
          <FaTwitter  size="20"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
