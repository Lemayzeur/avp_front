import React from 'react';
import { Button } from 'react-bootstrap';

import man_pub_img from './assets/man-pub.jpg';
import app_screenshots from './assets/app_screenshots.png';
import logo_web from './assets/logo_web.png';
import logo_mobile from './assets/logo_mobile.png';
import ad_img from './assets/ad.png';

import facebook from './assets/icons/facebook.png';
import instagram from './assets/icons/instagram.png';
import twitter from './assets/icons/twitter.png';
import youtube from './assets/icons/youtube.png';
import haiti from './assets/icons/haiti.png';


function App() {
  const mainPubStyles = {
    width: '85%',
    border: 'solid 13px #fff',
    borderRadius: 10,
    webkitBoxShadow: "3px 1px 15px 0px rgba(0,0,0,0.12)", 
    boxShadow: "3px 1px 15px 0px rgba(0,0,0,0.12)"
  }

  const btnStyles = {
    border:'none',
    background: "linear-gradient(62.36deg, #5552FE 5.35%, #16EDFC 111.11%)",
    borderRadius: '10px',
  }

  return (
      <div className="" id='main'>
        <section className="header">
          <div className='container c1'>
            <div className="row mb-5 align-items-between justify-content-center">
              <div className="col-12 text-center text-md-start">
                <img src={logo_web} className="d-none d-md-inline" height='110' alt="Avantaj Pam Logo"/>
                <img src={logo_mobile} className="d-inline d-md-none" height='110' alt="Avantaj Pam Logo"/>
              </div>
            </div>
          </div>
          <div className='container c2'>
            <div className="row align-items-between justify-content-center ">
              <div className="col-12 col-md-6 text-center text-md-start">
                <img src={man_pub_img} style={mainPubStyles} alt="man_pub_img"/>
              </div>
              <div className="col-12 col-md-6 text-center">
                <div className='mb-md-3 mb-5'><img className='app_screenshots mt-md-0 mt-5' src={app_screenshots} alt="app_screenshots"/></div>
                <Button 
                  size='lg'
                  style={btnStyles}
                  className='shadow'
                ><span className='android-icon'><i className='fab fa-android fa-fw'></i></span> Telechaje aplikasyon an</Button>
              </div>
            </div>
          </div>
        </section>
     

        
      
        <div className="mt-5" id='footer'>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 col-12 px-4 mb-md-0 mb-4 border-end">
              <h4>Kontakte nou</h4>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div><span><i className='fa fa-phone fa-fw'></i> <i className='fab fa-whatsapp'></i> +509 3324 0000</span></div>
                  <div><span><i className='fa fa-envelope fa-fw'></i> info@avantajpam.com</span></div>
                </div>
                <div className="col-12 col-lg-6">
                  <div><span>+509 3324 0000</span></div>
                  <div><span><i className='fa fa-map-marker-alt'></i> #12b Adress, Rue, PV</span></div>
                </div>
              </div>
              <i></i>
            </div>
            <div className="col-md-4 col-12 px-4 mb-md-0 mb-4 border-end">
              
              <div className="row align-items-center justify-content-center">
                <div className="col-4 d-none d-md-inline">
                  <img src={haiti} className="" height='45' alt="Haiti Flag"/>
                </div>
                <div className="col-md-8 col-12">
                  <h4>Suiv nou sou rezo yo</h4>
                  <div className='icons-list d-flex'>
                    <a href="/" className='icon icon-instagram'><img src={instagram} alt='Avantaj Pam Instagram' /></a>
                    <a href="/" className='icon icon-facebook'><img src={facebook} alt='Avantaj Pam Facebook' /></a>
                    <a href="/" className='icon icon-twitter'><img src={twitter} alt='Avantaj Pam Twitter' /></a>
                    <a href="/" className='icon icon-youtube'><img src={youtube} alt='Avantaj Pam Youtube' /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12  px-4 mb-md-0 mb-4 text-center text-md-start">
              <hr className='d-block d-md-none' />
              <div>
                <img src={haiti} className="me-4 d-inline d-md-none" height='45' alt="Haiti Flag"/>
                <img src={ad_img} id='dplus' alt="ad_img" />
              </div>
              <div className="mt-3 mt-md-0">© 2022 Avantaj Pam Tout dwa rezève</div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
