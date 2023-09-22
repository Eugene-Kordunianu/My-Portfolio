import "./contscts.css";

import ContactsFoto from "../../../svg/Businessman-amico.svg";

function clickHandler() {
   fetch('http://test1.ua', {
      method: 'POST',
      header: {
         'content': 'application',

      },
      body: JSON.stringify({ action: 1 })
   })
      .then(response => response.text())
      .then(response => {
         console.log(response);
      })
}

import React, { useState } from 'react';

function Contacts() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      like: 'Yes!', // За замовчуванням вибрано 'Yes!'
      message: '',
      thebest: false, // По замовчуванню false
      image: null,
   });

   const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
   };

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      const fieldValue = type === 'checkbox' ? checked : value;
      setFormData({ ...formData, [name]: fieldValue });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const form = e.target;
      const formDataToSend = new FormData(form);

      try {
         const response = await fetch('http://test1.ua', {
            method: 'POST',
            body: formDataToSend,
         })
         

         if (response.ok) {
            console.log(response);
            alert('Form sent!');
            // form.reset();
            setFormData({
               name: '',
               email: '',
               like: 'Yes!',
               message: '',
               thebest: false,
               image: null,
            });
         } else {
            alert('Error!');
         }
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div className="contacts__content">
         <form
            method="POST"
            action="../../sendmail/sendmail.php"
            encType="multipart/form-data"
            className="form glass__effect"
            onSubmit={handleSubmit}
         >
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
               <h4 className="options-form__title">You like me portfolio?</h4>
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
            <div className="form__file file-form">
               <label className="file-form__item">
                  <input
                     type="file"
                     name="image"
                     accept=".jpg, .png"
                     className="file-form__input"
                     onChange={handleFileChange}
                  />
                  <div className="file-form__button button-fail-form btn ">
                     Choose File
                  </div>
               </label>
               <div className="file-form__name">
                  {formData.image ? formData.image.name : ''}
               </div>
            </div>
            <label className="form__checkbox checkbox-form">
               <input
                  required
                  type="checkbox"
                  name="thebest"
                  checked={formData.thebest}
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
            </button>
         </form>
      </div>
   );
}

export default Contacts;


// import React, { useState } from 'react';

// function Contacts() {
//    const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       like: 'Yes!', // За замовчуванням вибрано 'Yes!'
//       message: '',
//       thebest: false, // По замовчуванню false
//       image: null,
//    });

//    const handleFileChange = (e) => {
//       const file = e.target.files[0];
//       setFormData({ ...formData, image: file });
//    };

//    const handleChange = (e) => {
//       const { name, value, type, checked } = e.target;
//       const fieldValue = type === 'checkbox' ? checked : value;
//       setFormData({ ...formData, [name]: fieldValue });
//    };

//    const handleSubmit = async (e) => {
//       e.preventDefault();

//       const form = e.target;
//       const formDataToSend = new FormData(form);

//       try {
//          const response = await fetch('sendmail/sendmail.php', {
//             method: 'POST',
//             body: formDataToSend,
//          });

//          if (response.ok) {
//             alert('Form sent!');
//             form.reset();
//          } else {
//             alert('Error!');
//          }
//       } catch (error) {
//          console.error(error);
//       }
//    };

//    return (
//       <div className="contacts__content">
//          {/* ... решта вашого коду ... */}
//          <form
//             method="POST"
//             action="sendmail/sendmail.php"
//             encType="multipart/form-data"
//             className="form glass__effect"
//             onSubmit={handleSubmit}
//          >
//             <div className="contacts__content">
//                <img src={ContactsFoto} alt="" />
//                <form method="POST" action="sendmail/sendmail.php" encType="multipart/form-data" className="form glass__effect">
//                   <h2 className="form__title">Contact me</h2>
//                   <input required type="text" placeholder="Name" name="name" className="form__input " />
//                   <input required type="email" placeholder="E-mail" name="email" className="form__input" />
//                   <div className="form__options options-form ">
//                      <h4 className="options-form__title" >You like me portfolio?</h4>
//                      <label className="options-form__item ">
//                         <input checked type="radio" name="like" value="Yes!" className="options-form__input" />
//                         <span className="options-form__text">Yes!</span>
//                      </label>
//                      <label className="options-form__item">
//                         <input type="radio" name="like" value="Yes of course!" className="options-form__input" />
//                         <span className="options-form__text">Yes of course!</span>
//                      </label>
//                   </div>
//                   <textarea name="message" placeholder="Message"></textarea>
//                   <div className="form__file file-form">
//                      <label className="file-form__item">
//                         <input type="file" name="image" accept=".jpg, .png" className="file-form__input" />
//                         <div className="file-form__button button-fail-form btn ">Choose File</div>
//                      </label>
//                      <div className="file-form__name"></div>
//                   </div>
//                   <label className="form__checkbox checkbox-form">
//                      <input required type="checkbox" name="thebest" className="checkbox-form__input" />
//                      <span className="checkbox-form__text">I will be back!</span>
//                   </label>
//                   {/* <button type="submit" className=" btn small check form__button " onClick={formSubmitAction}>Send</button> */}
//                </form>
//             </div>
//             <button
//                type="submit"
//                className="btn small check form__button"
//             >
//                Send
//             </button>
//          </form>
//       </div>
//    );
// }

// export default Contacts;

/* export default function Contacts() {

   
   const forms = document.forms;
   if (forms.length) {
      for (const form of forms) {
         const file = form.querySelector('input[type="file"]');
         console.log(file);
         file ? file.addEventListener('change', formAddFile) : null;
         form.addEventListener("submit", formSubmitAction);
      }
   }
   function formAddFile(e) {
      const formInputFile = e.target;
      console.log(formInputFile);
      const formFiles = formInputFile.files;
      console.log(formFiles);
      const fileName = formFiles.length ? formFiles[0].name : "";
      formInputFile.parentElement.nextElementSibling.innerHTML = fileName;
   }

   async function formSubmitAction(e) {
      e.preventDefault();
      const form = e.target.parentElement;
      console.dir(form);
      const formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : "#";
      const formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : "#";
      const formData = new FormData(form);

      form.classList.add('form-sending');

      const response = await fetch(formAction, {
         method: formMethod,
         body: formData
      })
      if (response.ok) {
         alert("form sent!");
         form.classList.remove('form-sending');

         const formInputFile = form.querySelector('input[type="file"]');
         formInputFile ? formInputFile.parentElement.nextElementSibling.innerHTML = "" : null;
         form.reset();
      } else {
         alert("Error!")
         form.classList.remove('form-sending');
      }
   }

   return (
      <div className="contacts__content">
         <img src={ContactsFoto} alt="" />
         <form method="POST" action="sendmail/sendmail.php" encType="multipart/form-data" className="form glass__effect">
            <h2 className="form__title">Contact me</h2>
            <input required type="text" placeholder="Name" name="name" className="form__input " />
            <input required type="email" placeholder="E-mail" name="email" className="form__input" />
            <div className="form__options options-form ">
               <h4 className="options-form__title" >You like me portfolio?</h4>
               <label className="options-form__item ">
                  <input checked type="radio" name="like" value="Yes!" className="options-form__input" />
                  <span className="options-form__text">Yes!</span>
               </label>
               <label className="options-form__item">
                  <input type="radio" name="like" value="Yes of course!" className="options-form__input" />
                  <span className="options-form__text">Yes of course!</span>
               </label>
            </div>
            <textarea name="message" placeholder="Message"></textarea>
            <div className="form__file file-form">
               <label className="file-form__item">
                  <input type="file" name="image" accept=".jpg, .png" className="file-form__input" />
                  <div className="file-form__button button-fail-form btn ">Choose File</div>
               </label>
               <div className="file-form__name"></div>
            </div>
            <label className="form__checkbox checkbox-form">
               <input required type="checkbox" name="thebest" className="checkbox-form__input" />
               <span className="checkbox-form__text">I will be back!</span>
            </label>
            <button type="submit" className=" btn small check form__button " onClick={formSubmitAction}>Send</button>
         </form>
      </div>
   )
} */