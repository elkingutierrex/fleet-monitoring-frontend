import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MapView from "./MapView";

const validVehicle = {
  id: 1,
  lat: 10.123456,
  lng: 20.654321,
  outOfRoute: false,
};

const invalidVehicle = {
  id: 2,
  lat: NaN,
  lng: NaN,
  outOfRoute: false,
};

describe("MapView component", () => {
  it("shows message when vehicle is null", () => {
    render(<MapView vehicle={null} />);
    expect(
      screen.getByText(/select a valid vehicle to view its location/i)
    ).toBeInTheDocument();
  });

  it("shows message when vehicle has invalid lat/lng", () => {
    render(<MapView vehicle={invalidVehicle} />);
    expect(
      screen.getByText(/select a valid vehicle to view its location/i)
    ).toBeInTheDocument();
  });

  it("renders map and vehicle info when valid vehicle is provided", () => {
    render(<MapView vehicle={validVehicle} />);
    expect(
      screen.getByText(new RegExp(`localization of vehicle id: ${validVehicle.id}`, "i"))
    ).toBeInTheDocument();


    expect(screen.getByText(new RegExp(`lng ${validVehicle.lng}`, "i"))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`lat ${validVehicle.lat}`, "i"))).toBeInTheDocument();


  });
});
