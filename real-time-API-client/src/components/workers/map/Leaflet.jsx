import React, { useState, useEffect } from "react";
import { Map, TileLayer, ZoomControl } from "react-leaflet";
import MarkerCluster from "./Cluster";
import WorkerList from "../../../data/WorkerList.json";
import "../../css/map.css";

const mapStyle = {
  height: "calc(100vh - 80px)",
  maxHeight: "calc(100vh - 80px)",
};

const Leaflet = ({ new_lng = null, new_lat = null, onMoveEnd, displayedMarkers, setDisplayedMarkers }) => {
  const [workerList, setWorkerList] = useState([]);

  useEffect(() => {
    const loadData = () => JSON.parse(JSON.stringify(WorkerList));
    const Data = loadData();
    setWorkerList(Data);
  }, []);

  const addMarkers = () => {
    const markers = [];
    workerList.forEach((worker) => {
      if (worker.status === "Active") {
        markers.push({
          position: {
            lng: worker.longitude,
            lat: worker.latitude,
          },
        });
      }
    });
    return markers;
  };

  let markers = addMarkers(); // Initialize markers

  const handleMoveEnd = (displayedMarkers) => {
    onMoveEnd(displayedMarkers); // Pass displayed markers to Main component
  };

  // Set initial position and zoom
  let position = [51.505, -0.09];
  let zoom = 3;
  if (new_lng !== null && new_lat !== null) {
    position = [new_lat, new_lng];
    zoom = 18;
  }

  return (
    <div id="map">
      <Map
        center={position}
        zoom={zoom}
        style={mapStyle}
        maxZoom={20}
        zoomControl={false}
        className="no-margin"
        onMoveEnd={handleMoveEnd} // Handle moveend event
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerCluster markers={markers} addMarkers={addMarkers} onMoveEnd={handleMoveEnd} setDisplayedMarkers={setDisplayedMarkers}/>
        <ZoomControl position="bottomright" />
      </Map>
    </div>
  );
};

export default Leaflet;
