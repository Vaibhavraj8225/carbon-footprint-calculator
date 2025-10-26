import React from "react";

function History({ records }) {
  const total = records.reduce((sum, r) => sum + r.value, 0);

  return (
    <div>
      <h2>📜 History</h2>
      {records.length === 0 ? (
        <p>No records yet.</p>
      ) : (
        <table className="history-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Details</th>
              <th>Footprint (kg CO₂)</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r, i) => (
              <tr key={i}>
                <td>{r.type}</td>
                <td>{r.details}</td>
                <td>{r.value.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h3>Total: {total.toFixed(2)} kg CO₂</h3>
    </div>
  );
}

export default History;
