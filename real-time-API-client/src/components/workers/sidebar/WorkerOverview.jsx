import React from "react";
import "../../css/WorkerOverview.css";

function basicDataActive (target) {
  console.log("Basic Data");
  if (target.classList.contains("basic-data")) {
    target.classList.add("basic-data-active");
    target.classList.remove("basic-data");
    console.log("added active");
  } else {
    target.classList.add("basic-data");
    target.classList.remove("basic-data-active");
    console.log("removed active");
  }
}


const WorkerOverview = ({ PCname, capacity }) => {
  return (
    <div className="d-flex worker-item">
      <div className="basic-data" onClick={(event) => {basicDataActive(event.target)}}>
        <div className="d-flex worker-basic-info">
          <div className="worker-name">{PCname}</div>
          <div className="d-flex worker-capability">
            <div className="capa-text" style={{ textAlign: "left" }}>
              Capability
            </div>
            <div className="d-flex capability" style={{ textAlign: "left" }}>
              {capacity} IB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerOverview;
