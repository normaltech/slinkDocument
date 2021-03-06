import "./body.css";
import Topbar from "../topbar/Topbar";
//import Title from "../title/Title";
//import Press from "../press/Press";
import LinkTab from "../linktab/LinkTab";
import Approach from "../approach/Approach";
import Slider from "../slider/Slider";
import Ecosystem from "../ecosystem/Ecosystem";
import Press_first from "../press_first/Press_first";
import Ourteam from "../ourteam/Ourteam";
import Partner from "../partners/partners";
import Tokenomics from "../tokenomics_challenge/Tokenomics";
import Mailer from "../mailer/Mailer";


export default function Body() {
  let ended = false;
  console.log(ended);
  const endHandler = (e) => {
    const video_z = document.getElementsByClassName('titleVideo');
    video_z[0].style.zIndex = -1;
    const topbar = document.getElementsByClassName('topbarContainer');
    topbar[0].style.visibility = "visible";
    const carousel = document.getElementsByClassName('carousel');
    carousel[0].style.visibility = "visible";
  }
  return (
    <>
      <div className="bodyTotalContainer">
        <div id="topbarid" className="bodyTopContainer">
          <Topbar />
          <video className="titleVideo" onEnded={endHandler} preload="auto" auto="true" playsInline={true} autoPlay={true} muted={true} id="myVideo">
            <source src="/assets/Website Graphics/Video/LandingPageVideo.mp4" type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
          <Slider/>
        </div>
        <div id="approachid" className="bodyMidContainer">
          <Approach />
          <Press_first />
          <Ourteam/>
          <Tokenomics/>
          <Ecosystem/>
          <LinkTab />
          <Partner/>
          <Mailer/>
          <a href="#">
           <img className="topUpButton" src="/assets/uparrow.png" alt="" />
          </a>
        </div>
      </div>
    </>
  )
}