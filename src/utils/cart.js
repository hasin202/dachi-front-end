const addToCart = (event, ticket) => {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(ticket);
  localStorage.setItem("cart", JSON.stringify(cart));
};

const removeFromCart = (event, ticket) => {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  //   cart = cart.splice(cart.indexOf(ticket), 1);
  cart = cart.filter((e) => e.ticket_id != ticket.ticket_id);

  localStorage.setItem("cart", JSON.stringify(cart));
};

export { addToCart, removeFromCart };
