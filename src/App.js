import React, { useState } from "react";
import PointSelector from "./components/Travelling/PointSelector";
import DateSelector from "./components/Travelling/DateSelector";
// import { vehiclesData } from "./data/Data";
import { vehiclesData } from "./components/data/Data";

// import VehicleList from "./components/Travaling/VehilesList";
import VehicleList from "./components/Travelling/VehilesList";
import "./App.css";

const App = () => {
  const [pointA, setPointA] = useState("");
  const [pointB, setPointB] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [errorMsg, SetErrorMsg] = useState("");
  const [availableVehicles, setAvailableVehicles] = useState([]);

  const handlePointASelection = (selectedPoint) => {
    setPointA(selectedPoint);
  };

  const handlePointBSelection = (selectedPoint) => {
    setPointB(selectedPoint);
  };

  const handleDateSelection = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  const handleSearchButtonClick = async () => {
    if (pointA === "" || pointB === "" || selectedDate === "") {
      SetErrorMsg("Enter the fields");
    } else {
      SetErrorMsg("");
      const filteredVehicles = vehiclesData.filter(
        (vehicle) => vehicle.from === pointA && vehicle.to === pointB
      );
      setAvailableVehicles(filteredVehicles);
    }
  };

  return (
    <div className="bg-container">
      <div className="container">
        <PointSelector
          selectedPoint={pointA}
          onPointSelect={handlePointASelection}
          label="From"
        />
        <PointSelector
          selectedPoint={pointB}
          onPointSelect={handlePointBSelection}
          label="To"
        />
        <DateSelector
          selectedDate={selectedDate}
          onDateSelect={handleDateSelection}
        />
        <button onClick={handleSearchButtonClick}>Search</button>
      </div>
      {errorMsg !== "" && (
        <p className="error-message">{errorMsg}</p>
      )}
      {availableVehicles.length !== 0 && (
        <div className="vehicle-list-container" >
          <VehicleList vehicles={availableVehicles}  />
        </div>
      )}
    </div>
  );
};

export default App;