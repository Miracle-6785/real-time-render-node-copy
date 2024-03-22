import React from "react";
import "../../css/WorkerNavbar.css";

function activeTab(event) {
  const target = event.target;
  const siblings = target.parentNode.children;

  // Loop through siblings to remove "active" class
  for (let sibling of siblings) {
    sibling.classList.remove("active");
  }

  // Add "active" class to the clicked element
  target.classList.add("active");
}

const NavBarWorkerDetail = ({
  handleWorkerDetailClick,
  handleTaskLogClick,
  onClickedMarker,
  clickedMarker
}) => {
  return (
    <div className="navbar-worker">
      <div
        className="item-tab"
        onClick={(event) => {
          handleWorkerDetailClick();
          activeTab(event);
        }}
      >
        Capability
      </div>
      <div
        className="item-tab"
        onClick={(event) => {
          handleTaskLogClick();
          activeTab(event);
        }}
      >
        Task logs
      </div>
    </div>
  );
};

export default NavBarWorkerDetail;
