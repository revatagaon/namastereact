import { useContext, useEffect, useState } from 'react'
// import resList from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStauts';
import UserContext from '../utils/UserContext';

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
  // const data = useState([]);
  // [names, setNames] = data;
  // OR
  // xyz = data[0]
  // setXyz = data[1]

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  const { loggedInUser, setUserName } = useContext(UserContext)

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline, Please check your internet connection</h1>
    )
  }

  console.log("listOfRestaurants", listOfRestaurants);

  return listOfRestaurants?.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="flex">
        <div className="p-4 m-4">
          <input type='text'
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
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
              let filteredList = listOfRestaurants.filter((res) => Number(res.info.avgRatingString) > 4.4)
              setFilteredRestaurant([...filteredList])
            }}
          >Top Rated Restaurants</button>
        </div>
        <div className="flex items-center px-4 py-2">
          <label >UserName : </label>
          <input className="border border-black p-2" value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map(restaurant =>
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {
              (Number(restaurant.info.avgRatingString) === 3.8 || Number(restaurant.info.avgRatingString) === 3.9) ?
                (<RestaurantCardPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)
            }

          </Link>
        )}
      </div>
    </div>
  )
}

export default Body;