import React, { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import WorkerOverview from "./WorkerOverview";
import WorkerDetail from "./WorkerDetail";
import WorkerDetailTaskLog from "./WorkerDetailTaskLog";
import NavBarWorkerDetail from "./NavBarWorkerDetail";
import "../../css/WorkerDetail.css";
import "../../css/SideBar.css";

export default function DropDown({ worker, changeToLocation, onClickedMarker, clickedMarker, setClickedMarker }) {
  const [showWorkerDetail, setShowWorkerDetail] = useState(true);
  const [showTaskLog, setShowTaskLog] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleMarkerClicked = (clickedMarker) => {
    setClickedMarker(clickedMarker);
  };

  const handleWorkerDetailClick = () => {
    setShowWorkerDetail(true);
    setShowTaskLog(false);
  };

  const handleTaskLogClick = () => {
    setShowWorkerDetail(false);
    setShowTaskLog(true);
  };

  return (
    <Menu
      as="div"
      className="relative inline-block text-left fit-parent no-margin"
    >
      <div
        className="fit-parent full-data"
        onClick={() => {
          setShowContent((prevState) => !prevState);
          if (!showContent) {
            changeToLocation(worker.longitude, worker.latitude, 18);
          } else {
            changeToLocation(worker.longitude, worker.latitude, 3);
          }
        }}
      >
        <WorkerOverview PCname={worker.pcname} capacity={worker.capacity} />
        <ChevronDownIcon
          className="-mr-1 h-5 w-5 text-gray-400 absolute right-0 top-4"
          aria-hidden="true"
        />
      </div>

      {showContent && (
        <div id="full-data">
          <NavBarWorkerDetail
            handleWorkerDetailClick={handleWorkerDetailClick}
            handleTaskLogClick={handleTaskLogClick}
            onClickedMarker={handleMarkerClicked}
            clickedMarker={clickedMarker}
          />
          {showWorkerDetail && <WorkerDetail workerDetail={worker} />}
          {showTaskLog && <WorkerDetailTaskLog workerPcName={worker.pcname} />}
        </div>
      )}
    </Menu>
  );
}
