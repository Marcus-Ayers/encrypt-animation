"use client";
import { WindMap } from "../WindMap.jsx";
import { useRef, useState } from "react";

const CanvasPage = () => {
  const [bearing, setBearing] = useState(270);

  return (
    <div id="app" className="">
      <WindMap bearing={bearing} />
      <div className="controls">{/* <div>{bearing}</div> */}</div>
    </div>
  );
};

export default CanvasPage;
