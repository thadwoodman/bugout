import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "react-map-gl"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Map
        mapboxAccessToken="pk.eyJ1IjoibWFwcHl0aGFkIiwiYSI6ImNtMGZ4N3RtZjA5NWEyanB2OHJhcHRybHIifQ.4yNVgYcfE1-cxFzrF3QtGA"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{width: 600, height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
      </header>
    </div>
  );
}

export default App;
