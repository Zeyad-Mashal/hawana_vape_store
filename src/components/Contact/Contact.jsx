import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  const openContact = () => {
    document
      .querySelector(".contact_popup")
      .classList.replace("d-none", "d-block");
  };
  const closeContact = () => {
    document
      .querySelector(".contact_popup")
      .classList.replace("d-block", "d-none");
  };
  return (
    <section className="contact">
      <div className="contact_container">
        <h2>تواصل معنا</h2>
        <div className="contact_content">
          <div>
            <input type="text" placeholder="الاسم" />
            <input type="number" placeholder="رقم الهاتف" />
          </div>
          <textarea placeholder="اكتب رسالتك او استفسر عن عروضنا" />
          <button onClick={openContact}>ارسل</button>
        </div>
        <div className="contact_popup d-none">
          <FontAwesomeIcon
            icon={faXmark}
            className="close_popup"
            onClick={closeContact}
          />
          <h3>نشكرك لتواصلك مع هوانا </h3>
          <FontAwesomeIcon icon={faCheck} className="true_popup" />
          <h5>سوف يتم التواصل معك قريبا </h5>
          <p>ادارة هوانا فيب ستور</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
