const CartButton = ({ inCart, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-2 text-lg font-light bg-purple-700 text-white rounded-md focus:bg-purple-500"
    >
      {inCart ? "REMOVE" : "ADD TO CART"}
    </button>
  );
};

export default CartButton;
