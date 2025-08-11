import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DeliveriesSummary } from "./DeliveriesSummary";

const vehicles = [
  { id: 1, lat: 10.123456, lng: 20.654321, outOfRoute: true },
  { id: 2, lat: 15.654321, lng: 25.123456, outOfRoute: false },
];

describe("DeliveriesSummary", () => {
  it("renders title and table with vehicles", () => {
    render(<DeliveriesSummary vehicles={vehicles} onSelectVehicle={() => {}} />);

    expect(screen.getByText(/Deliveries Summary/i)).toBeInTheDocument();


    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();


    expect(screen.getByText("Yes")).toBeInTheDocument();
    expect(screen.getByText("No")).toBeInTheDocument();
  });

  it("calls onSelectVehicle with correct vehicle when 'View Here' button is clicked", () => {
    const onSelectVehicle = jest.fn();

    render(<DeliveriesSummary vehicles={vehicles} onSelectVehicle={onSelectVehicle} />);

    const buttons = screen.getAllByText("View Here");


    fireEvent.click(buttons[0]);

    expect(onSelectVehicle).toHaveBeenCalledTimes(1);
    expect(onSelectVehicle).toHaveBeenCalledWith(vehicles[0]);
  });

  it("opens Google Maps with correct URL when 'Google Maps' button is clicked", () => {

    const openSpy = jest.spyOn(window, "open").mockImplementation(() => null);

    render(<DeliveriesSummary vehicles={vehicles} onSelectVehicle={() => {}} />);

    const buttons = screen.getAllByText("Google Maps");

    fireEvent.click(buttons[1]); 

    expect(openSpy).toHaveBeenCalledWith(
      `https://www.google.com/maps?q=${vehicles[1].lat},${vehicles[1].lng}`,
      "_blank"
    );

    openSpy.mockRestore();
  });
});
