import React, { useState, useEffect, useRef } from "react";
import "../styles/Load.css";
import { useGeneral } from "../context";

const LoadScreen = () => {
  const { ready } = useGeneral();
  useEffect(() => {
    const doc = document.querySelector(".load-conatainer");
    const text = document.querySelector(".load-text-2");
    if (ready) {
      setTimeout(() => {
        doc.style.filter = "blur(100px)";
        doc.style.background = "rgba(199, 199, 199, 0)";
      }, 500);
      setTimeout(() => {
        doc.style.display = "none";
      }, 1500);
    }
    if (text) {
      setTimeout(() => {
        text.style.color = "rgba(0, 0, 0, 1)";
      }, 6000);
    }
  });
  return (
    <div className="load-conatainer">
      <div className="load-text">Loading...</div>
      <div className="load-bar">
        <div className="l-b-porgress"></div>
      </div>
      <div className="load-text-2">
        This is taking a while... I'm sorry about that
      </div>
    </div>
  );
};

export default LoadScreen;
