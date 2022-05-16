import React, { useState, useRef, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import useOnClickOutside from "./hooks/useOnClickOutside";

import man_pub_img from "./assets/man-pub.jpg";
// import app_screenshots from "./assets/app_screenshots.png";
import logo_web from "./assets/logo_web.png";
import logo_mobile from "./assets/logo_mobile.png";
import ad_img from "./assets/ad.png";

import facebook from "./assets/icons/facebook.png";
import instagram from "./assets/icons/instagram.png";
import twitter from "./assets/icons/twitter.png";
import youtube from "./assets/icons/youtube.png";
import haiti from "./assets/icons/haiti.png";

function App() {
  const [show, setShow] = useState(false);
  const vidRef = useRef(null);
  const playlistRef = useRef(null);
  const modalRef = useRef(null);
  const targetWindowRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [phoneToCall, setPhoneToCall] = useState("");

  const playVideo = (e: any) => {
    let src = e.target.getAttribute("src");
    vidRef.current.querySelector("source").setAttribute("src", src);
    vidRef.current.load();
    vidRef.current.play();
  };

  useOnClickOutside(targetWindowRef, () => setVisible(false));

  const handleShow = () => {
    setShow(true);
  };

  const onShowModal = () => {
    if (vidRef != null) {
      vidRef?.current.play();
    }

    document.querySelectorAll(".playlist-video").forEach((el) => {
      el.addEventListener("click", playVideo);
    });
  };

  const handleClose = () => {
    document.querySelectorAll(".playlist-video").forEach((el) => {
      el.removeEventListener("click", playVideo);
    });
    setShow(false);
  };

  const openTargetWindow = (e, num) => {
    setPhoneToCall(num);
    e.preventDefault();
    setVisible(true);
  };

  useEffect(() => {}, []);

  const getV = () => {
    return (
      <video
        style={{ width: "100%" }}
        className="playlist-video"
        src="https://c9hstatic.s3.us-east-2.amazonaws.com/avantaj/ad.mp4"
        poster="https://www.hyundainews.com/assets/images/original/27451-FirstDatehighlightsHyundaisBlueLinkCarFinderfeatur.jpg"
      >
        Your browser does not support HTML5 video.
      </video>
    );
  };

  const app_screenshots =
    "https://c9hstatic.s3.us-east-2.amazonaws.com/avantaj/app_screenshot.png";
  const faIconPhone =
    "https://c9hstatic.s3.us-east-2.amazonaws.com/avantaj/phone.png";
  const faIconEmail =
    "https://c9hstatic.s3.us-east-2.amazonaws.com/avantaj/email.png";
  const faIconMapMarker =
    "https://c9hstatic.s3.us-east-2.amazonaws.com/avantaj/map-marker.png";
  const faIconWhatsapp =
    "https://c9hstatic.s3.us-east-2.amazonaws.com/avantaj/whatsapp.png";
  return (
    <div className="main" id="main">
      <div className="app-container">
        <div id="logo-container">
          <img
            src={logo_web}
            className="d-none d-md-inline"
            height="110"
            alt="Avantaj Pam Logo"
          />
          <img
            src={logo_mobile}
            className="d-inline d-md-none img-fluid"
            height="110"
            alt="Avantaj Pam Logo"
          />
        </div>

        <div className="" id="core-body">
          <section className="container">
            <div className="row align-items-center justify-content-center">
              <aside
                onClick={() => setShow(true)}
                className="vid-wrapper col-12 col-lg-6 text-center text-md-center mb-md-4 mb-5"
              >
                <video
                  controls
                  poster="https://www.hyundainews.com/assets/images/original/27451-FirstDatehighlightsHyundaisBlueLinkCarFinderfeatur.jpg"
                  className=""
                >
                  Your browser does not support HTML5 video.
                </video>
                <div className="playBtn">
                  <i className="fa fa-play"></i>
                </div>
                <div className="overlay"></div>
              </aside>
              <aside className="screenshot-wrapper col-12 col-lg-6 text-center">
                <div className="mb-md-4 mb-5 p-0">
                  <img
                    className="app_screenshots mt-md-0 mt-1 img-fluid"
                    src={app_screenshots}
                    alt="app_screenshots"
                  />
                </div>
                <Button
                  className="btn-md-lg btn-sm shadow py-2 px-3 px-md-3 py-md-2"
                  id="download-btn"
                >
                  <span className="android-icon fab fa-android fa-fw"></span>{" "}
                  <strong className="ms-2">Telechaje aplikasyon an</strong>
                </Button>

                {/* <div id="test" style={{ height: "20px", width: "20px" }}></div>
                <div className="d-none d-xl-block">XL</div>
                <div className="d-none d-lg-block d-xl-none">LG</div>
                <div className="d-none d-md-block d-lg-none">MD</div>
                <div className="d-none d-sm-block d-md-none">SM</div>
  <div className="d-block d-sm-none">XS</div> */}
              </aside>
            </div>
          </section>
        </div>

        <footer>
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-2 col-md-3">
                <h4>Kontakte nou</h4>
                <div>
                  <a
                    className="info"
                    href="whatsapp://send?phone=50939031010"
                    onClick={(e) => openTargetWindow(e, "50939031010")}
                  >
                    <img
                      className="fa-icon me-2"
                      src={faIconPhone}
                      alt="icon"
                    />
                    <img className="fa-icon" src={faIconWhatsapp} alt="icon" />{" "}
                    +509 3903 1010
                  </a>
                </div>
                <div>
                  <a
                    className="info"
                    href="whatsapp://send?phone=50939041010"
                    onClick={(e) => openTargetWindow(e, "50939041010")}
                  >
                    <img
                      className="fa-icon me-2"
                      src={faIconPhone}
                      alt="icon"
                    />
                    <img className="fa-icon" src={faIconWhatsapp} alt="icon" />{" "}
                    +509 3904 1010
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="">
                  <a className="info" href="mailto:info@avantajpam.com">
                    <img className="fa-icon" src={faIconEmail} alt="icon" />{" "}
                    info@avantajpam.com
                  </a>
                </div>
                <div className="">
                  <a
                    className="info"
                    href="https://www.google.com/maps/place/Avantaj+Pam/@18.5147393,-72.288977,15z/data=!4m5!3m4!1s0x0:0x9eb8a66da825d16d!8m2!3d18.5146522!4d-72.2889784"
                  >
                    <img className="fa-icon" src={faIconMapMarker} alt="icon" />{" "}
                    #12b Adress, Rue, PV
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 align-self-lg-end align-self-start text-start mt-lg-0 mt-4 text-lg-center icons-list">
                <h4>Suiv nou sou rezo yo</h4>
                <img
                  src={haiti}
                  className="me-4 d-none d-lg-inline"
                  height="35"
                  alt="Haiti Flag"
                />
                <a
                  href="https://www.instagram.com/avantajpam/"
                  target="_blank"
                  className="icon icon-instagram"
                >
                  <img src={instagram} alt="Avantaj Pam Instagram" />
                </a>
                <a
                  href="https://www.facebook.com/AvantajPam/"
                  target="_blank"
                  className="icon icon-facebook"
                >
                  <img src={facebook} alt="Avantaj Pam Facebook" />
                </a>
                <a
                  href="https://twitter.com/AvantajPam/"
                  target="_blank"
                  className="icon icon-twitter"
                >
                  <img src={twitter} alt="Avantaj Pam Twitter" />
                </a>
                <a
                  href="https://www.youtube.com/c/AvantajPam"
                  target="_blank"
                  className="icon icon-youtube"
                >
                  <img src={youtube} alt="Avantaj Pam Youtube" />
                </a>
              </div>

              <div className="col text-center text-lg-end">
                <hr className="d-block d-lg-none" />
                <div>
                  <img
                    src={haiti}
                    className="me-5 d-inline d-lg-none"
                    height="45"
                    alt="Haiti Flag"
                  />
                  <img src={ad_img} id="dplus" alt="ad_img" />
                </div>
                <div className="mt-3 mt-md-0 me-2 copyright">
                  © 2022 Avantaj Pam Tout dwa rezève
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <Modal
        show={show}
        size="xl"
        onHide={handleClose}
        onShow={onShowModal}
        variant="dark"
        ref={modalRef}
        className="vid-modal"
      >
        <Modal.Body style={{ backgroundColor: "black" }}>
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-9">
              <video
                style={{ width: "100%" }}
                ref={vidRef}
                controls
                poster="https://www.hyundainews.com/assets/images/original/27451-FirstDatehighlightsHyundaisBlueLinkCarFinderfeatur.jpg"
              >
                <source
                  src="https://c9hstatic.s3.us-east-2.amazonaws.com/avantaj/ad.mp4"
                  type="video/mp4"
                ></source>
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div className="col-12 col-lg-3">
              <div ref={playlistRef} id="playlist">
                {getV()}
                {getV()}
                {getV()}
                {getV()}
                {getV()}
                {getV()}
                {getV()}
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>

      {visible === true ? (
        <div id="targetWindow" ref={targetWindowRef}>
          <div className="body text-center">
            <h5 className="mb-2">+{phoneToCall}</h5>
            <div className="row align-items-center text-center">
              <div className="col">
                <a
                  href={`whatsapp://send?phone=${phoneToCall}`}
                  className="btn btn-sm btn-success p-2"
                >
                  <img
                    className="fa-icon ms-2"
                    src={faIconWhatsapp}
                    alt="icon"
                  />
                </a>
              </div>
              <div className="col">
                <a
                  href={`tel://${phoneToCall}`}
                  className="btn btn-sm btn-primary p-2"
                >
                  <img className="fa-icon ms-2" src={faIconPhone} alt="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
