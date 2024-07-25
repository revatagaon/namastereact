import { useEffect, useState } from 'react'
// import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStauts';

const Body = () => {
  // Local State variable - whixh is super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    // The CORS Proxy is not allowed to use in INDIA
    // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    // Optional chaining
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    // The above destructuring may change in future, refer to Swiggy's api and extract cards data from the api
  }

  // state can also be writen as follows
  const data = useState([]);
  [names, setNames] = data;
  // OR
  xyz = data[0]
  setXyz = data[1]

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline, Please check your internet connection</h1>
    )
  }

  return listOfRestaurants?.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="flex">
        <div className="p-4 m-4">
          <input type='text' className="border border-solid border-black" value={searchText}
            onChange={(e) => setSearchText(e.target.value)} />
          <button className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredData = listOfRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
              })
              setFilteredRestaurant(filteredData)
            }}>Search</button>
        </div>
        <div className="flex items-center">
          <button className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              let filteredList = listOfRestaurants.filter((res) => res.info.avgRatingString > "4.4")
              setListOfRestaurants(filteredList)
            }}
          >Top Rated Restaurants</button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map(restaurant =>
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        )}
      </div>
    </div>
  )
}

export default Body;