import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import styles from "../styles/Home.module.css";
import Modal from "../components/Modal";
import React from "react";
import { Ref } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { DOMElement } from "react";
import Cards from "../components/Cards";
import ReactPlayer from "react-player";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


<meta name="viewport" content="width=device-width, intital-scale=1.0" />;
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

import "../node_modules/video-react/dist/video-react.css";
import Navbar from "../components/Navbar";
<script>
  AOS.init();
</script>
function clickHandler() {
  console.log("Clicked");
}

const animation = { duration: 10000, easing: (t) => t };

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [small, setSmall] = useState(false);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const [showModal, setShowModal] = useState(false);
  const[showInfo, setInfo] = useState(false);
  var currentState = "notDisplaying";
  const [refCallback, slider, sliderNode] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    {
      //add plugins hereF
    }
  );
  return (
    <body>
    <div className={styles.homePage}>
      <div className={styles.mainHomePage} id="mainHomePage">
        <Navbar></Navbar>
        {/* <div className={styles.homePageheader}>
          <div className={styles.banner}>
            <img className={styles.twitterBanner}
            src="/twitter_banner.png"
            ></img>
          </div>
          <a className={styles.navGrid} onClick={() => setShowModal(true)}>
            <img className={styles.navIcon} src="/navIcon.png"></img>
          </a>
            <img className={styles.headerLogo} src="/finallogoWithSE.png"></img>
        
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <h1 className={styles.modalItem1}>About us</h1>
            <h1 className={styles.modalItem2}>FAQ</h1>
            <h1 className={styles.modalItem3}>Buy</h1>
            <h1 className={styles.modalItem4}>Road Map</h1>
            <div className={styles.modalIcons}>
              <div className={styles.modalIcon1}>
                <a href="https://discord.gg/uCkHGmGaC7" target={"_blank"}>
                  <svg
                    className={styles.icon1}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </div>
              <div className={styles.modalIcon2}>
                <a href="" target={"_blank"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </div>
              <div className={styles.modalIcon3}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  class="bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
              </div>
            </div>
          </Modal>
        </div> */}
        <div>
          <h1 className={styles.headerText}>Stats</h1>
        </div>
        <div className={styles.insideOfClubHouse}>
          <img className={styles.inside}
          src="2-rustic_bar.png"
          ></img>
        </div>
        <div className={styles.aboutUs}>
          <div className={styles.aboutText}>
          <h1>About Us</h1>
            <p>
            There are millions of snakes in the world, but only 5,500 are 
            slithering onto the Solana block chain.  Each boasting an array of different 
            styles, eccentricity, colors, and attitudes. <br></br>
            <br></br>  Born from a clutch of hundreds of hand drawn assets.  
            Prepared to strike and seize their place in the crypto-verse.  Wrangling the art, our dedicated in 
            house artist insures the highest quality snakes and variety. 
            <br></br>
            <br></br> Watch your step and be ready to add a
             snake to your collection
            </p>
          </div>
          <div className={styles.abSnake}>
          <div className={styles.carousel}>
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
              <img className={styles.snake1} src="/snake1.jpg"></img>
            </div>
            <div className="keen-slider__slide">
              <img className={styles.snake2} src="/snake2.png"></img>
            </div>
            <div className="keen-slider__slide">
              <img className={styles.snake3} src="/snake3.png"></img>
            </div>
            <div className="keen-slider__slide">
              <img className={styles.snake3} src="/snake4.png"></img>
            </div>
          </div>
        </div>
        </div>
        </div>
        <h1 className={styles.headerText} data-aos="fade-in">Meet the team</h1>
        <div  className={styles.meetTheTeamContainer}>
          <div className={styles.cards}>
            <div data-aos="fade-in" className={styles.card}>
              <Cards imageSource={"/snake1.jpg"} name="Card 1"></Cards>
            </div>
          </div>
          <div className={styles.cards}>
            <div data-aos="fade-in" className={styles.card}>
              <Cards imageSource={"/snake1.jpg"} name="Card 2"></Cards>
            </div>
          </div>
          <div className={styles.cards}>
            <div data-aos="fade-in"  className={styles.card}>
              <Cards imageSource={"/snake1.jpg"} name="Card 3"></Cards>
            </div>
          </div>
        </div>
        <div className={styles.roadMapContainer}>
          <h1 className={styles.headerText}>roadmap</h1>
          <img className={styles.roadmap} src="/roadmap.jpg"></img>
        </div>
        <div className={styles.FAQ}>
          <h1 className={styles.headerText}>FAQ</h1>
          <div className={styles.accordionContainer}>
            <h1 onClick={ () => {
              var info = document.getElementById("info1");
              if(currentState == "notDisplaying"){
                
                info.style.display = "block";
                currentState = "displaying"
              }
              else{
                info.style.display = "none";
                currentState = "notDisplaying"
            }
          }
            }>How can I mint</h1>
            <p id="info1" className={styles.accordionInfo1}>You can mint by...</p>
            </div>
        </div>
      </div>

      <div className={styles.enterPortalOverlay} id={"modal"}>
        <div className={styles.container}>
          <Head>
            <title>Snake Eyes Home</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
          </Head>
          <div className={styles.enterModal}>
            <img
              className={styles.clubImage}
              id={"test"}
              alt="Background"
              src="/homepage.png"
              quality={100}
            />
            <div className={styles.imageGrid}>
              <div className={styles.icon1}>
                <a href="https://discord.gg/uCkHGmGaC7" target={"_blank"}>
                  <svg
                    className={styles.icon1}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </div>
              <div className={styles.icon2}>
                <a href="" target={"_blank"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"       
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </div>
              <div className={styles.icon3}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
              </div>
            </div>
            <div className={styles.logoGrid}>
              <img className={styles.logo} src="/finalLogoWithSE.png" />
            </div>
            <a className={styles.gridBtn}>
              <button
                onClick={() => {
                  console.log("button clicked");
                  var modal = document.getElementById("modal");
                  modal.style.display = "none";
                  document.getElementById("mainHomePage").style.filter = "none";
                }}
                className={styles.btn}
              >
                Enter
              </button>
            </a>
            <div className={styles.enterText}>
              <h1 className={styles.welcomeHeader}>WELCOME TO SNAKE EYES</h1>
              <p className={styles.welcomeDescription}>
                Click the sign to enter our club
              </p>
            </div>
            <div className={styles.animatedModal}>
              <ReactPlayer
                url="/slowedDownOutsideClub.mp4"
                muted={true}
                playing={isPlaying}
                loop={true}
                height={"100%"}
                width={"100%"}
              />
            </div>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>

    </body>
  );
}
