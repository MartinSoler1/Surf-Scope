import React from "react";
import classes from "./FilterSpot.module.css";
import WorldImg from "./../pictures/WorldImg.jpeg";

const FilterSpot = (props) => {
  return (
    <div className={classes.buttons}>
      <button
        type="button"
        className="btn btn-dark btn-lg btn-floating m-5 fw-bold"
        onClick={() => props.bttnClicked("Asia")}
      >
        Asia
      </button>
      <button
        type="button"
        className="btn btn-dark btn-lg btn-floating m-5 fw-bold"
        onClick={() => props.bttnClicked("Europe")}
      >
        Europe
      </button>
      <button
        type="button"
        className="btn btn-dark btn-lg btn-floating m-5  fw-bold"
        onClick={() => props.bttnClicked("America")}
      >
        America
      </button>
      <button
        type="button"
        className="btn btn-dark btn-lg btn-floating m-5 fw-bold"
        onClick={() => props.bttnClicked("Africa")}
      >
        Africa
      </button>
      <button
        type="button"
        className="btn btn-dark btn-lg btn-floating m-5  fw-bold"
        onClick={() => props.bttnClicked("Oceania")}
      >
        Oceania
      </button>
      <div className={classes.world} onClick={() => props.bttnClicked(" ")}>
        <img src={WorldImg} alt="planet icon" />
        <p>Clear filters</p>
      </div>
    </div>
  );
};

export default FilterSpot;
