import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantList from "../RestaurantList";
import MOCK_DATA from "../mockData/SearchMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should render RestaurantList Component search in it", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurantList />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByText("Search");

  expect(searchBtn).toBeInTheDocument();
});

it("Should render 20 restaurant card in the component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurantList />
      </BrowserRouter>
    )
  );
  const searchInput = screen.getByTestId("searchInput");
  expect(searchInput).toBeInTheDocument();
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(20);
});

it("Should render 3 restaurant on pizza search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurantList />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);
  const searchInput = screen.getByTestId("searchInput");
  expect(searchInput).toBeInTheDocument();
  const searchBtn = screen.getByText("Search");
  expect(searchBtn).toBeInTheDocument();

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(3);
});

it("Should render 9 restaurant in top rated category", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurantList />
      </BrowserRouter>
    )
  );

  const topRatedBtn = screen.getByRole("button", { name: "Top Rated" });
  expect(topRatedBtn).toBeInTheDocument();
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  fireEvent.click(topRatedBtn);

  const cardsAfter = screen.getAllByTestId("resCard");
  expect(cardsAfter.length).toBe(9);
});
