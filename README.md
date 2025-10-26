# 🌍 Carbon Footprint Tracker

A full-stack (React + Node.js) web app that helps users track and reduce their carbon footprint.

## 🚀 Features
- Vehicle-based carbon emission calculator
- Electricity CO₂ calculator (India)
- Product CO₂ calculator
- Daily stats and pie charts
- Reset history & PDF report generation

## 🛠️ Tech Stack
- **Frontend:** React, Recharts, Axios
- **Backend:** Node.js, Express, PDFKit

## ▶️ How to Run
1. Start the backend:
   ```bash
   cd backend
   node server.js

<<<<<<< HEAD
2.
You said:
I am creating college project which explicitly state the use of both react and nodejs. I want create a simple carbon footprint tracker and i want to access it in my friends laptop in my college so i also want it to be portable I have created a folder carbon-footprint-tracker in desktop now guide me through each step in beginner friendly manner with code and instructions.
ChatGPT said:
Perfect — this is a great college project idea! 🌱
Let’s build your Carbon Footprint Tracker step-by-step using React (frontend) and Node.js with Express (backend).
I’ll keep it beginner-friendly and make sure it’s portable, so you can run it easily on your friend’s laptop without special setup.

🧭 Overview
We’ll create a full-stack app:

Frontend (React): User interface (form to input data, show results)

Backend (Node.js + Express): Handles calculations and stores data

Portable: Runs on localhost, only needs Node.js installed

🗂 Folder Setup
You already have a folder:

Desktop/
└── carbon-footprint-tracker/
Now let’s build the project inside it.

⚙️ Step 1: Initialize the Project
Open a terminal (or PowerShell) and run:

cd Desktop/carbon-footprint-tracker
npm init -y
This creates a package.json file for managing dependencies.

🌐 Step 2: Create Backend (Node.js + Express)
Create a folder for the backend:

mkdir backend
cd backend
npm init -y
npm install express cors
Then create a file:
📄 server.js inside the backend folder.

Paste this code:

// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// A simple route to calculate carbon footprint
app.post("/api/calculate", (req, res) => {
  const { distance, vehicleType } = req.body;

  // Simple emission factors (kg CO2 per km)
  const emissionFactors = {
    car: 0.21,
    bus: 0.1,
    bike: 0.05,
    train: 0.06,
  };

  const factor = emissionFactors[vehicleType] || 0.2;
  const carbonFootprint = distance * factor;

  res.json({ carbonFootprint });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
To test it:

node server.js
You should see:

✅ Server running on http://localhost:5000
⚛️ Step 3: Create React Frontend
Now go back to the main folder:

cd ..
npx create-react-app frontend
This will create a React app inside frontend/.

After it finishes:

cd frontend
npm install axios
💻 Step 4: Build the Frontend
Open src/App.js and replace everything with:

// frontend/src/App.js
import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [distance, setDistance] = useState("");
  const [vehicleType, setVehicleType] = useState("car");
  const [result, setResult] = useState(null);

  const calculateFootprint = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/calculate", {
        distance: Number(distance),
        vehicleType,
      });
      setResult(response.data.carbonFootprint);
    } catch (error) {
      alert("Error connecting to backend");
    }
  };

  return (
    <div className="App">
      <h1>🌍 Carbon Footprint Tracker</h1>

      <div className="card">
        <label>Distance (km):</label>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          placeholder="Enter distance"
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

        <button onClick={calculateFootprint}>Calculate</button>

        {result !== null && (
          <h3>Your Carbon Footprint: {result.toFixed(2)} kg CO₂</h3>
        )}
      </div>
    </div>
  );
}

export default App;
Now open src/App.css and make it look nice:

.App {
  text-align: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
}

.card {
  display: inline-block;
  padding: 20px;
  border-radius: 10px;
  background-color: #f0f4f7;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
}

input,
select,
button {
  display: block;
  margin: 10px auto;
  padding: 8px;
  font-size: 16px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 6px;
}

button:hover {
  background-color: #45a049;
}
🚀 Step 5: Run the Project
Now open two terminals:

Terminal 1 (Backend):

cd Desktop/carbon-footprint-tracker/backend
node server.js
Terminal 2 (Frontend):

cd Desktop/carbon-footprint-tracker/frontend
npm start
Then visit 👉 http://localhost:3000

You’ll see your Carbon Footprint Tracker app 🎉

💾 Step 6: Make It Portable
To use it on another laptop:

Copy the whole carbon-footprint-tracker folder.

Make sure Node.js is installed on that laptop.

Run:

cd backend
npm install
node server.js
In another terminal:

cd frontend
npm install
npm start
That’s it! It will run the same way.

🌱 Optional: Add Features Later
Once the basics work, you can enhance it with:

🌡 Save history of calculations (in a local JSON or MongoDB)

📊 Display graphs with Recharts

🧮 Include more activities (electricity, flights, food, etc.)

💾 Deploy to free service (Render, Netlify, etc.)

Would you like me to add database support (like saving results) next, or keep it frontend + backend only?

You said:
Okay so app has a feature of selecting a vehicle and disstance and calculate the carbon footprint through it i want to add more features to atleast make it look intermediate level project like if want to buy something tell them its carbon footprint and suggest ways to and work execise or routines to reduce carbon footprint
ChatGPT said:
Excellent idea 👏 — adding shopping impact and personalized reduction suggestions will make your Carbon Footprint Tracker feel like a real-world sustainability tool 🌱

Let’s level up your project from basic → intermediate, while keeping it fully portable.

🌍 New Plan for Intermediate Carbon Footprint Tracker
✅ Current Features
User selects a vehicle type and distance

Backend calculates CO₂ footprint for travel

💡 New Features to Add
Feature	Description
🛍️ Product carbon footprint	User can enter a product they’re buying (like “Laptop” or “T-shirt”) and get estimated emissions.
🧘 Lifestyle suggestions	Based on user footprint, suggest eco-friendly actions (like walking, cycling, saving energy).
📊 Summary Dashboard (optional later)	Show total emissions (travel + purchases) and how much user saved.
⚙️ Step 1: Update Backend (server.js)
Let’s enhance your backend to handle multiple categories (travel + products).

Open backend/server.js and replace the old code with this:

// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Emission factors
const emissionFactors = {
  travel: {
    car: 0.21,
    bus: 0.1,
    bike: 0.05,
    train: 0.06,
  },
  product: {
    laptop: 200, // kg CO2 per item (manufacturing + transport)
    smartphone: 70,
    tshirt: 10,
    jeans: 30,
    shoes: 15,
    book: 5,
  },
};

// Helper: Suggest eco-friendly actions
function getSuggestions(totalCO2) {
  if (totalCO2 < 50) {
    return [
      "Great job! Your footprint is quite low 🎉",
      "Keep walking or cycling for short trips.",
    ];
  } else if (totalCO2 < 200) {
    return [
      "Consider using public transport more often.",
      "Buy energy-efficient or second-hand products.",
    ];
  } else {
    return [
      "Try reducing long car trips — use carpooling or buses.",
      "Limit new gadget purchases; repair or reuse instead.",
      "Do regular walks or home workouts instead of driving short distances.",
    ];
  }
}

// Route: Calculate travel emissions
app.post("/api/calculate/travel", (req, res) => {
  const { distance, vehicleType } = req.body;
  const factor = emissionFactors.travel[vehicleType] || 0.2;
  const carbonFootprint = distance * factor;
  const suggestions = getSuggestions(carbonFootprint);
  res.json({ type: "travel", carbonFootprint, suggestions });
});

// Route: Calculate product emissions
app.post("/api/calculate/product", (req, res) => {
  const { productType, quantity } = req.body;
  const factor = emissionFactors.product[productType] || 20;
  const carbonFootprint = quantity * factor;
  const suggestions = getSuggestions(carbonFootprint);
  res.json({ type: "product", carbonFootprint, suggestions });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
⚛️ Step 2: Update Frontend (React)
Now open your frontend/src/App.js and replace it with this code 👇

import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [mode, setMode] = useState("travel");
  const [distance, setDistance] = useState("");
  const [vehicleType, setVehicleType] = useState("car");
  const [productType, setProductType] = useState("laptop");
  const [quantity, setQuantity] = useState(1);
  const [result, setResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const calculate = async () => {
    try {
      let response;
      if (mode === "travel") {
        response = await axios.post("http://localhost:5000/api/calculate/travel", {
          distance: Number(distance),
          vehicleType,
        });
      } else {
        response = await axios.post("http://localhost:5000/api/calculate/product", {
          productType,
          quantity: Number(quantity),
        });
      }

      setResult(response.data.carbonFootprint);
      setSuggestions(response.data.suggestions);
    } catch (error) {
      alert("Error connecting to backend");
    }
  };

  return (
    <div className="App">
      <h1>🌍 Carbon Footprint Tracker</h1>

      <div className="card">
        <div className="mode-toggle">
          <button
            className={mode === "travel" ? "active" : ""}
            onClick={() => setMode("travel")}
          >
            🚗 Travel
          </button>
          <button
            className={mode === "product" ? "active" : ""}
            onClick={() => setMode("product")}
          >
            🛍️ Shopping
          </button>
        </div>

        {mode === "travel" ? (
          <>
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
          </>
        ) : (
          <>
            <label>Product Type:</label>
            <select
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option value="laptop">Laptop</option>
              <option value="smartphone">Smartphone</option>
              <option value="tshirt">T-shirt</option>
              <option value="jeans">Jeans</option>
              <option value="shoes">Shoes</option>
              <option value="book">Book</option>
            </select>

            <label>Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </>
        )}

        <button onClick={calculate}>Calculate</button>

        {result !== null && (
          <div className="result">
            <h3>Estimated Footprint: {result.toFixed(2)} kg CO₂</h3>
            <h4>🌿 Suggestions:</h4>
            <ul>
              {suggestions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
Update App.css for a nice layout:
.App {
  text-align: center;
  margin-top: 40px;
  font-family: "Segoe UI", sans-serif;
  background-color: #eaf4f4;
  height: 100vh;
}

.card {
  background-color: #fff;
  display: inline-block;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  min-width: 300px;
}

.mode-toggle {
  margin-bottom: 20px;
}

.mode-toggle button {
  margin: 0 10px;
  padding: 8px 15px;
  border: none;
  background-color: #cfe9e9;
  border-radius: 6px;
  cursor: pointer;
}

.mode-toggle .active {
  background-color: #4caf50;
  color: white;
}

input,
select,
button {
  margin: 10px;
  padding: 8px;
  width: 80%;
  font-size: 16px;
}

button {
  background-color: #4caf50;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  border: none;
}

button:hover {
  background-color: #45a049;
}

.result {
  margin-top: 20px;
  text-align: left;
}

.result ul {
  text-align: left;
  list-style-type: disc;
  margin-left: 20px;
}
🧪 Step 3: Run It
Now, just like before:

Terminal 1:

cd backend
node server.js
Terminal 2:

cd frontend
npm start
Then visit 👉 http://localhost:3000

🌿 What You Can Do Next
To make it even more intermediate, you can add:

User history — store previous calculations (in localStorage or MongoDB)

Charts — visualize emissions using recharts

CO₂ comparison — show how user’s footprint compares to the global average

Gamification — earn badges for reducing emissions

Would you like me to show you how to add a history tab (that saves previous calculations and shows a simple chart)?
That would make it look like a complete mini web app for your project.

You said:
yes and also add some tabs like average global average footprint and safe limit to a individual 
ChatGPT said:
Perfect 🔥 — that’s exactly the kind of upgrade that turns your project into a complete, impressive, intermediate-level app 👏

We’ll now add:

✅ Tabs / Sections in the UI:

Tracker → Calculate travel/product emissions

History → Show previous calculations + chart

Stats → Compare with global average and safe limit

✅ LocalStorage support to remember your calculations

✅ Simple graph using Recharts

🌍 Final Carbon Footprint Tracker (React + Node.js)
Let’s go step by step.
Your backend (server.js) already works fine — we’ll keep it.
We’ll only enhance the frontend.

⚛️ Step 1: Install Recharts for graphs
In your React app folder (frontend), open the terminal:

cd frontend
npm install recharts
⚛️ Step 2: Update App.js
Replace your src/App.js entirely with this version 👇

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

function App() {
  const [tab, setTab] = useState("tracker");
  const [mode, setMode] = useState("travel");
  const [distance, setDistance] = useState("");
  const [vehicleType, setVehicleType] = useState("car");
  const [productType, setProductType] = useState("laptop");
  const [quantity, setQuantity] = useState(1);
  const [result, setResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [history, setHistory] = useState([]);

  // Load history from localStorage on startup
  useEffect(() => {
    const stored = localStorage.getItem("footprintHistory");
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  // Save history when updated
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
      } else {
        response = await axios.post("http://localhost:5000/api/calculate/product", {
          productType,
          quantity: Number(quantity),
        });
      }

      setResult(response.data.carbonFootprint);
      setSuggestions(response.data.suggestions);

      const newEntry = {
        id: Date.now(),
        type: mode,
        item: mode === "travel" ? vehicleType : productType,
        value: response.data.carbonFootprint,
        date: new Date().toLocaleString(),
      };

      setHistory((prev) => [newEntry, ...prev]);
    } catch (error) {
      alert("Error connecting to backend");
    }
  };

  // Constants for stats tab
  const globalAverage = 4.7 * 1000; // 4.7 tonnes per year (converted to kg)
  const safeLimit = 2 * 1000; // 2 tonnes per year safe target

  const totalFootprint = history.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="App">
      <h1>🌎 Carbon Footprint Tracker</h1>

      {/* Tabs */}
      <div className="tabs">
        <button className={tab === "tracker" ? "active" : ""} onClick={() => setTab("tracker")}>
          🧮 Tracker
        </button>
        <button className={tab === "history" ? "active" : ""} onClick={() => setTab("history")}>
          📊 History
        </button>
        <button className={tab === "stats" ? "active" : ""} onClick={() => setTab("stats")}>
          🌍 Stats
        </button>
      </div>

      {/* TAB: Tracker */}
      {tab === "tracker" && (
        <div className="card">
          <div className="mode-toggle">
            <button
              className={mode === "travel" ? "active" : ""}
              onClick={() => setMode("travel")}
            >
              🚗 Travel
            </button>
            <button
              className={mode === "product" ? "active" : ""}
              onClick={() => setMode("product")}
            >
              🛍️ Shopping
            </button>
          </div>

          {mode === "travel" ? (
            <>
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
            </>
          ) : (
            <>
              <label>Product Type:</label>
              <select
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
              >
                <option value="laptop">Laptop</option>
                <option value="smartphone">Smartphone</option>
                <option value="tshirt">T-shirt</option>
                <option value="jeans">Jeans</option>
                <option value="shoes">Shoes</option>
                <option value="book">Book</option>
              </select>

              <label>Quantity:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </>
          )}

          <button onClick={calculate}>Calculate</button>

          {result !== null && (
            <div className="result">
              <h3>Estimated Footprint: {result.toFixed(2)} kg CO₂</h3>
              <h4>🌿 Suggestions:</h4>
              <ul>
                {suggestions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* TAB: History */}
      {tab === "history" && (
        <div className="card">
          <h2>📊 Your Calculation History</h2>
          {history.length === 0 ? (
            <p>No data yet. Try calculating something!</p>
          ) : (
            <>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={history.slice(0, 10).reverse()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="item" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#4caf50" />
                </BarChart>
              </ResponsiveContainer>

              <ul className="history-list">
                {history.map((h) => (
                  <li key={h.id}>
                    <strong>{h.item}</strong> — {h.value.toFixed(2)} kg CO₂ ({h.date})
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      {/* TAB: Stats */}
      {tab === "stats" && (
        <div className="card">
          <h2>🌍 Your Global Comparison</h2>
          <p><strong>Total emissions (this session):</strong> {totalFootprint.toFixed(2)} kg CO₂</p>
          <p><strong>Global average per person:</strong> {globalAverage} kg CO₂/year</p>
          <p><strong>Safe sustainable limit:</strong> {safeLimit} kg CO₂/year</p>

          <h3>
            {totalFootprint < safeLimit
              ? "✅ You’re within the safe limit! Keep it up!"
              : totalFootprint < globalAverage
              ? "⚠️ Below global average — good progress!"
              : "🚨 Above global average — try reducing your footprint!"}
          </h3>
        </div>
      )}
    </div>
  );
}

export default App;
🎨 Step 3: Update App.css
Replace the contents of frontend/src/App.css with:

.App {
  text-align: center;
  margin-top: 30px;
  font-family: "Segoe UI", sans-serif;
  background-color: #f4faf9;
  min-height: 100vh;
}

h1 {
  color: #2e7d32;
  margin-bottom: 20px;
}

.tabs button {
  margin: 5px;
  padding: 8px 15px;
  border: none;
  background-color: #c8e6c9;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.tabs .active {
  background-color: #4caf50;
  color: white;
}

.card {
  background-color: #fff;
  display: inline-block;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  min-width: 350px;
  margin-top: 20px;
}

.mode-toggle {
  margin-bottom: 20px;
}

.mode-toggle button {
  margin: 0 10px;
  padding: 8px 15px;
  border: none;
  background-color: #cfe9e9;
  border-radius: 6px;
  cursor: pointer;
}

.mode-toggle .active {
  background-color: #4caf50;
  color: white;
}

input,
select,
button {
  margin: 10px;
  padding: 8px;
  width: 80%;
  font-size: 16px;
}

button {
  background-color: #4caf50;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  border: none;
}

button:hover {
  background-color: #45a049;
}

.result {
  margin-top: 20px;
  text-align: left;
}

.result ul {
  text-align: left;
  list-style-type: disc;
  margin-left: 20px;
}

.history-list {
  text-align: left;
  margin-top: 10px;
}
🚀 Step 4: Run the project again
Backend:

cd backend
node server.js
Frontend:

cd frontend
npm start
Go to 👉 http://localhost:3000

You’ll now have:

🧮 Tracker tab: Calculate travel & product emissions

📊 History tab: See all your past calculations with a bar chart

🌍 Stats tab: Compare yourself with global average & safe limits

🌿 Step 5: What’s Happening
Tab	Function
Tracker	Interacts with backend API to calculate emissions
History	Uses localStorage to persist your previous results
Stats	Displays global vs. your total footprint comparison
Graph	Shows top 10 recent entries using Recharts
💡 Next-Level Ideas (optional if time permits)
Add a “Reset History” button

Add a daily average chart

Add authentication (username-based history)

Deploy frontend → Netlify, backend → Render

Would you like me to show you how to add a "Reset History" button and make the Stats tab include a pie chart (visual comparison)?
That would make it look visually impressive for your project submission.

You said:
yes add reset history button and change everything in stats from session to daily and also add calculator for calculating carbon emission over electricity usage(India) in kW also add some calculating parameters like average carbon emission on cutting a tree 
ChatGPT said:
Awesome 🌳 — now we’re moving into a full sustainability dashboard, not just a simple footprint app!
You’ll impress your teachers with this one 💪

We’ll now add the following upgrades step-by-step:

🚀 New Features Overview
Feature	Description
🧮 Electricity calculator (India)	Calculates carbon emissions from electricity usage (kWh)
🧾 Daily Stats (not session)	Tracks daily total footprint instead of just session total
🗑️ Reset History button	Allows clearing stored history easily
🌲 Tree-equivalent info	Tells how many trees would offset your CO₂
🧠 New backend endpoint	Adds electricity calculation API
We’ll modify both the backend and frontend.

🛠 Step 1: Update Backend (server.js)
Open backend/server.js and replace everything with this:

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Emission factors
const emissionFactors = {
  travel: {
    car: 0.21,
    bus: 0.1,
    bike: 0.05,
    train: 0.06,
  },
  product: {
    laptop: 200,
    smartphone: 70,
    tshirt: 10,
    jeans: 30,
    shoes: 15,
    book: 5,
  },
  electricity: {
    india: 0.82, // kg CO₂ per kWh (average grid factor in India, 2024)
  },
};

// Suggestions
function getSuggestions(totalCO2) {
  if (totalCO2 < 50) {
    return [
      "Excellent! Your footprint is quite low 🎉",
      "Keep conserving energy and using sustainable transport.",
    ];
  } else if (totalCO2 < 200) {
    return [
      "Consider using public transport or switching to renewables.",
      "Unplug electronics when not in use to save energy.",
    ];
  } else {
    return [
      "Reduce long car trips — try carpooling or cycling.",
      "Switch to solar or efficient appliances if possible.",
      "Every small change adds up to a greener planet 🌍",
    ];
  }
}

// --- Routes ---
// Travel
app.post("/api/calculate/travel", (req, res) => {
  const { distance, vehicleType } = req.body;
  const factor = emissionFactors.travel[vehicleType] || 0.2;
  const carbonFootprint = distance * factor;
  res.json({ type: "travel", carbonFootprint, suggestions: getSuggestions(carbonFootprint) });
});

// Product
app.post("/api/calculate/product", (req, res) => {
  const { productType, quantity } = req.body;
  const factor = emissionFactors.product[productType] || 20;
  const carbonFootprint = quantity * factor;
  res.json({ type: "product", carbonFootprint, suggestions: getSuggestions(carbonFootprint) });
});

// Electricity
app.post("/api/calculate/electricity", (req, res) => {
  const { kwh } = req.body;
  const factor = emissionFactors.electricity.india;
  const carbonFootprint = kwh * factor;
  res.json({ type: "electricity", carbonFootprint, suggestions: getSuggestions(carbonFootprint) });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
⚛️ Step 2: Update Frontend (App.js)
Now open frontend/src/App.js and replace everything with this upgraded version 👇

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

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("footprintHistory");
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  // Save to localStorage
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
        item:
          mode === "travel"
            ? vehicleType
            : mode === "product"
            ? productType
            : "electricity",
        value: response.data.carbonFootprint,
      };

      setHistory((prev) => [newEntry, ...prev]);
    } catch (error) {
      alert("Error connecting to backend");
    }
  };

  const resetHistory = () => {
    if (window.confirm("Are you sure you want to reset all history?")) {
      setHistory([]);
      localStorage.removeItem("footprintHistory");
    }
  };

  // Group by date for daily total
  const dailyTotals = Object.values(
    history.reduce((acc, item) => {
      acc[item.date] = acc[item.date] || { date: item.date, total: 0 };
      acc[item.date].total += item.value;
      return acc;
    }, {})
  );

  const totalFootprint = history.reduce((sum, item) => sum + item.value, 0);
  const treesCutEquivalent = totalFootprint / 21.77; // 1 tree absorbs ~21.77 kg CO₂/year

  const COLORS = ["#4caf50", "#81c784", "#a5d6a7"];

  return (
    <div className="App">
      <h1>🌎 Carbon Footprint Tracker</h1>

      {/* Tabs */}
      <div className="tabs">
        <button className={tab === "tracker" ? "active" : ""} onClick={() => setTab("tracker")}>
          🧮 Tracker
        </button>
        <button className={tab === "history" ? "active" : ""} onClick={() => setTab("history")}>
          📊 History
        </button>
        <button className={tab === "stats" ? "active" : ""} onClick={() => setTab("stats")}>
          🌍 Daily Stats
        </button>
      </div>

      {/* Tracker Tab */}
      {tab === "tracker" && (
        <div className="card">
          <div className="mode-toggle">
            <button className={mode === "travel" ? "active" : ""} onClick={() => setMode("travel")}>
              🚗 Travel
            </button>
            <button
              className={mode === "product" ? "active" : ""}
              onClick={() => setMode("product")}
            >
              🛍️ Shopping
            </button>
            <button
              className={mode === "electricity" ? "active" : ""}
              onClick={() => setMode("electricity")}
            >
              ⚡ Electricity
            </button>
          </div>

          {mode === "travel" && (
            <>
              <label>Distance (km):</label>
              <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />
              <label>Vehicle Type:</label>
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
              <label>Product Type:</label>
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
              <label>Electricity Usage (kWh):</label>
              <input type="number" value={kwh} onChange={(e) => setKwh(e.target.value)} />
              <p style={{ fontSize: "14px" }}>
                * Based on India’s average: 0.82 kg CO₂ per kWh
              </p>
            </>
          )}

          <button onClick={calculate}>Calculate</button>

          {result !== null && (
            <div className="result">
              <h3>Estimated Footprint: {result.toFixed(2)} kg CO₂</h3>
              <h4>🌿 Suggestions:</h4>
              <ul>
                {suggestions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* History Tab */}
      {tab === "history" && (
        <div className="card">
          <h2>📊 Your Calculation History</h2>
          {history.length === 0 ? (
            <p>No data yet. Try calculating something!</p>
          ) : (
            <>
              <button className="reset-btn" onClick={resetHistory}>
                🗑️ Reset History
              </button>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dailyTotals.slice(-10)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="total" fill="#4caf50" />
                </BarChart>
              </ResponsiveContainer>
              <ul className="history-list">
                {history.map((h) => (
                  <li key={h.id}>
                    <strong>{h.item}</strong> — {h.value.toFixed(2)} kg CO₂ ({h.date})
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      {/* Stats Tab */}
      {tab === "stats" && (
        <div className="card">
          <h2>🌍 Daily Carbon Stats</h2>

          {dailyTotals.length === 0 ? (
            <p>No data available yet.</p>
          ) : (
            <>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={dailyTotals}
                    dataKey="total"
                    nameKey="date"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {dailyTotals.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

              <h3>Total footprint: {totalFootprint.toFixed(2)} kg CO₂</h3>
              <p>
                Equivalent to cutting down approximately{" "}
                <strong>{treesCutEquivalent.toFixed(1)} trees</strong> 🌲
              </p>
              <p>
                (1 tree absorbs about 21.77 kg CO₂ per year)
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
🎨 Step 3: Update App.css
Add a new button style and layout polish:

.reset-btn {
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  margin-bottom: 10px;
  cursor: pointer;
}

.reset-btn:hover {
  background-color: #d32f2f;
}
(Keep all your previous CSS — just add the above styles.)

✅ Step 4: Run and Test
Start backend

cd backend
node server.js
Start frontend

cd frontend
npm start
Visit 👉 http://localhost:3000

You’ll see:

🧮 Tracker Tab
Can now calculate Travel, Shopping, or Electricity usage

Shows CO₂ emission and suggestions

📊 History Tab
Shows bar chart of daily totals

Reset button to clear all data

🌍 Daily Stats Tab
Pie chart of emissions per day

Total CO₂ emitted

Tree-equivalent impact 🌲

🌿 Bonus: Facts You Can Display in Report
Average CO₂ emission (global per person): ~4.7 tons/year

Safe limit to avoid 1.5°C warming: ~2 tons/year

1 kWh electricity (India): ~0.82 kg CO₂

1 tree absorbs ~21.77 kg CO₂/year

Average car emits ~0.21 kg CO₂/km

Would you like me to show you how to add a small info tab (with these real-world CO₂ facts and sources)?
It would make your app look educational and give it a perfect “college-project polish.”

You said:
Yes
ChatGPT said:
Perfect 🌱 — adding an “Info & Facts” tab is the finishing touch that transforms your project into a complete educational sustainability app 🎓

This section will:

Display real-world data about carbon emissions and energy usage

Provide scientific sources (so it looks credible)

Make your app look professional and informative

🧠 Step 1: Add “Info” Tab to Your Frontend
We’ll extend your App.js by adding a new tab and a short component with environmental facts.

Open frontend/src/App.js and replace it with this final version 👇
(It includes your previous features + the new Info tab.)

📄 frontend/src/App.js
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
        item:
          mode === "travel"
            ? vehicleType
            : mode === "product"
            ? productType
            : "electricity",
        value: response.data.carbonFootprint,
      };

      setHistory((prev) => [newEntry, ...prev]);
    } catch (error) {
      alert("Error connecting to backend");
    }
  };

  const resetHistory = () => {
    if (window.confirm("Are you sure you want to reset all history?")) {
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

  const totalFootprint = history.reduce((sum, item) => sum + item.value, 0);
  const treesCutEquivalent = totalFootprint / 21.77;

  const COLORS = ["#4caf50", "#81c784", "#a5d6a7"];

  return (
    <div className="App">
      <h1>🌎 Carbon Footprint Tracker</h1>

      {/* Navigation Tabs */}
      <div className="tabs">
        <button className={tab === "tracker" ? "active" : ""} onClick={() => setTab("tracker")}>
          🧮 Tracker
        </button>
        <button className={tab === "history" ? "active" : ""} onClick={() => setTab("history")}>
          📊 History
        </button>
        <button className={tab === "stats" ? "active" : ""} onClick={() => setTab("stats")}>
          🌍 Daily Stats
        </button>
        <button className={tab === "info" ? "active" : ""} onClick={() => setTab("info")}>
          ℹ️ Info & Facts
        </button>
      </div>

      {/* Tracker Tab */}
      {tab === "tracker" && (
        <div className="card">
          <div className="mode-toggle">
            <button className={mode === "travel" ? "active" : ""} onClick={() => setMode("travel")}>
              🚗 Travel
            </button>
            <button
              className={mode === "product" ? "active" : ""}
              onClick={() => setMode("product")}
            >
              🛍️ Shopping
            </button>
            <button
              className={mode === "electricity" ? "active" : ""}
              onClick={() => setMode("electricity")}
            >
              ⚡ Electricity
            </button>
          </div>

          {mode === "travel" && (
            <>
              <label>Distance (km):</label>
              <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />
              <label>Vehicle Type:</label>
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
              <label>Product Type:</label>
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
              <label>Electricity Usage (kWh):</label>
              <input type="number" value={kwh} onChange={(e) => setKwh(e.target.value)} />
              <p style={{ fontSize: "14px" }}>
                * Based on India’s grid factor: 0.82 kg CO₂ per kWh (CEA, 2024)
              </p>
            </>
          )}

          <button onClick={calculate}>Calculate</button>

          {result !== null && (
            <div className="result">
              <h3>Estimated Footprint: {result.toFixed(2)} kg CO₂</h3>
              <h4>🌿 Suggestions:</h4>
              <ul>
                {suggestions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* History Tab */}
      {tab === "history" && (
        <div className="card">
          <h2>📊 Your Calculation History</h2>
          {history.length === 0 ? (
            <p>No data yet. Try calculating something!</p>
          ) : (
            <>
              <button className="reset-btn" onClick={resetHistory}>
                🗑️ Reset History
              </button>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dailyTotals.slice(-10)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="total" fill="#4caf50" />
                </BarChart>
              </ResponsiveContainer>
              <ul className="history-list">
                {history.map((h) => (
                  <li key={h.id}>
                    <strong>{h.item}</strong> — {h.value.toFixed(2)} kg CO₂ ({h.date})
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      {/* Stats Tab */}
      {tab === "stats" && (
        <div className="card">
          <h2>🌍 Daily Carbon Stats</h2>
          {dailyTotals.length === 0 ? (
            <p>No data available yet.</p>
          ) : (
            <>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={dailyTotals}
                    dataKey="total"
                    nameKey="date"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {dailyTotals.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

              <h3>Total footprint: {totalFootprint.toFixed(2)} kg CO₂</h3>
              <p>
                Equivalent to cutting down approximately{" "}
                <strong>{treesCutEquivalent.toFixed(1)} trees</strong> 🌲
              </p>
              <p>(1 tree absorbs about 21.77 kg CO₂ per year)</p>
            </>
          )}
        </div>
      )}

      {/* Info & Facts Tab */}
      {tab === "info" && (
        <div className="card info-tab">
          <h2>ℹ️ Environmental Facts & Averages</h2>
          <ul>
            <li>🌍 Global average carbon footprint per person: <strong>4.7 tons CO₂/year</strong></li>
            <li>✅ Sustainable limit per person: <strong>2 tons CO₂/year</strong></li>
            <li>⚡ Average CO₂ emission from electricity (India): <strong>0.82 kg per kWh</strong></li>
            <li>🚗 Car emits about <strong>0.21 kg CO₂ per km</strong></li>
            <li>🧥 Producing one cotton T-shirt emits around <strong>10 kg CO₂</strong></li>
            <li>🌳 Cutting one mature tree removes ~<strong>21.77 kg CO₂</strong> absorption per year</li>
            <li>✈️ 1-hour flight emits roughly <strong>250 kg CO₂ per passenger</strong></li>
          </ul>

          <h3>📚 Data Sources:</h3>
          <p style={{ fontSize: "14px", textAlign: "left" }}>
            • Central Electricity Authority (CEA), India, 2024 Grid Emission Factors<br/>
            • World Bank, Global Carbon Atlas, IPCC 2023 Reports<br/>
            • WWF & EPA Carbon Conversion Factors
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
🎨 Step 2: Add CSS for Info Tab
In frontend/src/App.css, add these styles to the bottom:

.info-tab ul {
  text-align: left;
  margin-top: 10px;
  line-height: 1.6;
}

.info-tab li {
  margin-bottom: 8px;
  font-size: 16px;
}
✅ Step 3: Run Your App
cd backend
node server.js
and in another terminal:

cd frontend
npm start
Open 👉 http://localhost:3000

🧾 What You Have Now
✅ Tabs:

🧮 Tracker — travel, product, and electricity

📊 History — daily logs, reset button

🌍 Stats — pie chart & tree equivalence

ℹ️ Info — real-world emission data + sources

✅ Tech Used:

React (frontend)

Node.js + Express (backend)

Recharts (graphs)

LocalStorage (offline storage)

Educational dataset (real-world references)

Would you like me to show you how to export a simple PDF report (summary of your total carbon footprint + charts) for presentation or submission?
That’s usually the final piece teachers love to see in a college project.

You said:
yes
ChatGPT said:
Perfect 🌿 — generating a PDF report is a great professional touch for your project.
It helps you present or submit results neatly — and it’ll impress evaluators because it shows full-stack capability (React → Node → PDF).

🧾 What We’ll Build
When the user clicks “Generate Report” in your app:

The frontend sends a request to the backend.

The backend generates a PDF file (with date, total footprint, and some facts).

The browser automatically downloads it.

⚙️ Step 1: Install the Required Package
Go to your backend folder and run:

cd backend
npm install pdfkit
🛠️ Step 2: Update Your Backend (server.js)
Add this new endpoint below your existing routes in backend/server.js.

👉 Do not remove any existing routes — just paste this block near the bottom:

const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

app.post("/api/report", (req, res) => {
  const { history, totalFootprint, treesCutEquivalent } = req.body;

  const doc = new PDFDocument();
  const filePath = path.join(__dirname, "carbon_report.pdf");
  const writeStream = fs.createWriteStream(filePath);
  doc.pipe(writeStream);

  doc.fontSize(22).text("🌍 Carbon Footprint Report", { align: "center" });
  doc.moveDown();
  doc.fontSize(14).text(`Generated on: ${new Date().toLocaleString()}`);
  doc.moveDown();

  doc.fontSize(16).text("Summary:", { underline: true });
  doc.moveDown(0.5);
  doc.text(`Total Carbon Footprint: ${totalFootprint.toFixed(2)} kg CO₂`);
  doc.text(`Equivalent Trees Cut: ${treesCutEquivalent.toFixed(2)}`);
  doc.moveDown();

  doc.fontSize(16).text("Daily Records:", { underline: true });
  doc.moveDown(0.5);

  if (history.length === 0) {
    doc.text("No data available.");
  } else {
    history.slice(0, 10).forEach((entry, i) => {
      doc.text(
        `${i + 1}. [${entry.date}] ${entry.item} — ${entry.value.toFixed(2)} kg CO₂`
      );
    });
  }

  doc.moveDown(1);
  doc.fontSize(12).text(
    "Data sources: Central Electricity Authority (India, 2024), World Bank, IPCC Reports, WWF Conversion Factors.",
    { align: "left" }
  );

  doc.end();

  writeStream.on("finish", () => {
    res.download(filePath, "carbon_report.pdf", (err) => {
      if (err) console.error("Error sending file:", err);
      fs.unlinkSync(filePath); // delete after sending
    });
  });
});
⚛️ Step 3: Add a Button in Frontend (App.js)
In your Stats tab (inside the <div className="card"> for Stats),
add a Generate Report button just below the total summary.

Find this block (around line 330):

<h3>Total footprint: {totalFootprint.toFixed(2)} kg CO₂</h3>
<p>
  Equivalent to cutting down approximately{" "}
  <strong>{treesCutEquivalent.toFixed(1)} trees</strong> 🌲
</p>
👇 Add this right below it:

<button
  onClick={async () => {
    try {
      const response = await fetch("http://localhost:5000/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history, totalFootprint, treesCutEquivalent }),
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "carbon_report.pdf";
      a.click();
    } catch (err) {
      alert("Failed to generate report");
    }
  }}
>
  🧾 Generate PDF Report
</button>
🎨 Step 4: Style the Button
Add this to your App.css (after the reset button style):

button {
  transition: all 0.2s ease-in-out;
}

button:hover {
  transform: scale(1.03);
}

button:active {
  transform: scale(0.98);
}
✅ Step 5: Test It
Start your backend:

cd backend
node server.js
Start your frontend:

cd frontend
npm start
Go to the Stats tab → click “Generate PDF Report.”

You’ll get a downloaded PDF file like:

carbon_report.pdf
Inside it you’ll see:

🌍 Carbon Footprint Report
Generated on: 10/26/2025 12:15 PM

Summary:
Total Carbon Footprint: 154.20 kg CO₂
Equivalent Trees Cut: 7.09

Daily Records:
1. [10/25/2025] car — 84.00 kg CO₂
2. [10/25/2025] electricity — 12.30 kg CO₂
...
🧩 Optional Enhancements
If you want to go the extra mile for your presentation:

Add your name, college, and project title at the top of the PDF.

Add a college logo using doc.image("logo.png", x, y, { width: 100 }).

Include a small chart snapshot (you can export the Recharts component as an image later if you want).

Would you like me to show you how to add your name, college name, and logo to the generated PDF header?
That will make the report look fully official for submission.

You said:
Just give me full code
ChatGPT said:
Perfect 👍 — here’s the complete, ready-to-run final version of your Carbon Footprint Tracker project
with all features:
✅ React + Node.js
✅ Travel / Product / Electricity calculators
✅ Daily stats, charts, reset
✅ Info & facts tab
✅ PDF report generation with your name & college at the top

🌍 FINAL PROJECT STRUCTURE
carbon-footprint-tracker/
│
├── backend/
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    └── package.json
🖥️ 1️⃣ BACKEND — backend/server.js
const express = require("express");
const cors = require("cors");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Emission factors (approximate real-world)
const emissionFactors = {
  travel: { car: 0.21, bus: 0.1, bike: 0.05, train: 0.06 },
  product: { laptop: 200, smartphone: 70, tshirt: 10, jeans: 30, shoes: 15, book: 5 },
  electricity: { india: 0.82 }, // kg CO₂ per kWh
};

function getSuggestions(totalCO2) {
  if (totalCO2 < 50)
    return ["Excellent! Your footprint is quite low 🎉", "Keep conserving energy and using sustainable transport."];
  else if (totalCO2 < 200)
    return ["Consider using public transport or switching to renewables.", "Unplug electronics when not in use."];
  else
    return ["Reduce long car trips — try carpooling or cycling.", "Switch to solar or efficient appliances."];
}

// Travel calculator
app.post("/api/calculate/travel", (req, res) => {
  const { distance, vehicleType } = req.body;
  const factor = emissionFactors.travel[vehicleType] || 0.2;
  const carbonFootprint = distance * factor;
  res.json({ type: "travel", carbonFootprint, suggestions: getSuggestions(carbonFootprint) });
});

// Product calculator
app.post("/api/calculate/product", (req, res) => {
  const { productType, quantity } = req.body;
  const factor = emissionFactors.product[productType] || 20;
  const carbonFootprint = quantity * factor;
  res.json({ type: "product", carbonFootprint, suggestions: getSuggestions(carbonFootprint) });
});

// Electricity calculator (India)
app.post("/api/calculate/electricity", (req, res) => {
  const { kwh } = req.body;
  const factor = emissionFactors.electricity.india;
  const carbonFootprint = kwh * factor;
  res.json({ type: "electricity", carbonFootprint, suggestions: getSuggestions(carbonFootprint) });
});

// PDF report generation
app.post("/api/report", (req, res) => {
  const { history, totalFootprint, treesCutEquivalent } = req.body;

  const doc = new PDFDocument();
  const filePath = path.join(__dirname, "carbon_report.pdf");
  const writeStream = fs.createWriteStream(filePath);
  doc.pipe(writeStream);

  // === HEADER ===
  doc.fontSize(22).text("🌍 Carbon Footprint Report", { align: "center" });
  doc.moveDown(0.5);
  doc.fontSize(14).text("Submitted by: Your Name", { align: "center" });
  doc.text("College: Your College Name", { align: "center" });
  doc.text("Project: Carbon Footprint Tracker", { align: "center" });
  doc.moveDown();
  doc.text(`Generated on: ${new Date().toLocaleString()}`, { align: "center" });
  doc.moveDown(1);

  // === SUMMARY ===
  doc.fontSize(16).text("Summary:", { underline: true });
  doc.moveDown(0.5);
  doc.text(`Total Carbon Footprint: ${totalFootprint.toFixed(2)} kg CO₂`);
  doc.text(`Equivalent Trees Cut: ${treesCutEquivalent.toFixed(2)}`);
  doc.moveDown(1);

  // === HISTORY ===
  doc.fontSize(16).text("Recent Records:", { underline: true });
  doc.moveDown(0.5);
  if (history.length === 0) doc.text("No data available.");
  else {
    history.slice(0, 10).forEach((entry, i) => {
      doc.text(`${i + 1}. [${entry.date}] ${entry.item} — ${entry.value.toFixed(2)} kg CO₂`);
    });
  }

  doc.moveDown(1);
  doc.fontSize(12).text(
    "Data Sources: CEA (India 2024), IPCC AR6, World Bank, WWF, and EPA Conversion Factors.",
    { align: "left" }
  );

  doc.end();
  writeStream.on("finish", () => {
    res.download(filePath, "carbon_report.pdf", (err) => {
      if (err) console.error(err);
      fs.unlinkSync(filePath);
    });
  });
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
⚛️ 2️⃣ FRONTEND — frontend/src/App.js
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
🎨 3️⃣ FRONTEND — frontend/src/App.css
body {
  font-family: "Segoe UI", sans-serif;
  background-color: #f3f9f4;
  margin: 0;
  padding: 20px;
}

.App {
  max-width: 700px;
  margin: auto;
  text-align: center;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-top: 20px;
}

.tabs button {
  margin: 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #e0e0e0;
}
.tabs button.active { background: #4caf50; color: white; }

.mode-toggle button {
  margin: 5px;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background-color: #e8f5e9;
}
.mode-toggle .active { background-color: #4caf50; color: white; }

input, select {
  display: block;
  margin: 8px auto;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  background: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.2s;
}
button:hover { transform: scale(1.03); }
button:active { transform: scale(0.98); }

.reset-btn {
  background: #f44336;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
}

.info-tab ul {
  text-align: left;
  line-height: 1.6;
}
.info-tab li { margin-bottom: 8px; }
🧩 4️⃣ How to Run
Backend

cd backend
npm init -y
npm install express cors pdfkit
node server.js
Frontend

cd frontend
npx create-react-app .
npm install axios recharts
npm start
Then open 👉 http://localhost:3000

🌟 You Now Have:
✅ Travel, product, and electricity CO₂ calculators
✅ Daily stats, graphs, and history
✅ Reset + Info tabs
✅ Generate PDF report with your name & college

Would you like me to show you how to host this entire app locally (portable) so it runs on any computer (even without Node installed) using a single .exe or static folder?

You said:
now i want to push it to github 
ChatGPT said:
Perfect ✅ — pushing your React + Node.js carbon footprint tracker to GitHub is a great next step!
Here’s a complete beginner-friendly, step-by-step guide that will safely upload your full project and make it easy to share or demo from any laptop.

🪴 Step 1: Prepare Your Project Folder
Make sure your project structure looks like this:

carbon-footprint-tracker/
│
├── backend/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
└── README.md   ← (we’ll make this soon)
Open your terminal or VS Code terminal in the carbon-footprint-tracker folder (root of your project).

⚙️ Step 2: Initialize Git
If this is your first time using Git, run these once globally:

git config --global user.name "Your Name"
git config --global user.email "your@email.com"
Now initialize a new Git repo inside your project:

git init
🚫 Step 3: Create a .gitignore File
In your root folder (carbon-footprint-tracker/), create a new file called .gitignore
and paste this:

# Node dependencies
node_modules/
npm-debug.log

# Build files
frontend/build/
backend/node_modules/
frontend/node_modules/

# Environment
.env

# System files
.DS_Store
Thumbs.db
This prevents unnecessary or large files (like node_modules) from being uploaded.

🧾 Step 4: Add a README (optional but recommended)
Create a README.md file in your root folder:

# 🌍 Carbon Footprint Tracker

A full-stack (React + Node.js) web app that helps users track and reduce their carbon footprint.

## 🚀 Features
- Vehicle-based carbon emission calculator
- Electricity CO₂ calculator (India)
- Product CO₂ calculator
- Daily stats and pie charts
- Reset history & PDF report generation

## 🛠️ Tech Stack
- **Frontend:** React, Recharts, Axios
- **Backend:** Node.js, Express, PDFKit

## ▶️ How to Run
1. Start the backend:
   ```bash
   cd backend
   node server.js

2. Start the frontend:
   ```bash
   cd frontend
   npm start
=======
2.Start the frontend:
   ```bash
   cd frontend
   npm start
>>>>>>> a5636c10a4b110dbb1c0363ab55edad99b58330d
