import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { DeliveriesSummary } from "./components/DeliveriesSummary";
import MapView from "./components/MapView";
import Navbar from "./components/Navbar";

interface Vehicle {
  id: number;
  lat: number;
  lng: number;
  outOfRoute: boolean;
}

const socket = io("http://localhost:3000"); // tu backend

function App() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  useEffect(() => {
    socket.on("vehicles", (data: Vehicle[]) => {
      setVehicles(data);
    });
  }, []);

  return (
    <div className="flex">
        <Navbar />
        <div className="row">

          <div className="container-x col-md-6 justify-content-center align-items-center">
            <div className="w-full">
              <DeliveriesSummary
                vehicles={vehicles}
                onSelectVehicle={(v) => setSelectedVehicle(v)}
              />
            </div>
          </div>

          <div className="container-x col-md-6 justify-content-center align-items-center">
          <div className="w-1-2">
              <MapView vehicle={selectedVehicle} />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
