import tank from "@/assets/img/loading_tank.png";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function Loading() {
  const root = useRef(null);
  useLayoutEffect(() => {
    console.log("enter");
    let ctx = gsap.context(() => {
      gsap.to(".loading_center-word", {
        text: "Loading...",
        duration: 3,
        repeat: -1,
      });
    }, root); // <- Scope!
    gsap.to("body", {
      overflowY: "hidden",
    });
    return () => {
      console.log("clean");
      ctx.revert();
    };
  }, []);
  return (
    <>
      <div className="loading_wrapper" ref={root}>
        <div className="loading_center">
          <div className="loading_center-word"></div>
          <img src={tank} alt="tank" />;
        </div>
      </div>
    </>
  );
}
export default Loading;
