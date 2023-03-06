import { useState } from "react";
import FilterSpot from "../components/FilterSpot";
import SpotList from "../components/SpotList";
import {spots} from '../surf-spots-app/spotsDb'
const Home = () => {

  console.log(spots)
  const [spot, setSpot] = useState(spots);


  const filterplaces = (bttn) => {
    const filter = spots.filter((place) => place.continent === bttn);
    setSpot(filter)
  };
  return (
    <div>
      <FilterSpot bttnClicked={filterplaces} />
      <SpotList spot={spot} />
    </div>
  );
};

export default Home;
