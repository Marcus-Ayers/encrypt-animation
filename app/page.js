"use client";
import Marquee from "react-fast-marquee";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const divStyle1 = {
    width: "350px",
    height: "250px",
    // backgroundColor: "blue",
    // margin: "10px",
    // marginTop: "5px",
    marginBottom: "10px",
    borderRadius: "15px",
    marginLeft: "500px",
  };

  const divStyle2 = {
    ...divStyle1,
    // backgroundColor: "red", // change this to the color you want
  };

  const marqueeStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
  };

  const GlowLine = () => (
    <div className="glow-line-parent">
      <div className="glow-line-child"></div>
    </div>
  );

  function generateArray() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-?!";
    const array = [];

    for (let i = 0; i < 392; i++) {
      const randomChar = characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      array.push(randomChar);
    }

    return array;
  }

  const bigArray = generateArray();
  console.log(bigArray);

  return (
    <div className="">
      <div className="m-auto h-[100vh] w-[95vw] bg-zinc-400 rounded-b-[50px] position-relative ">
        <div className="pt-48 position-relative">
          <div
            style={{
              ...marqueeStyle,
              clipPath: "polygon(0 0, 47.5% 0, 47.5% 100%, 0 100%)",
            }}
          >
            <Marquee direction="right" speed={100}>
              <div className="bg-blue-800" style={divStyle1}></div>
              <div className="bg-blue-800" style={divStyle1}></div>
              <div className="bg-blue-800" style={divStyle1}></div>
              <div className="bg-blue-800" style={divStyle1}></div>
              <div className="bg-blue-800" style={divStyle1}></div>
            </Marquee>
          </div>
          <div
            style={{
              ...marqueeStyle,
              clipPath: "polygon(47.5% 0, 95% 0, 95% 100%, 47.5% 100%)",
            }}
          >
            <Marquee direction="right" speed={100}>
              <div className="wrapText pl-2 text-[10px]" style={divStyle2}>
                <p className="tracking-normal leading-[18.4px] -mt-[3px] font-mono">
                  {bigArray.join(" ")}
                </p>
              </div>
              <div className="wrapText pl-2 text-[10px]" style={divStyle2}>
                <p className="tracking-normal leading-[18.4px] -mt-[3px] font-mono">
                  {bigArray.join(" ")}
                </p>
              </div>
              <div className="wrapText pl-2 text-[10px]" style={divStyle2}>
                <p className="tracking-normal leading-[18.4px] -mt-[3px] font-mono">
                  {bigArray.join(" ")}
                </p>
              </div>
              <div className="wrapText pl-2 text-[10px]" style={divStyle2}>
                <p className="tracking-normal leading-[18.4px] -mt-[3px] font-mono">
                  {bigArray.join(" ")}
                </p>
              </div>
              <div className="wrapText pl-2 text-[10px]" style={divStyle2}>
                <p className="tracking-normal leading-[18.4px] -mt-[3px] font-mono">
                  {bigArray.join(" ")}
                </p>
              </div>
            </Marquee>
          </div>
          <GlowLine />
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
