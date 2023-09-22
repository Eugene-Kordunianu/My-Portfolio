import "./app.css";

import Header from "../header/index";
import Main from "../main/index";
import Footer from "../footer/footer";
export default function App() {
   return (
      <div className="wrapper">
         <Header/>
         <Main/>
         <Footer/>
      </div>
   )
}