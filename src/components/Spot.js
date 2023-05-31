import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./Spot.module.css";

const Spot = (props) => {
  return (
    <li key={props.id}>
      <div className="card mb-3">
        <figure className={classes.fig}>
          <img src={props.img} className={classes.img} alt="..." />
          <figcaption className="figure-caption mt-2">{props.foot} </figcaption>
        </figure>
        <div className="card-body">
          <h5 className="card-title">{props.location}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </li>
  );
};

export default Spot;
