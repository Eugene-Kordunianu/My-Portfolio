import "./contscts.css";
import React, { useState, useContext } from 'react';

import ContactsFoto from "../../svg/Businessman-amico.svg";
import PlanePaper from "../../svg/Plane_paper.svg";
import GitHub from "../../svg/gitHub-contact-icon.svg";
import GitLab from "../../svg/gitLab-contact-icon.svg";
import LinkedIn from "../../svg/linkedIn-contact-icon.svg";

import Context from "../../components/context/context";
import { Link } from "react-router-dom";



function Contacts() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      like: 'Yes!', // За замовчуванням вибрано 'Yes!'
      message: '',
      iBeBack: false, // По замовчуванню false
      image: null,
   });
   const context = useContext(Context)

   // const handleFileChange = (e) => {
   //    const file = e.target.files[0];
   //    setFormData({ ...formData, image: file });
   // };

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      const fieldValue = type === 'checkbox' ? checked : value;
      setFormData({ ...formData, [name]: fieldValue });
   };




   return (
      <div ref={context.sectionRefs.contactsRef} className="contacts__content">
         <img src={ContactsFoto} alt="" />
         <form
            className="form glass__effect"
            name="contact"
            method="post"
         >
            <input type="hidden" name="form-name" value="contact" />
            <h2 className="form__title">Contact me</h2>
            <input
               required
               type="text"
               name="name"
               value={formData.name}
               onChange={handleChange}
               placeholder="Name"
               className="form__input"
            />
            <input
               required
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               placeholder="E-mail"
               className="form__input"
            />
            <div className="form__options options-form">
               <h4 className="options-form__title">Do you like me portfolio?</h4>
               <label className="options-form__item">
                  <input
                     type="radio"
                     name="like"
                     value="Yes!"
                     checked={formData.like === 'Yes!'}
                     onChange={handleChange}
                     className="options-form__input"
                  />
                  <span className="options-form__text">Yes!</span>
               </label>
               <label className="options-form__item">
                  <input
                     type="radio"
                     name="like"
                     value="Yes of course!"
                     checked={formData.like === 'Yes of course!'}
                     onChange={handleChange}
                     className="options-form__input"
                  />
                  <span className="options-form__text">Yes of course!</span>
               </label>
            </div>
            <textarea
               name="message"
               value={formData.message}
               onChange={handleChange}
               placeholder="Message"
            ></textarea>
            <label className="form__checkbox checkbox-form">
               <input
                  required
                  type="checkbox"
                  name="iBeBack"
                  checked={formData.iBeBack}
                  onChange={handleChange}
                  className="checkbox-form__input"
               />
               <span className="checkbox-form__text">I will be back!</span>
            </label>
            <button
               type="submit"
               className="btn small check form__button"
            >
               Send
               <img id="palne__icon" src={PlanePaper} alt="plane-paper" />
            </button>
            <div className="form__box-icon">
               <Link to="https://www.linkedin.com/in/eugene-kordunianu-b8987328b" target="_blank" rel="noopener noreferrer">
                  <img src={LinkedIn} alt="LinkedIn" />
               </Link>
               <Link to="https://github.com/Eugene-Kordunianu" target="_blank" rel="noopener noreferrer">
                  <img src={GitHub} alt="GitHub" />
               </Link>
               <Link to="https://gitlab.com/lospokess" target="_blank" rel="noopener noreferrer">
                  <img src={GitLab} alt="GitLab" />
               </Link>
            </div>
         </form>
      </div>
   );
}

export default Contacts;