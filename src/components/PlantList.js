import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {

  const [plantItem, setPlantItem] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((r) => r.json())
      .then((data) => {
        setPlantItem(data)
      })
  }, [])

console.log(plantItem)

  return (
    <ul className="cards">{plantItem.map((item) => 
      (<PlantCard key={item.id} item={item} />)
    )}</ul>
  );
}

export default PlantList;
