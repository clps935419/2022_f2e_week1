import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { clsx } from "clsx";

gsap.registerPlugin(ScrollTrigger);

//LOGO動畫登入頁
function Section1(props) {
  const {isLoading} = props;
  const [loginBtnState, setLoginBtnState] = useState("login");
  const root = useRef(null);
  useEffect(() => {
    if(isLoading){
      return
    }
    gsap.to(".section1_login-box", {
      top: "24px",
      duration: 3,
    });
    gsap.to("body", {
      overflowY: "auto",
      duration: 3,
    });

    return () => {
      console.log("clean");
    };
  }, [isLoading]);

  useEffect(() => {
    const keyDownCallback = function (e) {
      e.preventDefault();
      switch (e.keyCode) {
        case 38:
          setLoginBtnState("login");
          break;
        case 40:
          setLoginBtnState("signUp");
          break;
      }
    };

    document.addEventListener("keydown", keyDownCallback);

    return () => document.removeEventListener("keydown", keyDownCallback);
  }, []);

  return (
    <>
      <div className="section1_wrapper" ref={root}>
        <div className="section1_login-box">
          <div className="section1_header">
            <div>I- 00</div>
            <div>HI- 99999</div>
            <div>Hex School</div>
          </div>
          <div className="section1_login-box-logo"></div>
          <div className="section1_login-box_opt">
            <a
              className={clsx("section1_login-box_opt-login", {
                active: loginBtnState === "login",
              })}
              onClick={() => setLoginBtnState("login")}
            >
              1 Login
            </a>
            <a
              className={clsx("section1_login-box_opt-sign-up", {
                active: loginBtnState === "signUp",
              })}
              onClick={() => setLoginBtnState("signUp")}
            >
              2 Sign up
            </a>
          </div>
          <div className="section1_login-box_footer">
            Interactive And Responsive Web Design.
          </div>
        </div>
      </div>
    </>
  );
}
export default Section1;
