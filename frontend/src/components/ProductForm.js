import React, { useState } from "react";
import axios from "axios";

function ProductForm({ onAddRecord }) {
  const [productType, setProductType] = useState("laptop");
  const [quantity, setQuantity] = useState(1);
  const [result, setResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const calculate = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/calculate/product", {
        productType,
        quantity: Number(quantity),
      });

      setResult(response.data.carbonFootprint);
      setSuggestions(response.data.suggestions);
      onAddRecord({
        type: "Product",
        details: `${quantity} × ${productType}`,
        value: response.data.carbonFootprint,
      });
    } catch {
      alert("Error connecting to backend");
    }
  };

  return (
    <div>
      <h2>🛍️ Product Footprint</h2>
      <label>Product:</label>
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

export default ProductForm;
