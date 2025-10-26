import React from "react";

function GlobalStats() {
  const globalAverage = 4000; // kg CO₂ per person per year (4 tons)
  const safeLimit = 2000; // target per person to keep climate goals

  return (
    <div>
      <h2>🌎 Global Averages</h2>
      <p>
        <strong>Global Average Footprint:</strong> {globalAverage} kg CO₂/year
      </p>
      <p>
        <strong>Safe Limit per Person:</strong> {safeLimit} kg CO₂/year
      </p>
      <p>
        To stay under the safe limit, aim for <b>less than 5.5 kg/day</b> total
        carbon footprint.
      </p>
      <ul>
        <li>🚲 Use public transport or bike for short trips</li>
        <li>💡 Switch to renewable energy at home</li>
        <li>🍽 Eat more plant-based meals</li>
        <li>♻️ Reuse, recycle, and repair products</li>
      </ul>
    </div>
  );
}

export default GlobalStats;
