import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.querySelector("#root")).render(
   <>
      <StrictMode>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </StrictMode>
   </>


);





