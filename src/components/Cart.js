import { useDispatch, useSelector } from "react-redux";
import { calculateBill, clearCart } from "../utils/cartSlice";
import CartItem from "./CartItem";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);
  let totalBill = cartItem.reduce((bill, { price }) => price + bill, 0);

  function handleClearCart() {
    dispatch(clearCart());
  }
  dispatch(calculateBill(totalBill));

  if (!cartItem) return "";
  return (
    <div className="w-1/2 mx-auto items-center justify-center pt-24 flex flex-col">
      <h1 className="text-2xl font-semibold">Cart</h1>
      <div className="w-full">
        <div className="flex p-2 items-center justify-start">
          <button
            onClick={handleClearCart}
            className="text-gray-700  hover:[color:tomato]"
          >
            Clear Cart
          </button>
        </div>
        <div className="w-full">
          {cartItem.map(({ id, price, name, imgSrc }) => (
            <CartItem props={{ id, price, name, imgSrc }} key={id} />
          ))}
        </div>
      </div>
      {totalBill == 0 ? (
        ""
      ) : (
        <div className="flex justify-end items-center  w-[80%] gap-4">
          <p className="text-gray-700"> ₹ {totalBill} </p>
          <button
            className="text-gray-700  hover:[color:tomato]"
            onClick={handleClearCart}
          >
            CheckOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
