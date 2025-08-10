import { useEffect, useState } from "react";
import { io } from "socket.io-client";

interface Vehicle {
  id: number;
  lat: number;
  lng: number;
}

export default function SocketTest() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const socket = io(import.meta.env.VITE_API_URL || "http://localhost:3000");

    socket.on("connect", () => {
      console.log("Conectado al backend vía WebSocket");
    });

    socket.on("vehiclesUpdate", (data: Vehicle[]) => {
      console.log("Datos recibidos del backend:", data);
      setVehicles(data);
    });

    socket.on("disconnect", () => {
      console.log("Desconectado del backend");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Datos recibidos del backend</h1>
      <pre>{JSON.stringify(vehicles, null, 2)}</pre>
    </div>
  );
}
