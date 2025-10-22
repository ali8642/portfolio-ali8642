import React, { useEffect } from "react";
import "../App.css";

function BlackFireCursor() {
  useEffect(() => {
    const circle = document.querySelector(".circle");

    const handleMouseMove = (e) => {
      circle.style.left = e.clientX - 16 + "px";
      circle.style.top = e.clientY - 16 + "px";
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="circle"></div>
    </>
  );
}

export default BlackFireCursor;
