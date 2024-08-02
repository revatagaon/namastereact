import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import { render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render RestaurantCard component with the props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />)
  const resName = screen.getByText("Chinese Wok");
  expect(resName).toBeInTheDocument();
})

it("Should render the RestaurantCars compoenent with the Promoted label", () => {
  // render(withPromotedLabel) home workkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
  
  // const resCardWithPromoted = screen.getByText("Promoted")
  // console.log(resCardWithPromoted);
})