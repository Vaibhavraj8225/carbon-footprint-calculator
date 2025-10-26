import React, { useState } from "react";
import axios from "axios";

function TravelForm({ onAddRecord }) {
  const [distance, setDistance] = useState("");
  const [vehicleType, setVehicleType] = useState("car");
  const [result, setResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const calculate = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/calculate/travel", {
        distance: Number(distance),
        vehicleType,
      });

      setResult(response.data.carbonFootprint);
      setSuggestions(response.data.suggestions);
      onAddRecord({
        type: "Travel",
        details: `${vehicleType} for ${distance} km`,
        value: response.data.carbonFootprint,
      });
    } catch {
      alert("Error connecting to backend");
    }
  };

  return (
    <div>
      <h2>🚗 Travel Footprint</h2>
      <label>Distance (km):</label>
      <input
        type="number"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />
      <label>Vehicle Type:</label>
      <select
        value={vehicleType}
        onChange={(e) => setVehicleType(e.target.value)}
      >
        <option value="car">Car</option>
        <option value="bus">Bus</option>
        <option value="bike">Bike</option>
        <option value="train">Train</option>
      </select>
      <button onClick={calculate}>Calculate</button>

      {result && (
        <div className="result">
          <h3>{result.toFixed(2)} kg CO₂</h3>
          <ul>
            {suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TravelForm;
