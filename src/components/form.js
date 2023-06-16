import React, { useState } from "react";
import styles from "./contactform.module.css";

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(inputs);
      resetForm();
    }
  };

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = {
      name: "",
      email: "",
      address: "",
      message: "",
    };

    if (inputs.name.trim() === "") {
        updatedErrors.name = "Name is required";
        isValid = false;
      } else {
        const nameWords = inputs.name.trim().split("");
        if (nameWords.length < 3) {
          updatedErrors.name = " Full Name is required";
          isValid = true;
        }
      }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (inputs.email.trim() === "") {
      updatedErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(inputs.email)) {
      updatedErrors.email = "Invalid email address";
      isValid = false;
    }

    if (inputs.address.trim() === "") {
        updatedErrors.address = "Address is required";
        isValid = false;
      } else {
        const addressChara = inputs.address.trim().split("");
        if (addressChara.length < 10) {
          updatedErrors.address = "Write complete address";
          isValid = false;
        }
      }

    // if (inputs.message.trim() === "") {
    //   updatedErrors.message = "Message is required";
    //   isValid = false;
    // }

    setErrors(updatedErrors);
    return isValid;
  };

  const resetForm = () => {
    setInputs({
      name: "",
      email: "",
      address: "",
      message: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <h1> Contact Us </h1>
      <div className={styles["form-input"]}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={inputs.email}
          onChange={handleChange}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={inputs.address}
          onChange={handleChange}
        />
        {errors.address && <span className={styles.error}>{errors.address}</span>}
      </div>
      <div className={styles["form-text-area"]}>
        <textarea
          name="message"
          rows="7"
          className="textar"
          placeholder="Message"
          value={inputs.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <span className={styles.error}>{errors.message}</span>}
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
