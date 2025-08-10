import React from "react";

interface Vehicle {
  id: number;
  lat: number;
  lng: number;
  outOfRoute: boolean;
}

interface Props {
  vehicles: Vehicle[];
}

export const DeliveriesSummary: React.FC<Props> = ({ vehicles }) => {
  const openInGoogleMaps = (lat: number, lng: number) => {
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-white">Deliveries Summary</h2>
      <div className="table-responsive">
        <table className="table table-dark table-striped table-hover align-middle text-center">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Latitude</th>
              <th scope="col">Longitude</th>
              <th scope="col">Out of Route</th>
              <th scope="col">View localization</th>
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
                    className="btn btn-link text-decoration-none text-info fw-bold"
                    onClick={() => openInGoogleMaps(v.lat, v.lng)}
                  >
                    View on Google Maps
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
