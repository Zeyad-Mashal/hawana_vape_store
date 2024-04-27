import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import ContactUs from "../../Api/ContactUs.api";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const [t] = useTranslation("globel");
  const [cName, setCName] = useState("");
  const [cNumber, setCNumber] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cMessage, setCMessage] = useState("");
  const [cLoading, setCLoading] = useState(false);
  const [cError, setCError] = useState("");
  const closeContact = () => {
    document
      .querySelector(".contact_popup")
      .classList.replace("d-block", "d-none");
  };
  const postContactUs = () => {
    if (cName == "" || cNumber == "" || cEmail == "" || cMessage == "") {
      setCError("كل الخانات مطلوبة");
    } else {
      const data = {
        userName: cName,
        phoneNumber: cNumber,
        email: cEmail,
        message: cMessage,
      };
      ContactUs(
        data,
        setCLoading,
        setCError,
        setCName,
        setCNumber,
        setCEmail,
        setCMessage
      );
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="contact_container">
        <div className="contact_content">
          <h2>{t("contactsection")}</h2>
          <div>
            <input
              type="text"
              placeholder="الاسم"
              value={cName}
              onChange={(e) => setCName(e.target.value)}
            />
            <input
              type="number"
              placeholder="رقم الهاتف"
              value={cNumber}
              onChange={(e) => setCNumber(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="الايميل"
              value={cEmail}
              onChange={(e) => setCEmail(e.target.value)}
            />
            <textarea
              placeholder="اكتب رسالتك او استفسر عن عروضنا"
              value={cMessage}
              onChange={(e) => setCMessage(e.target.value)}
            />
          </div>
          <p className="error">{cError}</p>
          <button onClick={postContactUs}>
            {cLoading ? <span class="loader"></span> : "Send"}
          </button>
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
          <p>ادارة هوانا فيب</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
