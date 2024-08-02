import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Body from "../Body"
import MOCK_DATA from "../mocks/resLinstMock.json"
// import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import { act } from "react"
// import { act } from "react"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA)
    }
  })
})

it("Should search Restaurant list for chinese text input ", async () => {
  await act(async () => render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  ));

  const cardsBeforeSearch = screen.getAllByTestId("resCard")

  expect(cardsBeforeSearch.length).toBe(8)

  const searchBtn = screen.getByRole("button", { name: "Search" })

  const searchInput = screen.getByTestId("searchInput")

  fireEvent.change(searchInput, { target: { value: "chinese" } })

  fireEvent.click(searchBtn)

  const cardsAfterSearch = screen.getAllByTestId("resCard")

  expect(cardsAfterSearch.length).toBe(1);
})

it("Should filter top rated Restaurants", async () => {
  await act(async () => render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  ));

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(0);

  const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" })

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard")

  console.log(cardsAfterFilter.length);

  expect(cardsAfterFilter.length).toBe(3);
})