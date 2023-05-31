import React from "react";
import Spot from "./Spot";

const SpotList = (props) => {
  return (
    <div>
      <ul className="list-unstyled my-4">
        {props.spots.map((x) => (
          <Spot
            key={x.id}
            img={x.img}
            foot={x.foot}
            location={x.location}
            description={x.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default SpotList;
