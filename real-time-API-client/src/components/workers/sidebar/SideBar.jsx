import React, { useEffect, useState } from "react";
import WorkerList from "../../../data/WorkerList.json";
import DropDown from "./DropDown";
import "../../css/SideBar.css";
import "../../css/WorkerHeader.css";

const SideBar = ({ changeToLocation, displayedMarkers, onMoveEnd, onClickedMarker, clickedMarker, setClickedMarker }) => {
  const [workerList, setWorkerList] = useState([]);
  const [totalNode, setTotalNode] = useState(0);
  const [totalCapacity, setTotalCapacity] = useState(0);

  const handleMarkerClicked = (clickedMarker) => {
    setClickedMarker(clickedMarker);
  };
  
  useEffect(() => {
    const loadData = () => JSON.parse(JSON.stringify(WorkerList));
    const data = loadData();
    setWorkerList(data);
    calculateTotals(data);
  }, []);

  useEffect(() => {
    // console.log(clickedMarker);
    if (!clickedMarker) return;
    const filterWorkerList = () => {
    
      const filteredWorkers = WorkerList.filter(worker => {
          if (clickedMarker.getLatLng().lat === worker.latitude && clickedMarker.getLatLng().lng === worker.longitude && worker.status === 'Active') {
            return true;
          }
        return false;
      });

      setWorkerList(filteredWorkers);
    };
    
    // Call the filterWorkerList function whenever displayedMarkers changes
    filterWorkerList();
  }, [clickedMarker]);
  
  useEffect(() => {
    // console.log(displayedMarkers);
    if (!displayedMarkers || displayedMarkers.length === 0) return;
    // Define a function to filter WorkerList based on displayedMarkers
    const filterWorkerList = () => {
      if (!Array.isArray(displayedMarkers)) {
        return;
      }
    
      const filteredWorkers = WorkerList.filter(worker => {
        for (const marker of displayedMarkers) {
          if (marker.getLatLng().lat === worker.latitude && marker.getLatLng().lng === worker.longitude && worker.status === 'Active') {
            // console.log(marker);
            return true;
          }
        }
        return false;
      });
      // console.log("filtered: "+ filteredWorkers.length);
      // Update workerList state with filtered workers
      setWorkerList(filteredWorkers);
    };
    
    // Call the filterWorkerList function whenever displayedMarkers changes
    filterWorkerList();

  }, [displayedMarkers]);

  const calculateTotals = (data) => {
    let totalNodeCount = 0;
    let totalCapacityCount = 0;

    data.forEach((worker) => {
      if (worker.status === "Active") {
        totalNodeCount++;
        totalCapacityCount += worker.capacity;
      }
    });

    setTotalNode(totalNodeCount);
    setTotalCapacity(totalCapacityCount);
  };

  return (
    <div className="text-white p-4 sidebar no-margin">
      <div className="worker-item-header">
        <div className="worker-header-item nodes">
          <div className="header-item-title">
            <div className="header-title">Total Nodes</div>
            <div style={{ flex: 1 }}></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              data-v-03139bce=""
            >
              <g opacity="0.8" data-v-03139bce="">
                <path
                  d="M17.2976 5.40453V15.095M15.0952 3.20215H5.40477M15.0952 17.2974H5.40477M3.20239 5.40453V15.095"
                  stroke="white"
                  strokeWidth="1.5"
                  data-v-03139bce=""
                ></path>
                <circle
                  cx="17.2976"
                  cy="3.20238"
                  r="2.20238"
                  stroke="white"
                  strokeWidth="1.5"
                  data-v-03139bce=""
                ></circle>
                <circle
                  cx="3.20238"
                  cy="3.20238"
                  r="2.20238"
                  stroke="white"
                  strokeWidth="1.5"
                  data-v-03139bce=""
                ></circle>
                <circle
                  cx="17.2976"
                  cy="17.2976"
                  r="2.20238"
                  stroke="white"
                  strokeWidth="1.5"
                  data-v-03139bce=""
                ></circle>
                <circle
                  cx="3.20238"
                  cy="17.2976"
                  r="2.20238"
                  stroke="white"
                  strokeWidth="1.5"
                  data-v-03139bce=""
                ></circle>
              </g>
            </svg>
          </div>
          <div style={{ flex: 1 }}></div>
          <div className="header-item-sub-title">Total</div>
          <div className="header-item-total">{totalNode}</div>
        </div>

        <div className="worker-header-item serving-capability">
          <div className="header-item-title">
            <div className="header-title">Serving Capacity</div>
            <div style={{ flex: 1 }}></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              data-v-03139bce=""
            >
              <g opacity="0.8" data-v-03139bce="">
                <path
                  d="M17.2976 5.40453V15.095M15.0952 3.20215H5.40477M15.0952 17.2974H5.40477M3.20239 5.40453V15.095"
                  stroke="white"
                  strokeWidth="1.5"
                  data-v-03139bce=""
                ></path>
                <circle
                  cx="17.2976"
                  cy="3.20238"
                  r="2.20238"
                  stroke="white"
                  strokeWidth="1.5"
                  data-v-03139bce=""
                ></circle>
                <circle
                  cx="3.20238"
                  cy="3.20238"
                  r="2.20238"
                  stroke="white"
                  strokeWidth="1.5"
                  data-v-03139bce=""
                ></circle>
                <circle
                  cx="17.2976"
                  cy="17.2976"
                  r="2.20238"
                  stroke="white"
                  strokeWidth="1.5"
                  data-v-03139bce=""
                ></circle>
                <circle
                  cx="3.20238"
                  cy="17.2976"
                  r="2.20238"
                  stroke="white"
                  strokeWidth="1.5"
                  data-v-03139bce=""
                ></circle>
              </g>
            </svg>
          </div>
          <div style={{ flex: 1 }}></div>
          <div className="header-item-sub-title">REAL-TIME</div>
          <div className="header-item-total">
            {totalCapacity} IB{" "}
            <span className="text-last-hour"> last hour</span>
          </div>
        </div>
      </div>
      <div className="no-margin">
        <ul className="no-margin" id="worker-list">
          {workerList.map((worker) => (
            <li key={worker.id} className="mb-2 worker no-margin">
              <DropDown worker={worker} changeToLocation={changeToLocation} onClickedMarker={handleMarkerClicked} clickedMarker={clickedMarker}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
