import React from "react";
import "./content.css";
import ControlledCarousel from "./ControlledCarousal";
import {MdOutlineArrowBackIos} from "react-icons/md";
import {MdOutlineArrowForwardIos} from "react-icons/md";


const Content = () => {
  return (
    <>
   <div className="content">
   <div className="categories">
      <div className="specs">
        <img
          src="https://static1.lenskart.com/media/desktop/img/Apr22/a2.png"
          alt="glasses"
        />
        <span>Eyeglasses</span>
      </div>
      <div className="specs">
        <img
          src="https://static1.lenskart.com/media/desktop/img/Apr22/b2.png"
          alt="glasses"
        />
        <span>Sunglasses</span>
      </div>
      <div className="specs">
        <img
          src="https://static1.lenskart.com/media/desktop/img/Apr22/d2.png"
          alt="glasses"
        />
        <span>Computer Glasses</span>
      </div>
      <div className="specs">
        <img
          src="https://static1.lenskart.com/media/desktop/img/Apr22/d.png"
          alt="glasses"
        />
        <span>Contact Lenses</span>
      </div>
      <div className="specs">
        <img
          src="https://static1.lenskart.com/media/desktop/img/Apr22/e2.png"
          alt="glasses"
        />
        <span>Power Sunglasses</span>
      </div>
      <div className="specs">
        <img
          src="https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg"
          alt="glasses"
        />
        <span>Progressive Lenses</span>
      </div>
      
    </div>
    <div className="carousal">
        <ControlledCarousel/>
      </div>
      <div className="banner">
        <img style={{maxWidth:"100%" , height:"30rem"}} src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg" alt="banner" />
      </div>
      <div className="explore">
        <div className="exploreCard">
          <div className="wearTrend">
            <h1>WEAR THE</h1>
            <h1>TREND</h1>
            <p>Our Hottest Collections</p>
          </div>
          <div className="slide">
            <div className="leftArrow"><MdOutlineArrowBackIos/></div>
              <div className="slideContent">
                <img src="https://static1.lenskart.com/media/desktop/img/Sep21/image179.png" alt="specs" />
                <span>Round</span>
                <button>Explore</button>
              </div>
              <div className="slideContent">
                <img src="https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg" alt="specs" />
                <span>Cat-Eye</span>
                <button>Explore</button>
              </div>
              <div className="slideContent">
                <img src="https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg" alt="specs" />
                <span>Clunmaster</span>
                <button>Explore</button>
              </div>
              <div className="slideContent">
                <img src="https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg" alt="specs" />
                <span>Transparent</span>
                <button>Explore</button>
              </div>
              <div className="rightArrow"><MdOutlineArrowForwardIos/></div>
          </div>
        </div>
      </div>
      <div className="offBanner">
        <img src="https://static1.lenskart.com/media/desktop/img/Nov22/19-Nov/party12.jpg" alt="off" />
      </div>
      <div className="kiara">
        <div className="kiaraHeading">
          <div className="rightSide"></div>
          <h4 style={{fontSize:"3rem",letterSpacing:".03rem",fontWeight:"500"}}>As Seen On Kiara</h4>
          <div className="leftSide"></div>
        </div>

        <img style={{maxWidth:"100%",paddingTop:"2rem"}} src="https://static1.lenskart.com/media/desktop/img/Nov22/23-Nov/Hompage-banner4.jpg" alt="kiara" />
      </div>
      <div className="Aquacolor">
        <div className="AquacolorHeading">
          <div className="rightSideAquacolor"></div>
          <h4 style={{fontSize:"3rem",letterSpacing:".03rem",fontWeight:"500"}}>Aquacolor - Glam Up With Color Lenses</h4>
          <div className="leftSideAquacolor"></div>
        </div>

        <img style={{maxWidth:"100%",paddingTop:"2rem"}} src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif" alt="kiara" />
      </div>
      <div className="Aquacolor">
        <div className="AquacolorHeading">
          <div className="rightSideAquacolor"></div>
          <h4 style={{fontSize:"3rem",letterSpacing:".03rem",fontWeight:"500"}}>As Seen At New York Fashion Week</h4>
          <div className="leftSideAquacolor"></div>
        </div>

        <img style={{maxWidth:"100%",paddingTop:"2rem"}} src="https://static1.lenskart.com/media/desktop/img/Oct22/nyfw/web%20banner.gif" alt="kiara" />
      </div>
    <div className="perfectFit">
    <div className="AquacolorHeading">
          <div className="rightSideAquacolor"></div>
          <h4 style={{fontSize:"3rem",letterSpacing:".03rem",fontWeight:"500"}}>FIND THE PERFECT FIT</h4>
          <div className="leftSideAquacolor"></div>
        </div>
        <div className="perfectFitPics">
          <div className="perfectFitPicsleft">
            <img  style={{paddingBottom:"1.5rem",maxWidth:"100%"}} src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/eye-square10.jpg" alt="specs" />
            <img style={{maxWidth:"100%"}} src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg" alt="specs" />
          </div>
          <div className="perfectFitPicsright">
            <img style={{paddingBottom:"1.5rem",maxWidth:"100%"}} src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg" alt="specs" />
            <img style={{paddingBottom:"1.5rem",maxWidth:"100%"}} src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg" alt="specs" />
            <img style={{maxWidth:"100%"}} src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg" alt="specs" />
          </div>
        </div>
    </div>
    <div style={{marginTop:"8rem",height:"50rem"}} className="Aquacolor">
        <div className="AquacolorHeading">
          <div style={{width:"38rem"}} className="rightSideAquacolor"></div>
          <h4 style={{fontSize:"3rem",letterSpacing:".03rem",fontWeight:"500"}}>INTRODUCING OJOS Wear - SUBSCRIBE & SAVE</h4>
          <div style={{width:"38rem"}} className="leftSideAquacolor"></div>
        </div>

        <img style={{maxWidth:"100%",paddingTop:"2rem",width:'123.9rem',marginLeft:"14rem"}} src="https://static1.lenskart.com/media/desktop/img/May22/ojos-web.jpg" alt="kiara" />
      </div>
      <div className="contactLenses">
      <div style={{marginBottom:"3rem"}} className="AquacolorHeading">
          <div style={{width:"38rem"}} className="rightSideAquacolor"></div>
          <h4 style={{fontSize:"3rem",letterSpacing:".03rem",fontWeight:"500"}}>CONTACT LENSES & MORE</h4>
          <div style={{width:"38rem"}} className="leftSideAquacolor"></div>
      </div>
      <div className="picturesDiv">
        <img style={{width:"62.7rem"}} src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more.jpg" alt="lenses" />
        <img style={{width:"62.1rem"}} src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more-1.jpg" alt="lenses" />
      </div>
      </div>
      <div className="brands" style={{marginTop:"8rem"}}>
      <div className="AquacolorHeading">
          <div style={{width:"38rem"}} className="rightSideAquacolor"></div>
          <h4 style={{fontSize:"3rem",letterSpacing:".03rem",fontWeight:"500"}}>OUR BRANDS</h4>
          <div style={{width:"38rem"}} className="leftSideAquacolor"></div>
        </div>
        <img style={{maxWidth:"100%"}} src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg" alt="vicent chase" />
        </div>
      <div className="optionsSpecs">
        <span>EYEGLASSES</span>
        <p>View Range</p>
        </div>
        <div className="optionsDiv">
        <MdOutlineArrowBackIos size="8rem" style={{color:"lightgray"}}/>
        <img style={{maxWidth:"100%",paddingRight:"4rem"}} src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13784-c2-eyeglasses_vincent-chase-vc-e13784-c2-eyeglasses_g_3009.jpg" alt="specs" />
        <img style={{maxWidth:"100%",paddingRight:"4rem"}} src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-air-la-e13032-c1-eyeglasses_g_1999.jpg" alt=" specs" />
        <img style={{maxWidth:"100%"}} src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/Matte-Black-Full-Rim-Rectangle-Lenskart-Air-Flex-LA-E13776-C1-Eyeglasses_lenskart-air-la-e13776-c1-eyeglasses_g_5347_107_02_2022.jpg" alt="specs" />
        </div>
      <div className="optionsSpecs">
        <span>SUNGLASSES</span>
        <p>View Range</p>
        </div>
        <div className="optionsDiv">
        <MdOutlineArrowBackIos size="8rem" style={{color:"lightgray"}}/>
        <img style={{maxWidth:"100%",paddingRight:"4rem"}} src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s14079-c1-c1-sunglasses_vincent-chase-vc-s14079-c1-c1-sunglasses_vincent-chase-vc-s14079-c1-c1-sunglasses_1.jpg" alt="specs" />
        <img style={{maxWidth:"100%",paddingRight:"4rem"}} src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s15036-c1-sunglasses_g_1075_15_09_2022.jpg" alt=" specs" />
        <img style={{maxWidth:"100%"}} src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s13118-c2-sunglasses_sunglasses_g_7218_1.jpg" alt="specs" />
        </div>
      <div className="whatsapp">
        <img style={{maxWidth:"100%"}} src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/whatsapp.png" alt="whatssapp" />
      </div>
      <div className="blog">
      <div className="AquacolorHeading">
          <div style={{width:"54rem"}} className="rightSideAquacolor"></div>
          <h4 style={{fontSize:"3rem",letterSpacing:".03rem",fontWeight:"500"}}>OUR BLOG</h4>
          <div style={{width:"54rem"}} className="leftSideAquacolor"></div>
        </div>
        <div className="blogpic">
          <img style={{maxWidth:"100%"}} src="https://static1.lenskart.com/media/desktop/img/Nov21/20211224_d_newyears2022_spectacular_below_gridR.jpg" alt="blog" />
        </div>
      </div>
      <div className="testimonial">
        <h3>MEET OUR HAPPY CUSTOMERS</h3>
        <div className="ss">
          <iframe style={{width:"41.8rem",height:"28.4rem",marginRight:"4rem"}} src="https://www.youtube.com/embed/HYPqf_eVvvM?autoplay=1" title="lenskart review" >#document</iframe>
          <iframe style={{width:"41.8rem",height:"28.4rem",marginRight:"4rem"}} src="https://www.youtube.com/embed/HYPqf_eVvvM?autoplay=1" title="lenskart review" >#document</iframe>
          <iframe style={{width:"41.8rem",height:"28.4rem"}} src="https://www.youtube.com/embed/HYPqf_eVvvM?autoplay=1" title="lenskart review" >#document</iframe>
        </div>
      </div>
   </div>
   
      
    </>
  );
};

export default Content;
