import Contact from "../Contact"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {

  // beforeAll(() => {
  //   console.log("Before All");
  // })

  // afterAll(() => {
  //   console.log("After All");
  // })

  // beforeEach(() => {
  //   console.log("Before Each");
  // })

  // afterEach(() => {
  //   console.log("After Each");
  // })

  test("should load contact us component", () => {
    render(<Contact />)

    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  })

  test("Should load button inside Contact us component", () => {
    render(<Contact />);
    // One Way
    // const button = screen.getByRole("button");
    // Another Way
    const button = screen.getByText("Submit");
    // Assertion
    expect(button).toBeInTheDocument();
  })

  it("Should load input name inside Contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Name")
    // Assertion
    expect(inputName).toBeInTheDocument();
  })

  it("Should load 2 input boxes on Contact component", () => {
    render(<Contact />);
    // This is called Querying
    const inputBoxes = screen.getAllByRole("textbox")
    // console.log(inputBoxes); //In the console you can see the React Element (Virtual DOM)
    // Assertion
    expect(inputBoxes.length).toBe(2);
    // OR
    expect(inputBoxes.length).not.toBe(3); // Not recommended
  })
})