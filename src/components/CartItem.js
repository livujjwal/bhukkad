const CartItem = ({ props }) => {
  const { id, price, name, imgSrc } = props;

  return (
    <div className="flex w-[80%] h-[6rem] items-center justify-between self-center mx-auto cursor-pointer">
      <img
        className="h-full p-2 rounded-xl hover:scale-[.98] "
        src={imgSrc}
        alt="item"
      />
      <div className="w-[20%]">
        <p>{name}</p>
        <p>₹ {price}</p>
      </div>
    </div>
  );
};

export default CartItem;
