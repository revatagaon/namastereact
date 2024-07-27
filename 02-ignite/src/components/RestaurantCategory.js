import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  }

  return (
    <div className="w-6/12 mx-auto my-5 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span>{!showItems ? "⬇️" : "⬆️"}</span>
      </div>
      {showItems && <ItemList item={data.itemCards} />}
    </div>
  )
}

export default RestaurantCategory;