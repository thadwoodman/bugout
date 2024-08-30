
import './App.css';
import Map from 'react-map-gl';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bugout</h1>
        <div>
        <Map
          mapLib={()=>import('mapbox-gl')}
          initialViewState={{
            longitude: -100,
            latitude: 40,
            zoom: 3.5
          }}
            style={{width: 600, height: 400}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
