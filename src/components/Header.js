import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItmes = useSelector((store) => store.cart.items);

  return (
    <div className="w-[100vw] z-50 flex justify-between items-center bg-transparent fixed mb-5">
      <div className="w-[100vw] flex justify-between items-center px-4 mx-2 bg-white shadow-xl mb-5">
        <img className="w-28 h-14 rounded-full" src={LOGO_URL} alt="logo" />
        <ul className="flex item-center px-2 m-4">
          <li className="px-4 py-2 hover:[color:tomato] font-normal text-gray-700">
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="px-4 py-2 hover:[color:tomato] font-normal text-gray-700">
            <Link to="/contact">Contact</Link>{" "}
          </li>
          <li className="px-4 py-2 hover:[color:tomato] font-normal text-gray-700">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 py-2 hover:[color:tomato] font-normal text-gray-700">
            {" "}
            <Link to="/cart">{ cartItmes.length == 0 ? '': cartItmes.length} Cart </Link>{" "}
          </li>
          <li className="px-4 py-2 hover:[color:tomato] font-normal text-gray-700">
            <button
              className="user"
              onClick={() => {
                if (btnName === "Login") setBtnName("Logout");
                else setBtnName("Login");
              }}
            >
              {btnName} : {loggedInUser}
            </button>
          </li>
          <li className="px-2 py-2 flex items-center justify-center text-gray-700">
            Online Status : {"  "}
            {onlineStatus ? (
              <div className="bg-emerald-500 w-4 h-4 rounded-full py-0 m-1 self-center">
                {" "}
              </div>
            ) : (
              <div className="bg-red-600 w-4 h-4 rounded-full py-0 m-1 self-center"></div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
