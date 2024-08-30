
import React from 'react';
import './App.css';
import Map from 'react-map-gl';

const MAPBOX_TOKEN = "pk.eyJ1IjoibWFwcHl0aGFkIiwiYSI6ImNtMGZ4N3RtZjA5NWEyanB2OHJhcHRybHIifQ.4yNVgYcfE1-cxFzrF3QtGA"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bugout</h1>
        <div>
        <Map
          mapboxAccessToken={MAPBOX_TOKEN}
          initialViewState={{
            longitude: -100,
            latitude: 40,
            zoom: 3.5
          }}
          style={{width: 600, height: 400}}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
