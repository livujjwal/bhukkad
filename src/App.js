import React, { lazy, Suspense,useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
const AppLayout = () => {
  const [userName, setUserName] = useState("Ujjwal Singh");

  return (
    <div>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Provider store={appStore}>
          <Header />
          <Outlet />
        </Provider>
      </UserContext.Provider>
    </div>
  );
};
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <RestaurantMenu />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <AppLayout />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
