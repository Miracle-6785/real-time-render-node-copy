import { useState, useEffect } from "react";
import * as L from "leaflet";
import { useLeaflet } from "react-leaflet";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

const markerClusters = L.markerClusterGroup({
  spiderfyOnMaxZoom: false,
  disableClusteringAtZoom: 21,
  iconCreateFunction: function (cluster) {
    return L.divIcon({
      html: '<div class="mycluster">' +
            '<div class="pulse"></div>' +
            '<div>' + cluster.getChildCount() + '</div>' +
            '</div>',
      className: 'mycluster',
      iconSize: L.point(cluster.getChildCount()*5, cluster.getChildCount()*5)
    });
  }
});
export { markerClusters };

const MarkerCluster = ({ markers, addMarkers, onMoveEnd, setDisplayedMarkers, onMarkerClicked, new_lat, new_lng, new_zoom }) => {
  const { map } = useLeaflet();

  function handleMarkerClick (e) {
    const clickedMarker = e.target;
    // setClickedMarker(clickedMarker);
    onMarkerClicked(clickedMarker);
    // console.log(clickedMarker);
  }

  if (new_lat !== null && new_lng !== null) {
    map.flyTo(new L.latLng(new_lat, new_lng), new_zoom);
  }

  useEffect(() => {
    markerClusters.clearLayers();
    map.addLayer(markerClusters); // Add marker cluster group to the map


    // Add markers to the marker cluster group
    markers.forEach(({ position }) => {
      L.circleMarker(new L.LatLng(position.lat, position.lng), {
        radius: 10,
        stroke: false,
        fillOpacity: 1,
        className: 'mycluster'
      }).addTo(markerClusters).on('click', handleMarkerClick);
    });

    // Cleanup function to remove the marker cluster group when component unmounts
    return () => {
      map.removeLayer(markerClusters);
    };
  }, [markers, map, onMarkerClicked]);

  // Get all markers currently displayed on the map
  function getDisplayedMarkers() {
    var displayedMarkers = [];
    var mapBounds = map.getBounds();

    markerClusters.eachLayer(function (marker) {
      if (mapBounds.contains(marker.getLatLng())) {
        displayedMarkers.push(marker);
      }
    });

    return displayedMarkers;
  };

  const handleMoveEnd = () => {
    const displayedMarkers = getDisplayedMarkers();
    setDisplayedMarkers(displayedMarkers); // Update displayed markers in Leaflet component
    onMoveEnd(displayedMarkers); // Pass displayed markers to Main component
  };
  
  useEffect(() => {

    map.on("moveend", handleMoveEnd);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      map.off("moveend", handleMoveEnd);
    };
  }, [map, addMarkers, onMoveEnd, setDisplayedMarkers]);

  return null;
};

export default MarkerCluster;
