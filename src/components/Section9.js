import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import ReactDOM from "react-dom";
import block from "@/assets/img/blockstudio_logo.png";
import dottSign from "@/assets/img/dottedSign 1.png";
import kdan from "@/assets/img/kdan_logo.png";
import titan from "@/assets/img/titan_logo.png";
import vector from "@/assets/img/Vector.png";

function Section9({ isLoading }) {
  const root = useRef(null);
  const [dimondArr, setDimondArr] = useState([]);
  const [flag,setFlag] = useState(false);
  useLayoutEffect(() => {
    for (let index = 0; index < 10; index++) {
      const random100 = `${Math.floor(Math.random() * 100)}%`;
      const tmpObj = {
        className: "section9__dimond",
        style: {
          top: random100,
          left: random100,
          transform: `scale(${Math.random()})`,
        },
        key:"section9__dimond"+index
      };
      setDimondArr((prev) => {
        return [...prev, tmpObj];
      });
    }
    setFlag(true);
  }, []);
  useEffect(() => {
    if(!flag){
      return;
    }
    let ctx = gsap.context(() => {
      gsap.utils.toArray(".section9__dimond").forEach((item) => {
        const random10 = `${Math.floor(Math.random() * 10)}`;
        gsap.fromTo(
          item,
          { left: 0 },
          {
            left: "100%",
            repeat: -1,
            duration: random10,
          }
        );
      });
    }, root); // <- Scope!

    return () => {
      console.log("clean");
      ctx.revert();
    };
  }, [flag]);

  return (
    <>
      <div className="section9-wrapper" ref={root}>
        {console.log("dim", dimondArr)}
        {dimondArr.map((item) => {
          return <div {...item}></div>;
        })}
        <div className="section9__grid">
          <div className="section9__header">
            鑽石及<span>贊助商</span>
          </div>
          <div>
            <img src={block} alt="" />
          </div>
          <div>
            <img src={dottSign} alt="" />
          </div>
          <div>
            <img src={kdan} alt="" />
          </div>
        </div>
        <div className="section9__grid">
          <div className="section9__header">共同推廣</div>
          <div>
            <img src={titan} alt="" />
          </div>
          <div></div>
          <div>
            <img src={vector} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Section9;
