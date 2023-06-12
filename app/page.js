"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isTouching, setIsTouching] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);
  const [array3, setArray3] = useState([]);
  const [array4, setArray4] = useState([]);
  const [array5, setArray5] = useState([]);
  const [array6, setArray6] = useState([]);
  const [array7, setArray7] = useState([]);
  const [array8, setArray8] = useState([]);
  const [array9, setArray9] = useState([]);
  const [array10, setArray10] = useState([]);

  useEffect(() => {
    setArray1(generateArray());
    setArray2(generateArray());
    setArray3(generateArray());
    setArray4(generateArray());
    setArray5(generateArray());
    setArray6(generateArray());
    setArray7(generateArray());
    setArray8(generateArray());
    setArray9(generateArray());
    setArray10(generateArray());
  }, []);

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
  useEffect(() => {
    console.log(isTouching);
  }, [isTouching]);

  const [touchingDivId, setTouchingDivId] = useState(null);

  useEffect(() => {
    if (isTouching) {
      const intervalId = setInterval(() => {
        switch (touchingDivId) {
          case "div1":
            setArray1(generateArray());
            break;
          case "div2":
            setArray2(generateArray());
            break;
          case "div3":
            setArray3(generateArray());
            break;
          case "div4":
            setArray4(generateArray());
            break;
          case "div5":
            setArray5(generateArray());
            break;
          case "div6":
            setArray6(generateArray());
            break;
          case "div7":
            setArray7(generateArray());
            break;
          case "div8":
            setArray8(generateArray());
            break;
          case "div9":
            setArray9(generateArray());
            break;
          case "div10":
            setArray10(generateArray());
            break;
          default:
            break;
        }
      }, 250);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isTouching, touchingDivId]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [randomIndexes1, setRandomIndexes1] = useState([]);
  const [randomIndexes2, setRandomIndexes2] = useState([]);
  const [randomIndexes3, setRandomIndexes3] = useState([]);
  const [randomIndexes4, setRandomIndexes4] = useState([]);
  const [randomIndexes5, setRandomIndexes5] = useState([]);
  const [randomIndexes6, setRandomIndexes6] = useState([]);
  const [randomIndexes7, setRandomIndexes7] = useState([]);
  const [randomIndexes8, setRandomIndexes8] = useState([]);
  const [randomIndexes9, setRandomIndexes9] = useState([]);
  const [randomIndexes10, setRandomIndexes10] = useState([]);

  // Generate 25 unique random numbers on component mount
  useEffect(() => {
    const indexes = new Set();
    while (indexes.size < 25) {
      indexes.add(Math.floor(Math.random() * 392));
    }
    setRandomIndexes10([...indexes]);
  }, [array10]);
  useEffect(() => {
    const indexes = new Set();
    while (indexes.size < 25) {
      indexes.add(Math.floor(Math.random() * 392));
    }
    setRandomIndexes9([...indexes]);
  }, [array9]);
  useEffect(() => {
    const indexes = new Set();
    while (indexes.size < 25) {
      indexes.add(Math.floor(Math.random() * 392));
    }
    setRandomIndexes8([...indexes]);
  }, [array8]);
  useEffect(() => {
    const indexes = new Set();
    while (indexes.size < 25) {
      indexes.add(Math.floor(Math.random() * 392));
    }
    setRandomIndexes7([...indexes]);
  }, [array7]);
  useEffect(() => {
    const indexes = new Set();
    while (indexes.size < 25) {
      indexes.add(Math.floor(Math.random() * 392));
    }
    setRandomIndexes6([...indexes]);
  }, [array6]);
  useEffect(() => {
    const indexes = new Set();
    while (indexes.size < 25) {
      indexes.add(Math.floor(Math.random() * 392));
    }
    setRandomIndexes5([...indexes]);
  }, [array5]);
  useEffect(() => {
    const indexes = new Set();
    while (indexes.size < 25) {
      indexes.add(Math.floor(Math.random() * 392));
    }
    setRandomIndexes4([...indexes]);
  }, [array4]);
  useEffect(() => {
    const indexes = new Set();
    while (indexes.size < 25) {
      indexes.add(Math.floor(Math.random() * 392));
    }
    setRandomIndexes3([...indexes]);
  }, [array3]);
  useEffect(() => {
    const indexes = new Set();
    while (indexes.size < 25) {
      indexes.add(Math.floor(Math.random() * 392));
    }
    setRandomIndexes2([...indexes]);
  }, [array2]);
  useEffect(() => {
    const indexes = new Set();
    while (indexes.size < 25) {
      indexes.add(Math.floor(Math.random() * 392));
    }
    setRandomIndexes1([...indexes]);
  }, [array1]);

  if (!isMounted) {
    return null;
  }
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
            <div className="marquee">
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
            <div className="marquee">
              <div className="wrapText pl-2 text-[10px]" style={divStyle2}>
                <p className="tracking-normal leading-[18.4px] -mt-[3px] font-mono">
                  {array1.map((char, index) =>
                    randomIndexes1.includes(index) ? (
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
              <div className="wrapText pl-2 text-[10px]" style={divStyle2}>
                <p className="tracking-normal leading-[18.4px] -mt-[3px] font-mono">
                  {array2.map((char, index) =>
                    randomIndexes2.includes(index) ? (
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
              <div className="wrapText pl-2 text-[10px]" style={divStyle2}>
                <p className="tracking-normal leading-[18.4px] -mt-[3px] font-mono">
                  {array3.map((char, index) =>
                    randomIndexes3.includes(index) ? (
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
              <div className="wrapText pl-2 text-[10px]" style={divStyle2}>
                <p className="tracking-normal leading-[18.4px] -mt-[3px] font-mono">
                  {array4.map((char, index) =>
                    randomIndexes4.includes(index) ? (
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
              <div className="wrapText pl-2 text-[10px]" style={divStyle2}>
                <p className="tracking-normal leading-[18.4px] -mt-[3px] font-mono">
                  {array5.map((char, index) =>
                    randomIndexes5.includes(index) ? (
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
              <div className="wrapText pl-2 text-[10px]" style={divStyle2}>
                <p className="tracking-normal leading-[18.4px] -mt-[3px] font-mono">
                  {array6.map((char, index) =>
                    randomIndexes6.includes(index) ? (
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
              <div className="wrapText pl-2 text-[10px]" style={divStyle2}>
                <p className="tracking-normal leading-[18.4px] -mt-[3px] font-mono">
                  {array7.map((char, index) =>
                    randomIndexes7.includes(index) ? (
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
              <div className="wrapText pl-2 text-[10px]" style={divStyle2}>
                <p className="tracking-normal leading-[18.4px] -mt-[3px] font-mono">
                  {array8.map((char, index) =>
                    randomIndexes8.includes(index) ? (
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
              <div className="wrapText pl-2 text-[10px]" style={divStyle2}>
                <p className="tracking-normal leading-[18.4px] -mt-[3px] font-mono">
                  {array9.map((char, index) =>
                    randomIndexes9.includes(index) ? (
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
              <div className="wrapText pl-2 text-[10px]" style={divStyle2}>
                <p className="tracking-normal leading-[18.4px] -mt-[3px] font-mono">
                  {array10.map((char, index) =>
                    randomIndexes10.includes(index) ? (
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
            </div>
          </div>
          <GlowLine />
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
