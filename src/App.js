import React from "react";
import "./styles.css";
import { useState } from "react";

const travel = {
  Beach: [
    { name: "Goa", rating: "5/5" },
    { name: "Puri", rating: "4/5" },
    { name: "Andaman", rating: "5/5" }
  ],
  Hills: [
    { name: "Ladakh", rating: "5/5" },
    { name: "Kashmir", rating: "5/5" },
    { name: "Tawangg", rating: "5/5" }
  ],
  Historical: [
    { name: "Rajasthan", rating: "5/5" },
    { name: "Amritsar", rating: "5/5" },
    { name: "Kolkata", rating: "4/5" }
  ]
};

export default function App() {
  const [place, setPlace] = useState("Beach");
  function typeClickHandler(place) {
    setPlace(place);
  }

  return (
    <div className="App">
      <h1>Travel Places</h1>
      <p>
        Checkout my favourite places to travel. Select a type to get started!
      </p>

      <div>
        {Object.keys(travel).map((type) => (
          <button
            onClick={() => typeClickHandler(type)}
            style={{
              cursor: "pointer",
              background: "#A7F3D0",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {type}
          </button>
        ))}
      </div>

      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travel[place].map((item) => (
            <li
              key={item.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div>{item.name}</div>
              <div>{item.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
