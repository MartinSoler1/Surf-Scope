import { useState, useEffect, useCallback } from "react";
import FilterSpot from "../components/FilterSpot";
import SpotList from "../components/SpotList";
import axios from "axios";
import LoadingIndicator from "../components/UI/LoadingIndicator";

const Home = () => {
  const [spots, setSpots] = useState([]);
  const [filteredSpots, setFilteredSpots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://surf-scope-default-rtdb.firebaseio.com/spots.json"
      );
      const data = await response.data;
      setIsLoading(false);

      const loadedSpots = [];
      for (const key in data) {
        loadedSpots.push({
          id: key,
          location: data[key].location,
          foot: data[key].foot,
          continent: data[key].continent,
          description: data[key].description,
          img: data[key].img,
        });
      }
      setSpots(loadedSpots);
      setFilteredSpots(loadedSpots);
    } catch (err) {
      if (err.response) {
        console.error(err.response.data);
        console.error(err.response.status);
        console.error(err.response.headers);
      } else if (err.request) {
        console.error(err.request);
      } else {
        console.log("ERROR", err.message);
      }
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filterplaces = (bttn) => {
    if (bttn === " ") {
      setFilteredSpots(spots.filter((place) => place.continent !== bttn));
    } 
    else {
      setFilteredSpots(spots.filter((place) => place.continent === bttn));
    }
  };

  return (
    <div>
      <FilterSpot bttnClicked={filterplaces} spots={spots} />
      {isLoading ? <LoadingIndicator /> : <SpotList spots={filteredSpots} />}
    </div>
  );
};

export default Home;
