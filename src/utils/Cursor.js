import React, { useEffect, useState } from "react";
import "../styles/cursor.css";

function Cursor() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const mouseMoveListener = (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    window.addEventListener("mousemove", mouseMoveListener);

    return () => {
      window.removeEventListener("mousemove", mouseMoveListener);
    };
  }, []);

  return (
    <div
      className="pointer isCircle isYellow"
      style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
    ></div>
  );
}

export default Cursor;
