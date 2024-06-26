import React, { useState } from "react";
import "../../index.css";
import Leaflet from "../workers/map/Leaflet";
import SideBar from "./sidebar/SideBar";
import "../css/App.css";

const Main = () => {
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [new_zoom, setNewZoom] = useState(null);
  const [displayedMarkers, setDisplayedMarkers] = useState([]);
  const [clickedMarker, setClickedMarker] = useState(null);

  function changeToLocation(new_lng, new_lat, new_zoom) {
    setLng(new_lng);
    setLat(new_lat);
    setNewZoom(new_zoom);
    console.log('lat:' + new_lat + ' lng:' + new_lng);
  }

  const handleMoveEnd = (displayedMarkers) => {
    setDisplayedMarkers(displayedMarkers);
  };

  const handleMarkerClicked = (clickedMarker) => {
    setClickedMarker(clickedMarker);
  };

  return (
    <div className="app">
      <div className="main-content">
        <SideBar
          changeToLocation={changeToLocation}
          displayedMarkers={displayedMarkers} // Pass displayedMarkers to SideBar
          onMoveEnd={handleMoveEnd}
          onMarkerClicked={handleMarkerClicked}
          clickedMarker={clickedMarker}
        />
        {lng !== null && lat !== null && (
          <Leaflet 
            className={"leaflet"} 
            new_lng={lng} 
            new_lat={lat} 
            new_zoom={new_zoom} 
            onMoveEnd={handleMoveEnd} 
            displayedMarkers={displayedMarkers} 
            setDisplayedMarkers={setDisplayedMarkers}
            clickedMarker={clickedMarker}
            onMarkerClicked={handleMarkerClicked}
          />
        )}
        <Leaflet className={"leaflet"} 
          onMoveEnd={handleMoveEnd} 
          displayedMarkers={displayedMarkers} 
          setDisplayedMarkers={setDisplayedMarkers}
          clickedMarker={clickedMarker}
          onMarkerClicked={handleMarkerClicked}
        />
      </div>
    </div>
  );
};

export default Main;
