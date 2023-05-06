import React, { Fragment } from "react";
import classes from "./AboutUsCard.module.css";
import rick from "./../pictures/rick.jpeg";
import bugs from "./../pictures/bugs.jpeg";

const AboutUsCards = () => {
  return (
    <>
      <h2 className="text-center mt-5">Meet the crew that works for you..</h2>
      <div className={classes.cards}>
        <div className="card mx-auto" style={{ width: 290 }}>
          <img src={rick} className={classes.profile} alt="rick-sanchez" />
          <div className="card-body">
            <h5 className="card-title  text-center">Richard Daniel Sanchez</h5>
            <p className="text-uppercase text-center role">
              Senior Front End Developer
            </p>
          </div>
          <div className="box">
            <div>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github text-dark"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in  text-dark"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram  text-dark"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter  text-dark"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card mx-auto " style={{ width: 290 }}>
          <img src={bugs} className={classes.profile} alt="bags-bunny" />
          <div className="card-body">
            <h5 className="card-title  text-center">Bugs Bunny</h5>
            <p className="text-uppercase text-center role">Executive Editor</p>
          </div>
          <div className="box">
            <div>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github  text-dark"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in  text-dark"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram  text-dark"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter  text-dark"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsCards;
