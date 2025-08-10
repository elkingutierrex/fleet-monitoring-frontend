import React from 'react';

interface Vehicle {
  id: number;
  lat: number;
  lng: number;
  outOfRoute: boolean;
}

interface Props {
  vehicles: Vehicle[];
  onSelectVehicle: (id: number) => void;
}

export const DeliveriesSummary: React.FC<Props> = ({ vehicles, onSelectVehicle }) => {
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
              <td>
                <span>
                  {v.id}
                </span>
               
              </td>
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
                  onClick={() => onSelectVehicle(v.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                  </svg>
                  <span> View more...</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  );
};
