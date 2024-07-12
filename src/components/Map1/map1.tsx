import { useState } from "react";
// import "../../App.css";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function Map1() {
  const position = { lat: 53.54, lng: 10 };
  const [open, setOpen] = useState(false);
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="mapContainer">
        <Map
          defaultZoom={15}
          defaultCenter={position}
          mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
        >
          <AdvancedMarker
            position={position}
            onClick={() => {
              setOpen(true);
            }}
          >
            <Pin
              background={"red"}
              borderColor={"green"}
              glyphColor={"black"}
            />
          </AdvancedMarker>
          {open && (
            <InfoWindow
              position={position}
              onCloseClick={() => {
                setOpen(false);
              }}
            >
              <p>I am in Hamburg</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}

export default Map1;
