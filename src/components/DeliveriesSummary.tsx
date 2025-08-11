import React from "react";

interface Vehicle {
  id: number;
  lat: number;
  lng: number;
  outOfRoute: boolean;
}

interface Props {
  vehicles: Vehicle[];
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const DeliveriesSummary: React.FC<Props> = ({ vehicles, onSelectVehicle }) => {
  const openInGoogleMaps = (lat: number, lng: number) => {
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <h2 className="mb-4">Deliveries Summary</h2>
      <table className="table table-dark table-striped table-hover align-middle text-center w-100">
        <thead>
          <tr>
            <th>ID</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Out of Route</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v) => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.lat.toFixed(6)}</td>
              <td>{v.lng.toFixed(6)}</td>
              <td>
                {v.outOfRoute ? (
                  <span className="badge bg-danger">Yes</span>
                ) : (
                  <span className="badge bg-success">No</span>
                )}
              </td>
              <td>
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => onSelectVehicle(v)}
                >
                  View Here
                </button>
                <button
                  className="btn btn-sm btn-outline-light"
                  onClick={() => openInGoogleMaps(v.lat, v.lng)}>
                  Google Maps
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
