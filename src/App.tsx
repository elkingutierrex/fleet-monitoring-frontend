import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { DeliveriesSummary } from "./components/DeliveriesSummary";
import MapView from "./components/MapView";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

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
        <div className="container-x">
          <div className="w-full">
            { vehicles.length === 0 ? 
            <Loading /> :     
            
            <DeliveriesSummary
              vehicles={vehicles}
              onSelectVehicle={(v) => setSelectedVehicle(v)}
            />
          }
        
          </div>
          <div className="w-1/2">
            {selectedVehicle && <MapView vehicle={selectedVehicle} />}
          </div>
        </div>
    </div>
  );
}

export default App;
