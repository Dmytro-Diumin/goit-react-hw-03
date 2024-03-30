import React from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import style from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;
  return (
    <li key={id}>
      <div>
        <div className={style.wrapIcon}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={style.wrapIcon}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default Contact;
