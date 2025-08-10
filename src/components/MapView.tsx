import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface Vehicle {
  id: number;
  lat: number;
  lng: number;
  outOfRoute: boolean;
}

interface Props {
  vehicle: Vehicle;
}

const MapView: React.FC<Props> = ({ vehicle }) => {
  return (
    <MapContainer
      center={[vehicle.lat, vehicle.lng]}
      zoom={14}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[vehicle.lat, vehicle.lng]}>
        <Popup>
          Vehicle ID: {vehicle.id}
          <br />
          Out of Route: {vehicle.outOfRoute ? "Yes" : "No"}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
