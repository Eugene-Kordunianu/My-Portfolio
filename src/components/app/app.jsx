// import { Routes, Route } from "react-router-dom";
import Context from "../context/context"

import Header from "../header";
import Main from "../main/main";
import Footer from "../footer";
import "./app.css";
import {useState, useRef} from "react";

// import Home from "../../pagas/home";
// import About from "../../pagas/about";
// import Skills from "../../pagas/skills";
// import {Layout} from "../layout/layout.jsx";
export default function App() {
   const [bodyLoc, setBodyLoc] = useState(false);
   const [sectionRefs, setSectionRefs] = useState({
      homeRef: useRef(null),
      aboutRef: useRef(null),
      skillsRef: useRef(null),
      servicesRef: useRef(null),
      portfolioRef: useRef(null),
      contactsRef: useRef(null),
   })

   const contextItems = {bodyLoc, setBodyLoc, sectionRefs, setSectionRefs}
   return (
      <Context.Provider value= {contextItems}>

         <div className={bodyLoc? "wrapper _lock": "wrapper"}>
            <Header />
            <Main />
            <Footer />

         </div>
      </Context.Provider>
   )
}