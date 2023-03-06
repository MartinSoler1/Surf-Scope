import React, { Fragment, useState } from "react";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (name.trim().length < 5 || email.trim().length === 0) {
      alert("Please entered a valid name (> 5 characters).");
      return;
    }
    props.onAddForm(name, email, description);
console.log(name, email, description)
    setName("");
    setEmail("");
    setDescription("");
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  return (
    <Fragment>
      <div className="container py-4">
        <div className="mt-2">
          <p>
            Reach us by phone <b>+54 9 11 3439 1850</b> between 9am and 5pm (AEST) Monday to Friday or anytime by email <a href="mailto:info@surfspots.com"> info@surfspots.com</a>.</p>The surf scope agency is located at <b> Irigoyen 2023, Mar del Plata.</b> <p /><p>For more inquires leave us a message and our staff will contact you as soon as possible.</p>
        </div>
        <form id="contactForm" onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label ms-1 fw-bold  mt-4" htmlFor="name">
              Full Name
            </label>
            <input
              value={name}
              onChange={nameChangeHandler}
              className="form-control"
              id="name"
              type="text"
            />
          </div>

          <div className="mb-3">
            <label className="form-label ms-1 fw-bold" htmlFor="emailAddress">
              Email Address
            </label>
            <input
              value={email}
              onChange={emailChangeHandler}
              className="form-control"
              id="emailAddress"
              type="email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label ms-1 fw-bold" htmlFor="message">
              Message
            </label>
            <textarea
              value={description}
              onChange={descriptionChangeHandler}
              className="form-control"
              rows="5"
              id="message"
              type="text"
            />
          </div>

          <div className="d-grid">
            <button
              className="btn btn-primary btn-lg "
              id="submitButton"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Contact;
