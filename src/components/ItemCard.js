import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCard = ({ item }) => {
  const { id, name, price, imgSrc } = item;
  const dispatch = useDispatch();
  function handleAddItem() {
    dispatch(addItem(item));
  }
  return (
    <div
      data-testid="resCard"
      className="w-[275px] h-[295px] p-3  rounded-lg hover:scale-95"
    >
      <img
        className="w-[100%] h-[60%] rounded-2xl"
        src={imgSrc}
        alt={name}
      ></img>
      <div className="flex items-center justify-between">
        <div className="text-xl pt-2 ">
          <h2>{name}</h2>
          <h5 className="py-0  font-[350] text-gray-800">₹ {price}</h5>
        </div>
        <button className="border p-1" onClick={handleAddItem}>
          Add
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
