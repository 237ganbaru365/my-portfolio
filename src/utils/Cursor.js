import React, { useEffect, useState } from "react";
import "../styles/cursor.css";

function Cursor() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [color, setColor] = useState("");
  const [shape, setShape] = useState("");

  useEffect(() => {
    const mouseMoveListener = (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };
    window.addEventListener("mousemove", mouseMoveListener);

    const ramNum = Math.floor(Math.random() * 3);
    const shapeArr = ["isTriangle", "isCircle", ""];
    const collorArr = ["isYellow", "isBlue", "isPink"];

    setColor(collorArr[ramNum]);
    setShape(shapeArr[ramNum]);

    return () => {
      window.removeEventListener("mousemove", mouseMoveListener);
    };
  }, []);

  return (
    <div
      className={`pointer ${color} ${shape}`}
      style={{
        transform: `translate(${mouseX - 650}px, ${mouseY - 500}px)`,
      }}
    ></div>
  );
}

export default Cursor;
