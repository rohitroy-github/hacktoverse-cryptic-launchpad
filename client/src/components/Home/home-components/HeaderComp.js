import React, {useState} from "react";
import logo from "../../../assets/canva-logo.png";
import "../LandingPage.css";
import MenuIcon from "@mui/icons-material/Menu";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const HeaderComp = (props) => {
  const [open, setopen] = useState(false);

  // togglerForMobileHamburgerOpen/Close?
  const setToggler = () => {
    setopen((prevState) => !prevState);
    console.log(open);
  };

  // gotoAboutUsSection;
  function goToContactUsSection() {
    props.scrollTo.current.scrollIntoView({behavior: "smooth"});
  }

  function goToAboutUsSection() {
    props.scrollTo.current.scrollIntoView({behavior: "smooth"});
  }

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  // const [modalOpen, setModalOpen] = useState(false);

  const setLogin = () => {
    console.log("Login fired !");
    setLoginModalOpen(true);
  };

  const setRegister = () => {
    console.log("Register fired !");
    setRegisterModalOpen(true);
  };

  return (
    <>
      <div className="header" ref={props.scrollTo}>
        <a href="https://cryptic-launchpad-client.netlify.app/">
          <img src={logo} alt="logo" className="logoImg" />
        </a>

        {/* {loginModalOpen && (
          <LoginModal
            mod={{
              modalOpen,
              setModalOpen,
              loginModal,
              registerModal,
            }}
          />
        )} */}

        {registerModalOpen && (
          <RegisterModal
            mod={{
              registerModalOpen,
              setRegisterModalOpen,
            }}
          />
        )}

        {loginModalOpen && (
          <LoginModal
            mod={{
              loginModalOpen,
              setLoginModalOpen,
            }}
          />
        )}

        {/* gourab */}
        <div className="right_header">
          {/* <div>
            <button
              className="navbarBtn"
              onClick={() => props.onFormSwitch("login")}
            >
              Login
            </button>
          </div> */}

          {/* rohit */}
          <div>
            <button className="navbarBtn" onClick={setLogin}>
              Login
            </button>
          </div>

          {/* gourab */}
          {/* <div>
            {" "}
            <button
              className="navbarBtn"
              onClick={() => props.onFormSwitch("register")}
            >
              Register
            </button>
          </div> */}

          {/* rohit */}
          <div>
            {" "}
            <button className="navbarBtn" onClick={setRegister}>
              Register
            </button>
          </div>
        </div>
      </div>

      {/* ************************************** */}
      {/* mobile nav starts */}
      {/* ************************************** */}

      <div className="mobBar">
        <a href="http://localhost:3000/">
          <img src={logo} alt="logo" className="logoImg" />
        </a>{" "}
        <MenuIcon onClick={setToggler} />
        <div className={`righBar${open && "open"}`}>
          <div>
            <button className="mobNavbarBtn" onClick={setLogin}>
              Login
            </button>
          </div>

          <div>
            {" "}
            <button className="mobNavbarBtn" onClick={setRegister}>
              Register
            </button>
          </div>

          {/* <div>
            {" "}
            <a href="#">
              <button className="mobNavbarBtn">About</button>
            </a>
          </div> */}

          {/* <div>
            {" "}
            <a href="#">
              <button className="mobNavbarBtn">Contact</button>
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HeaderComp;
