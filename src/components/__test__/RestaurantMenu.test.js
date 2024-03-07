import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mockData/ResMenuMockData.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
const { render, screen, fireEvent } = require("@testing-library/react");

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render RestaurantMenu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const resName = screen.getByText("Grameen Kulfi");
  expect(resName).toBeInTheDocument;
});

it("Should render accordian items on click of header of accordian", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Slice Kulfi (4)");
  expect(accordianHeader).toBeInTheDocument;
  fireEvent.click(accordianHeader);

  const fooditems = screen.getAllByTestId("foodItem");
  expect(fooditems.length).toBe(4);
});

it("Should render add btn of ItmCard", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Slice Kulfi (4)");
  fireEvent.click(accordianHeader);
  const addBtns = screen.getAllByRole("button", { name: "ADD" });

  console.log(addBtns);
  expect(addBtns.length).toBe(4);
});

it("Should render updated cart in header on clilck of add item btn", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu></RestaurantMenu>
          <Header />
        </Provider>
      </BrowserRouter>
    ));
    fireEvent.click(screen.getByText("Slice Kulfi (4)"));
    const addBtns = screen.getAllByText("ADD")
    fireEvent.click(addBtns[0])
    fireEvent.click(addBtns[1])
    expect(screen.getByText("2 Cart")).toBeInTheDocument;

});
