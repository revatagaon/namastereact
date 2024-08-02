import { BrowserRouter } from "react-router-dom"
import RestaurantMenu from "../RestaurantMenu"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/resMenuMock.json"
import { act } from "react"
import { Provider } from "react-redux"
// import { act } from "react-dom/test-utils"
import appStore from "../../utils/appStore"
import Header from "../Header"
import Cart from "../Cart"

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(MOCK_DATA)
})
)

it("Should load Restaurant Menu component", async () => {
  await act(async () => render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </BrowserRouter>
  ))

  const accordionHeader = screen.getByText("Wholesome Khichdi (9)")

  fireEvent.click(accordionHeader)

  const itemList = screen.getAllByTestId("foodItems")

  expect(itemList.length).toBe(9)

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" })
  fireEvent.click(addBtns[0])

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(11)

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }))

  expect(screen.getAllByTestId("foodItems").length).toBe(9)

  expect(screen.getByText("The Cart is empty. Add items to the cart!!")).toBeInTheDocument();

})