"use client";
import { WindMap2 } from "../WindMap2.jsx";
import { useRef, useState } from "react";

const CanvasPage = () => {
  const [bearing, setBearing] = useState(270);

  return (
    <div id="app" className="">
      <WindMap2 bearing={bearing} />
      <div className="controls">{/* <div>{bearing}</div> */}</div>
    </div>
  );
};

export default CanvasPage;
