import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items)

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="text-center p-4 m-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}>Clear Cart
        </button>
        {cartItems?.length === 0 && <h1>The Cart is empty. Add items to the cart!!</h1>}
        <ItemList item={cartItems} />
      </div>
    </div>
  )
}

export default Cart;