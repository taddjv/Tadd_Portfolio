import React, { useState, useEffect, useRef } from "react";
import "../styles/Load.css";
import { useGeneral } from "../context";

const LoadScreen = () => {
  const { ready } = useGeneral();
  useEffect(() => {
    const doc = document.querySelector(".load-conatainer");
    if (ready) {
      setTimeout(() => {
        doc.style.display = "none";
      }, 500);
    }
  });
  return (
    <div className="load-conatainer">
      <div className="load-text">Loading...</div>
      <div className="load-bar">
        <div className="l-b-porgress"></div>
      </div>
    </div>
  );
};

export default LoadScreen;
