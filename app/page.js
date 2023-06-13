"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isTouching, setIsTouching] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [touchingDivId, setTouchingDivId] = useState(null);

  const [arrays, setArrays] = useState({
    array1: { array: [], indexes: [] },
    array2: { array: [], indexes: [] },
    array3: { array: [], indexes: [] },
    array4: { array: [], indexes: [] },
    array5: { array: [], indexes: [] },
    array6: { array: [], indexes: [] },
    array7: { array: [], indexes: [] },
    array8: { array: [], indexes: [] },
    array9: { array: [], indexes: [] },
    array10: { array: [], indexes: [] },
  });

  // This useEffect initializes all arrays and indexes when the component is mounted.
  useEffect(() => {
    const newArrays = { ...arrays };
    Object.keys(newArrays).forEach((key) => {
      newArrays[key].array = generateArray();
      // newArrays[key].indexes = generateIndexes();
    });
    setArrays(newArrays);
  }, []);

  // This useEffect monitors the position of the scrolling elements.
  // It sets the "isTouching" state and "touchingDivId" state according to which div is in the middle of the viewport.
  useEffect(() => {
    if (isMounted) {
      let animationFrameId = null;

      const checkPosition = () => {
        const halfWindowWidth = window.innerWidth / 2;
        const targets = document.querySelectorAll(
          ".bg-blue-800, .bg-red-800, .bg-green-800, .bg-orange-800, .bg-purple-800"
        );

        let touching = false;
        let touchingDivId = null;

        Array.from(targets).forEach((target) => {
          const rect = target.getBoundingClientRect();
          if (rect.left < halfWindowWidth && rect.right > halfWindowWidth) {
            touching = true;
            touchingDivId = target.id;
          }
        });

        setIsTouching(touching);
        setTouchingDivId(touchingDivId);
        animationFrameId = window.requestAnimationFrame(checkPosition);
      };

      animationFrameId = window.requestAnimationFrame(checkPosition);

      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isMounted]);

  // This useEffect is responsible for updating the array of the currently touching div every 250ms.
  useEffect(() => {
    if (isTouching) {
      const intervalId = setInterval(() => {
        const stateKey = `array${touchingDivId.replace("div", "")}`;
        setArrays((prevState) => ({
          ...prevState,
          [stateKey]: {
            ...prevState[stateKey],
            array: generateArray(),
          },
        }));
      }, 250);

      return () => clearInterval(intervalId);
    }
  }, [isTouching, touchingDivId]);

  // This useEffect sets the isMounted state to true when the component is mounted.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [numArrays, setNumArrays] = useState({
    array1: { array: [], indexes: [] },
    array2: { array: [], indexes: [] },
    array3: { array: [], indexes: [] },
    array4: { array: [], indexes: [] },
    array5: { array: [], indexes: [] },
    array6: { array: [], indexes: [] },
    array7: { array: [], indexes: [] },
    array8: { array: [], indexes: [] },
    array9: { array: [], indexes: [] },
    array10: { array: [], indexes: [] },
  });

  // This useEffect updates the random indexes of the currently touching div, for setting white chars, every 250ms.
  useEffect(() => {
    if (isTouching) {
      const intervalId = setInterval(() => {
        const arrayKey = touchingDivId.replace("div", "array"); // Converts 'div1' to 'array1', etc.

        if (numArrays[arrayKey]) {
          const indexes = new Set();
          while (indexes.size < 25) {
            indexes.add(Math.floor(Math.random() * 392));
          }

          setNumArrays((prevState) => ({
            ...prevState,
            [arrayKey]: {
              ...prevState[arrayKey],
              indexes: [...indexes],
            },
          }));
        }
      }, 250);

      return () => clearInterval(intervalId);
    }
  }, [isTouching, numArrays, touchingDivId]);

  const divStyle1 = {
    width: "350px",
    height: "250px",
    marginBottom: "10px",
    borderRadius: "15px",
    marginLeft: "500px",
  };

  const divStyle2 = {
    ...divStyle1,
  };

  const marqueeStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
  };

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

  // function generateIndexes() {
  //   // const indexes = new Set();
  //   // while (indexes.size < 25) {
  //   //   indexes.add(Math.floor(Math.random() * 392));
  //   // }
  //   // return [...indexes];
  // }

  if (!isMounted) {
    return null;
  }

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
            <div className="marquee inline-flex overflow-hidden flex-nowrap">
              <div id="div1" className="bg-blue-800" style={divStyle1}></div>
              <div id="div2" className="bg-red-800" style={divStyle1}></div>
              <div id="div3" className="bg-green-800" style={divStyle1}></div>
              <div id="div4" className="bg-orange-800" style={divStyle1}></div>
              <div id="div5" className="bg-purple-800" style={divStyle1}></div>
              <div id="div6" className="bg-blue-800" style={divStyle1}></div>
              <div id="div7" className="bg-red-800" style={divStyle1}></div>
              <div id="div8" className="bg-green-800" style={divStyle1}></div>
              <div id="div9" className="bg-orange-800" style={divStyle1}></div>
              <div id="div10" className="bg-purple-800" style={divStyle1}></div>
            </div>
          </div>
          <div
            className="-mt-2 "
            style={{
              ...marqueeStyle,
              clipPath: "polygon(47.5% 0, 95% 0, 95% 100%, 47.5% 100%)",
            }}
          >
            <div className="marquee inline-flex overflow-hidden flex-nowrap">
              {Object.keys(arrays).map((key) => (
                <div
                  key={key}
                  className="wrapText pl-2 text-[10px]"
                  style={divStyle2}
                >
                  <p className="tracking-normal leading-[18.4px] -mt-[3px] font-mono">
                    {arrays[key].array.map((char, index) =>
                      numArrays[key].indexes.includes(index) ? (
                        <span key={index} className="text-white">
                          {char}{" "}
                        </span>
                      ) : (
                        <span key={index} className="text-zinc-500">
                          {char}{" "}
                        </span>
                      )
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="glow-line-parent mt-[120px] left-1/2 z-10 h-[250px] w-[250px] absolute pointer-events-none mix-blend-screen">
            <div className="glow-line-child top-0 right-0 bottom-0 left-0 absolute"></div>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
