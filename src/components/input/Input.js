import React, { useState } from "react";
import "./Input.css";

const Input = ({ onResultChange }) => {
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    const price = event.currentTarget.elements.price.value;
    const currency = event.currentTarget.elements.currency.value;

    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currency}/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.rates?.[0]?.mid) {
          const result = (Number(price) * Number(data.rates[0].mid)).toFixed(2);

          onResultChange(result);
        } else {
          setError("something goes wrong :( Come back later pliz");
        }
      })
      .catch(() => {
        setError("something goes wrong :( Come back later pliz");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="middle-section">
        <input
          name="price"
          className="price"
          type="number"
          min="0.01"
          step="0.01"
          required
        />
        <select className="select-currency" name="currency">
          <option value="eur">EUR</option>
          <option value="usd">USD</option>
          <option value="chf">CHF</option>
        </select>
        <button type="submit" className="recalculate" id="submit-button">
          it's
        </button>
      </form>
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default Input;
