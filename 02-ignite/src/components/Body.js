import { useState } from 'react'
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // Local State variable - whixh is super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList)

  // state can also be writen as follows
  const data = useState([]);
  [names, setNames] = data;
  // OR
  xyz = data[0]
  setXyz = data[1]

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <button className="filter-btn"
        onClick={() => {
          let filteredList = listOfRestaurants.filter((res) => res.info.avgRatingString > "4.4")
          setListOfRestaurants(filteredList)
        }}
      >Top Rated Restaurants</button>
      <div className="res-container">
        {listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
      </div>
    </div>
  )
}

export default Body;