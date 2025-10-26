import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function App() {
  const [tab, setTab] = useState("tracker");
  const [mode, setMode] = useState("travel");
  const [distance, setDistance] = useState("");
  const [vehicleType, setVehicleType] = useState("car");
  const [productType, setProductType] = useState("laptop");
  const [quantity, setQuantity] = useState(1);
  const [kwh, setKwh] = useState("");
  const [result, setResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("footprintHistory");
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("footprintHistory", JSON.stringify(history));
  }, [history]);

  const calculate = async () => {
    try {
      let response;
      if (mode === "travel") {
        response = await axios.post("http://localhost:5000/api/calculate/travel", {
          distance: Number(distance),
          vehicleType,
        });
      } else if (mode === "product") {
        response = await axios.post("http://localhost:5000/api/calculate/product", {
          productType,
          quantity: Number(quantity),
        });
      } else if (mode === "electricity") {
        response = await axios.post("http://localhost:5000/api/calculate/electricity", {
          kwh: Number(kwh),
        });
      }

      setResult(response.data.carbonFootprint);
      setSuggestions(response.data.suggestions);

      const newEntry = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        type: mode,
        item: mode === "travel" ? vehicleType : mode === "product" ? productType : "electricity",
        value: response.data.carbonFootprint,
      };
      setHistory((prev) => [newEntry, ...prev]);
    } catch {
      alert("Error connecting to backend");
    }
  };

  const resetHistory = () => {
    if (window.confirm("Reset all data?")) {
      setHistory([]);
      localStorage.removeItem("footprintHistory");
    }
  };

  const dailyTotals = Object.values(
    history.reduce((acc, item) => {
      acc[item.date] = acc[item.date] || { date: item.date, total: 0 };
      acc[item.date].total += item.value;
      return acc;
    }, {})
  );

  const totalFootprint = history.reduce((sum, i) => sum + i.value, 0);
  const treesCutEquivalent = totalFootprint / 21.77;
  const COLORS = ["#4caf50", "#81c784", "#a5d6a7"];

  const generatePDF = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history, totalFootprint, treesCutEquivalent }),
      });
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "carbon_report.pdf";
      a.click();
    } catch {
      alert("Failed to generate report");
    }
  };

  return (
    <div className="App">
      <h1>🌎 Carbon Footprint Tracker</h1>

      {/* Tabs */}
      <div className="tabs">
        {["tracker", "history", "stats", "info"].map((t) => (
          <button key={t} className={tab === t ? "active" : ""} onClick={() => setTab(t)}>
            {t === "tracker" && "🧮 Tracker"}
            {t === "history" && "📊 History"}
            {t === "stats" && "🌍 Stats"}
            {t === "info" && "ℹ️ Info"}
          </button>
        ))}
      </div>

      {/* TRACKER */}
      {tab === "tracker" && (
        <div className="card">
          <div className="mode-toggle">
            <button className={mode === "travel" ? "active" : ""} onClick={() => setMode("travel")}>
              🚗 Travel
            </button>
            <button className={mode === "product" ? "active" : ""} onClick={() => setMode("product")}>
              🛍️ Shopping
            </button>
            <button className={mode === "electricity" ? "active" : ""} onClick={() => setMode("electricity")}>
              ⚡ Electricity
            </button>
          </div>

          {mode === "travel" && (
            <>
              <label>Distance (km):</label>
              <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />
              <label>Vehicle:</label>
              <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
                <option value="car">Car</option>
                <option value="bus">Bus</option>
                <option value="bike">Bike</option>
                <option value="train">Train</option>
              </select>
            </>
          )}

          {mode === "product" && (
            <>
              <label>Product:</label>
              <select value={productType} onChange={(e) => setProductType(e.target.value)}>
                <option value="laptop">Laptop</option>
                <option value="smartphone">Smartphone</option>
                <option value="tshirt">T-shirt</option>
                <option value="jeans">Jeans</option>
                <option value="shoes">Shoes</option>
                <option value="book">Book</option>
              </select>
              <label>Quantity:</label>
              <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </>
          )}

          {mode === "electricity" && (
            <>
              <label>Electricity (kWh):</label>
              <input type="number" value={kwh} onChange={(e) => setKwh(e.target.value)} />
              <p>* Based on India average: 0.82 kg CO₂ per kWh</p>
            </>
          )}

          <button onClick={calculate}>Calculate</button>

          {result !== null && (
            <div className="result">
              <h3>Result: {result.toFixed(2)} kg CO₂</h3>
              <h4>🌿 Suggestions:</h4>
              <ul>{suggestions.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
          )}
        </div>
      )}

      {/* HISTORY */}
      {tab === "history" && (
        <div className="card">
          <h2>📊 History</h2>
          <button className="reset-btn" onClick={resetHistory}>🗑️ Reset</button>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyTotals}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" /><YAxis /><Tooltip />
              <Bar dataKey="total" fill="#4caf50" />
            </BarChart>
          </ResponsiveContainer>
          <ul className="history-list">
            {history.map((h) => (
              <li key={h.id}><strong>{h.item}</strong> — {h.value.toFixed(2)} kg CO₂ ({h.date})</li>
            ))}
          </ul>
        </div>
      )}

      {/* STATS */}
      {tab === "stats" && (
        <div className="card">
          <h2>🌍 Daily Stats</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={dailyTotals} dataKey="total" nameKey="date" cx="50%" cy="50%" outerRadius={100}>
                {dailyTotals.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <h3>Total: {totalFootprint.toFixed(2)} kg CO₂</h3>
          <p>Equivalent to {treesCutEquivalent.toFixed(1)} trees 🌲</p>
          <button onClick={generatePDF}>🧾 Generate PDF Report</button>
        </div>
      )}

      {/* INFO */}
      {tab === "info" && (
        <div className="card info-tab">
          <h2>ℹ️ Facts</h2>
          <ul>
            <li>🌍 Global average footprint: 4.7 tons CO₂/year</li>
            <li>✅ Safe limit: 2 tons CO₂/year</li>
            <li>⚡ India electricity: 0.82 kg CO₂/kWh</li>
            <li>🚗 Car: 0.21 kg/km</li>
            <li>🧥 T-shirt: 10 kg CO₂</li>
            <li>🌳 Tree absorbs 21.77 kg CO₂/year</li>
          </ul>
          <h3>Sources</h3>
          <p>CEA India (2024), IPCC AR6, World Bank, WWF, EPA</p>
        </div>
      )}
    </div>
  );
}

export default App;
