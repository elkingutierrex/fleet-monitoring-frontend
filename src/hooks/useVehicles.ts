import { useEffect, useState } from "react";
import { socket } from "../api/socket";

export interface Vehicle {
  id: string;
  lat: number;
  lng: number;
  status: "OK" | "FALLA";
}

export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    socket.on("vehicle-positions", (data: Vehicle[]) => {
      setVehicles(data);
    });

    return () => {
      socket.off("vehicle-positions");
    };
  }, []);

  return vehicles;
}
