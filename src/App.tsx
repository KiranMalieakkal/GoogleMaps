import "./App.css";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function App() {
  const position = { lat: 53.54, lng: 10 };
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="mapContainer">
        <Map
          zoom={15}
          center={position}
          mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
        >
          <AdvancedMarker position={position}></AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}

export default App;
