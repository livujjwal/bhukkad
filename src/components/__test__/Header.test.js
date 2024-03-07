import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

//npm run test
it("Should load Header component with image tag on webpage", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const img = screen.getByRole("img");

  //Assertion
  expect(img).toBeInTheDocument();
});
it("Should render Header component with login btn on webpage", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

//   const btn= screen.getByRole("button");
//   const btn= screen.getByRole("button",{name : "Login : Dummy User"});
  const btn= screen.getByText("Login : Dummy User");

  //Assertion
  expect(btn).toBeInTheDocument();
});
it("Should change  login btn to logout on click", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );
  const loginbtn= screen.getByRole("button",{name : "Login : Dummy User"});    
  fireEvent.click(loginbtn)
  const logoutbtn= screen.getByRole("button",{name : "Logout : Dummy User"});    

  //Assertion
  expect(logoutbtn).toBeInTheDocument();
});
it("Should render Header component with cart on webpage", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const cart= screen.getByText("Cart");

  //Assertion
  expect(cart).toBeInTheDocument();
});
it("Should change login btn name on click to logout",async () => {
  await act(async()=> render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header/>
    </Provider>
    </BrowserRouter>
  ))
  const loginBtn =screen.getByRole("button",{target : {name : "Login"}})
  fireEvent.click(loginBtn)
  expect(screen.getByRole("button",{target : {name : "Logout"}}))
})