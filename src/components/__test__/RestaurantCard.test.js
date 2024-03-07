import { render ,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mockData/ResMockData.json";
import "@testing-library/jest-dom";


//npm run test
//npm run watch-test for auto refresh
it("Should render RestaurantCard with mock data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("7th Heaven");

  expect(name).toBeInTheDocument();
});
it("Should render RestaurantCard with mock data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const rating = screen.getByText("4.4");

  expect(rating).toBeInTheDocument();
});
