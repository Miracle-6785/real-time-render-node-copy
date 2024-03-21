import React, { useState } from "react";
import "../../index.css";
import Leaflet from "../workers/map/Leaflet";
import SideBar from "./sidebar/SideBar";
import "../css/App.css";

const Main = () => {
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [displayedMarkers, setDisplayedMarkers] = useState([]);

  function changeToLocation(new_lng, new_lat) {
    setLng(new_lng);
    setLat(new_lat);
  }

  const handleMoveEnd = (displayedMarkers) => {
    setDisplayedMarkers(displayedMarkers);
  };

  return (
    <div className="app">
      <div className="main-content">
        <SideBar
          changeToLocation={changeToLocation}
          displayedMarkers={displayedMarkers} // Pass displayedMarkers to SideBar
          onMoveEnd={handleMoveEnd}
        />
        {lng !== null && lat !== null && (
          <Leaflet className={"leaflet"} new_lng={lng} new_lat={lat} onMoveEnd={handleMoveEnd} displayedMarkers={displayedMarkers} setDisplayedMarkers={setDisplayedMarkers}/>
        )}
        <Leaflet className={"leaflet"} 
          onMoveEnd={handleMoveEnd} 
          displayedMarkers={displayedMarkers} 
          setDisplayedMarkers={setDisplayedMarkers}
        />
      </div>
    </div>
  );
};

export default Main;
