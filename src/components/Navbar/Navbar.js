import React from 'react';
import "./Navbar.css";


const Navbar = () => {
  return (
    <div className='navbarDiv'>
        <div className="navbar_top">
            <div className="navbar_links">
                <ul>
                    <li className='navbar_linksLI'><span> Do More,Be More</span></li>
                    <li className='navbar_linksLI'><span>Try in 3D</span> </li>
                    <li className='navbar_linksLI'><span> Store Locator</span></li>
                    <li className='navbar_linksLI'><span> Quality</span></li>
                    <li className='navbar_linksLI'><span>USA</span> </li>
                    <li className='navbar_linksLI'><span> Singapore</span></li>
                    <li className='navbar_linksLI'><span> UAE</span></li>
                    <li className='navbar_linksLI'><span>John Jacobs</span> </li>
                    <li className='navbar_linksLI'><span>Aqualens</span> </li>
                    <li className='navbar_linksLI'><span>Cobrowsing</span> </li>
                    <li className='navbar_linksLI' ><span>Engineering Blog</span> </li>
                </ul>
            </div>
        </div>
        <div className="navbar_bottom">
          <div className="navbar_bottom_top">
            <div className="lenskart_logo">
            <div className="logo">
            <img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="lenskart" />
            </div>
             <img src="https://static.lenskart.com/media/mobile/images/phone_number.svg" alt="no" />
            </div>
            <div className="search">
              <input type="text" placeholder='What are you looking for' />
            </div>
            <div className="navbar_bottom_top_details">
              <span>Track Order</span>
              <span>Sign In &Sign Up</span>
              <span><img style={{marginRight:"1rem",height:"1.5rem",width:"1.5rem"}} src="https://static.lenskart.com/media/desktop/img/wishlist.png" alt="heart" /> Wishlist</span>
              <span><img style={{marginRight:"1rem",height:"1.5rem",width:"1.5rem"}} src="https://static.lenskart.com/media/desktop/img/cart.png" alt="cart" /> Cart</span>
            </div>
          </div>
          <div className="navbar_bottom_bot">
            <div className="navbar_bottom_bot_left">
              <span>EYEGLASSES</span>
              <span>COMPUTER GLASSES</span>
              <span>KIDS GLASSES</span>
              <span>CONTACT LENSES</span>
              <span>SUNGLASSSES</span>
              <span>HOME EYE-TEST</span>
              <span>STORE LOCATOR</span>
            </div>
            <div className="navbar_bottom_bot_right">
              <div className="navbar_bottom_img">
                <img src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png" alt="3d" />
                <img src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png" alt="blu" />
                <img src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg" alt="gold" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar;