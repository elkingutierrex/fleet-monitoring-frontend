import React, { useState, useEffect } from "react";
import { Map, Marker } from "pigeon-maps";

interface Vehicle {
  id: number;
  lat: number;
  lng: number;
  outOfRoute: boolean;
}

interface Props {
  vehicle: Vehicle | null;
}

export default function MapView({ vehicle }: Props) {
  const [center, setCenter] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (vehicle && !isNaN(vehicle.lat) && !isNaN(vehicle.lng)) {
      setCenter([vehicle.lat, vehicle.lng]);
    }
  }, [vehicle]);

  if (!vehicle || isNaN(vehicle.lat) || isNaN(vehicle.lng)) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100 bg-secondary text-white">
        Select a valid vehicle to view its location
      </div>
    );
  }

  return (
    < div className="justify-content-center align-items-center h-100 bg-secondary text-white full-w" >
      <span className="center"> Localization of Vehicle ID: {vehicle.id}, 
      
      lng {vehicle.lng}, lat {vehicle.lat} 
      </span>
    
    <div style={{ height: "300px", width: "100%" }}>
      
      <Map
        center={center}
        zoom={14}
        onBoundsChanged={({ center }) => setCenter(center)}
        defaultCenter={[vehicle.lat, vehicle.lng]}
      >
        <Marker
          width={50}
          anchor={[vehicle.lat, vehicle.lng]}
          payload={vehicle.id}
          onClick={() => alert(`Vehicle ID: ${vehicle.id}`)}
        />
      </Map>
    </div>
    </div>
  );
}
