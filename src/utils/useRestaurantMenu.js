import { useEffect } from "react";
import { MAIN_URL } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import {  addRestaurantMenu } from "./menuSlice";

const useRestaurantMenu = () => {
  const dispatch = useDispatch();
  const restaurantInfo = useSelector((store) => store.menu.restaurantInfo);

  useEffect(() => {
    !restaurantInfo && fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await fetch(MAIN_URL);
      const menu = await response.json();
      dispatch(addRestaurantMenu(menu));
    } catch (error) {
      console.log(error);
    }
  }

  return;
};

export default useRestaurantMenu;
