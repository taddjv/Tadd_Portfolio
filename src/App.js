import "./styles/App.css";
import "./styles/Camera.css";
import { useGeneral } from "./context";

import CTitle from "./components/Main/CTitle";
import ContactForm from "./components/Contact/ContactForm";
import Projects from "./components/Project/Projects";
import AboutMe from "./components/About/AboutMe";
import Skills from "./components/Skill/Skills";
import LoadScreen from "./components/LoadScreen";
import CanvasRender from "./components/Canvas";
import { useEffect } from "react";
function App() {
  const { location, ready } = useGeneral();
  useEffect(() => {});

  return (
    <>
      <LoadScreen />
      {ready && <>{location === "center" && <CTitle />}</>}
      <ContactForm />
      <AboutMe />
      <Projects />
      <Skills />
      <CanvasRender />
    </>
  );
}

export default App;
