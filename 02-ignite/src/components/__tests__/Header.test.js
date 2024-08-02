import { Provider } from "react-redux"
import Header from "../Header"
import { fireEvent, render, screen } from "@testing-library/react"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("Should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )
  // const loginButton = screen.getByRole("button")

  // Following is for getting multiple buttons
  const loginButton = screen.getByRole("button", { name: "Login" })
  expect(loginButton).toBeInTheDocument();
})

it("Should render Header Component with Cart Items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )
  const cartItem = screen.getByText("Cart - (0 items)")
  expect(cartItem).toBeInTheDocument();
})

it("Should render Header Component with Cart Item is there or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )
  const cartItem = screen.getByText(/Cart/)
  expect(cartItem).toBeInTheDocument();
})

it("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
})