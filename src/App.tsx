import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const todos = [
  { name: "3 Chicken Wings", price: 12.11 },
  { name: "Chicken Livers and Portuguese Roll", price: 6.59 },
  { name: "Spicy Mixed Olives (V)", price: 8.99 },
  { name: "Hummus with PERI-PERI Drizzle (V)", price: 12.49 },
  { name: "Red Pepper Dip (V)", price: 11 },
  { name: "Appeteaser Platter", price: 3 },
];

function App() {
  return (
    <div className="max-w-2xl mx-auto my-4 font-bold">
      <h1 className="text-center text-4xl mb-6">Menu</h1>
      <ul>
        {todos.map((t) => (
          <li className="p-4 bg-gray-100 mb-2 rounded-md">
            <div className="flex justify-between">
              <p>{t.name}</p>
              <p>$ {t.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
