import React from "react";

function PlantCard({ item }) {

  return (
    <li className="card">
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>Price: {item.price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
