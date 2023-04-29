const Cart = () => {
  console.log(JSON.parse(localStorage.getItem("cart")));
  const cart = JSON.parse(localStorage.getItem("cart"));
  return (
    <div className="w-full bg-red-700">
      {cart.map((ticket) => (
        <p key={ticket.ticket_id}>{ticket.ticket_id}</p>
      ))}
    </div>
  );
};

export default Cart;
