import React from "react";
// import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import DownloadButton from "./DownloadButton";

function activeNav(event) {
  // Remove the "router-link-active" class from all links first
  const links = document.querySelectorAll("a.router-link-active");
  links.forEach((link) => link.classList.remove("router-link-active"));

  // Add the "router-link-active" class to the clicked link
  event.target.classList.add("router-link-active");

  // Set aria-current="page" for the clicked link
  event.target.setAttribute("aria-current", "page");
}
export default function Navbar() {
  return (
    <header className="app-header">
      <a href="/" className="navbar-brand">
        {/* <!-- <i className="fa fa-bars"></i> --> */}
        <div className="text-explorer"> KryptonX </div>
      </a>
      <nav>
        <ul>
          <li>
            <a href="/workers" onClick={activeNav}>
              <div className="border-active"></div>
              <div className="header-item-content">
                <span>MAP</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/jobs" onClick={activeNav}>
              <div className="border-active"></div>
              <div className="header-item-content">
                <span>RUNNING JOBS</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/last-rendered" onClick={activeNav}>
              <div className="border-active"></div>
              <div className="header-item-content">
                <span>LAST RENDERED</span>
              </div>
            </a>
          </li>
        </ul>
      </nav>
      <DownloadButton></DownloadButton>
    </header>
  );
}
