import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterComp = () => {
  return (
    <>
      <div>
        <div className="footer">
          <div className="footer_comp">
            <h1>About Us</h1>
            <p className="footer_link_container">
              <a href="#" className="footer_link">
                Careers
              </a>
            </p>
          </div>
          <div className="footer_comp">
            <h1>Service</h1>
            <p className="footer_link_container">
              {" "}
              <a href="#" className="footer_link">
                Subscription Plan
              </a>
            </p>
          </div>
          <div className="footer_comp">
            <h1>Support</h1>
            <p className="footer_link_container">
              {" "}
              <a href="#" className="footer_link">
                Give us Feedback
              </a>
            </p>
          </div>
          <div className="footer_comp">
            <h1>Learn</h1>
            <p className="footer_link_container">
              <a href="#" className="footer_link">
                Learn more about IDOs
              </a>
            </p>
          </div>
          <div className="footer_comp">
            <h1>Sponsors</h1>
            <p className="footer_link_container">
              <a href="#" className="footer_link">
                Shardeum
              </a>
            </p>
            <p className="footer_link_container">
              <a href="#" className="footer_link">
                Devfolio
              </a>
            </p>
            <p className="footer_link_container">
              <a href="#" className="footer_link">
                Filecoin
              </a>
            </p>
            <p className="footer_link_container">
              <a href="#" className="footer_link">
                Polygon
              </a>
            </p>
            <p className="footer_link_container">
              <a href="#" className="footer_link">
                Replit
              </a>
            </p>
          </div>
          <div className="footer_comp_grid">
            <h1>Socials</h1>
            <div>
              <FacebookIcon className="social_link" />
              <InstagramIcon className="social_link" />
              <YouTubeIcon className="social_link" />
              <TwitterIcon className="social_link" />
            </div>
          </div>
        </div>
      </div>
      <div className="lasFooter">
        <a
          herf="https://github.com/rohitroy-github/ureckathon-cryptic"
          target="_blank"
          className="footer_link"
        >
          Cryptic Launchpad | Team Cryptic | Project | 2023{" "}
        </a>
      </div>
    </>
  );
};

export default FooterComp;
