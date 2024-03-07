import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCard from "./ItemCard";

const RestaurantMenu = () => {
  useRestaurantMenu();
  const restaurantMenu = useSelector((store) => store.menu.restaurantMenu);
  const [searchText, setSearchText] = useState("");
  const [filterItem, setfilterItem] = useState([]);
  const { loggedInUser, setUserName } = useContext(UserContext);
  useEffect(() => {
    setfilterItem(restaurantMenu);
  }, [restaurantMenu]);
  return !filterItem ? (
    <Shimmer />
  ) : (
    <div className="-z-50 pt-[65px] flex-col items-center justify-center container self-center w-full">
      <div className="flex mx-auto pt-8 pb-4 gap-20 justify-center self-center">
        <div className="flex items-center gap-4">
          <input
            data-testid="searchInput"
            className="outline-none border-2 p-2"
            type="text"
            placeholder="Enter to search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className=" hover:[color:tomato] font-bold text-gray-700"
            onClick={() => {
              console.log(searchText);
              setfilterItem(
                restaurantMenu?.filter((res) =>
                  res?.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <div>
          <input
            className="border-2 outline-none p-2"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-2 w-full mx-auto my-10">
        {filterItem.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
