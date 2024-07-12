import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import trees from "../../assets/trees";

import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";
import { useState } from "react";

export default function Intro() {
  const position = { lat: 43.64, lng: -79.41 };
  return (
    <div className="mapContainer">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map
          defaultZoom={10}
          scrollwheel={true}
          defaultCenter={position}
          gestureHandling="auto"
          mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
        >
          <Markers points={trees} />
        </Map>
      </APIProvider>
    </div>
  );
}

type point = google.maps.LatLngLiteral & { key: string };
type Props = { points: point[] };

const Markers = ({ points }: Props) => {
  // const [open, setOpen] = useState(false);

  const markers = points.map((point) => {
    return <Marker point={point} />;
  });
  return (
    <>
      {markers}
      {/* {points.map((point) => {
        return (
          <>
            <AdvancedMarker
              position={point}
              onClick={() => {
                setOpen(true);
              }}
            >
              <span style={{ fontSize: "2rem" }}>🌳</span>
            </AdvancedMarker>
            {open && (
              <InfoWindow
                position={point}
                onCloseClick={() => {
                  setOpen(false);
                }}
              >
                <p>I am a tree in {point.lat}</p>
              </InfoWindow>
            )}
          </>
        );
      })} */}
    </>
  );
};

type MarkerProps = {
  point: point;
};

const Marker = ({ point }: MarkerProps) => {
  function handleclick() {
    console.log("I am a tree in" + point.lat);
  }
  const [open, setOpen] = useState(false);
  return (
    <>
      <AdvancedMarker
        position={point}
        onClick={() => {
          setOpen(true);
        }}
      >
        <span style={{ fontSize: "2rem" }}>🌳</span>
      </AdvancedMarker>
      {open && (
        <InfoWindow
          position={point}
          onCloseClick={() => {
            setOpen(false);
          }}
        >
          <p onClick={handleclick}>I am a tree in {point.lat + point.lng}</p>
        </InfoWindow>
      )}
    </>
  );
};
