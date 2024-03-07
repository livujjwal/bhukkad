import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

//npm run test
describe("Should check load of Contact Component", () => {

  beforeAll(()=>{
    console.log("Before All");
})

beforeEach(() => {
    console.log("Before Each");
})
  afterAll(()=>{
    console.log("Before All");
})

afterEach(() => {
    console.log("Before Each");
})


  test("Should load Contact component with a heading", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //Asserstion
    expect(heading).toBeInTheDocument();
  });
  test("Should load btn Contact component with a heading", () => {
    render(<Contact />);

    const btn = screen.getByText("Submit");

    //Asserstion
    expect(btn).toBeInTheDocument();
  });
  test("Should load btn in Contact component with a heading", () => {
    render(<Contact />);

    const heading = screen.getByRole("button");

    //Asserstion
    expect(heading).toBeInTheDocument();
  });
  test("Should load 2 i/p tag in Contact component with a heading", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    //Asserstion
    expect(inputBoxes.length).toBe(2);
  });
  
});
