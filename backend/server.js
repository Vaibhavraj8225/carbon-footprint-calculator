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
