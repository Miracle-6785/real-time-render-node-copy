import React from "react";
import "../index.css";
// import Leaflet from "./Leaflet";
import Navbar from "./navbar/Navbar";
// import SideBar from "./SideBar";
import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./workers/Main";
import LastImageRender from "../components/last-rendered/LastImageRender";
import TaskLog from "./jobs/tasklogs/TaskLog";
// import TaskLog from "./TaskLog";

export default function App() {
  // const [lng, setLng] = useState(null);
  // const [lat, setLat] = useState(null);

  // function changeToLocation(new_lng, new_lat) {
  //   setLng(new_lng);
  //   setLat(new_lat);
  // }

  return (
    <React.StrictMode>
      <Router>
        <Navbar className={"navbar"} />
        {/* <div className="app"></div> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/workers" element={<Main />} />
          <Route path="/jobs" element={<TaskLog />} />
          <Route path="/last-rendered" element={<LastImageRender />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
