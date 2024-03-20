import React from "react";
import "../css/DownloadButton.css";
import DownloadFile from "../../data/Setup.msi"; // Importing the file to be downloaded

const DownloadButton = () => {
  return (
    <nav>
      <div style={{ flex: "1 1 0%" }}>
        {/* Spinner */}
        <span className="api-spinner">
          <svg className="spinner" viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="5"
            ></circle>
          </svg>
        </span>

        {/* Download button */}
        <button className="action-item">
          {/* SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="25"
            viewBox="0 0 23 25"
            fill="none"
          >
            {/* SVG path */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5017 9.31818C12.5017 8.76589 12.054 8.31818 11.5017 8.31818C10.9494 8.31818 10.5017 8.76589 10.5017 9.31818V11.4563H8.36363C7.81135 11.4563 7.36363 11.904 7.36363 12.4563C7.36363 13.0086 7.81135 13.4563 8.36363 13.4563H10.5017V15.5944C10.5017 16.1467 10.9494 16.5944 11.5017 16.5944C12.054 16.5944 12.5017 16.1467 12.5017 15.5944V13.4563H14.6399C15.1921 13.4563 15.6399 13.0086 15.6399 12.4563C15.6399 11.904 15.1921 11.4563 14.6399 11.4563H12.5017V9.31818Z"
              fill="#AFCAFF"
            ></path>
            {/* SVG rectangle */}
            <rect
              x="1"
              y="1.95454"
              width="21"
              height="21"
              rx="10.5"
              stroke="#AFCAFF"
              strokeWidth="2"
            ></rect>
          </svg>
          {/* Download button text */}
          <div className="action-item-text">
            {/* Download link */}
            <a href={DownloadFile} target="blank" download>
              Node Register
            </a>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default DownloadButton;
