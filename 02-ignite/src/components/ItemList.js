import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice"

const ItemList = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItems = (items) => {
    dispatch(addItems(items));
  }
  return (
    <div>
      {item.map(items => (
        <div data-testid="foodItems"
        key={items.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
            <div>
              <span className="py-2">{items.card.info.name}</span>
              <span> - ₹{" "}{items.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{items.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 bg-black text-white shadow-lg mx-7 mt-[66px] rounded-lg"
                onClick={() => handleAddItems(items)}>Add +</button>
            </div>
            <img src={CDN_URL + items.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList;