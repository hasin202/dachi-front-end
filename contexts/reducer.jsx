const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      console.log(state);
      localStorage.setItem(
        "cart",
        JSON.stringify([...state, action.payload.ticket])
      );
      location.reload();
      return [...state, action.payload.ticket];
    case "remove":
      console.log(action.payload);
      state = state.filter((e) => e.ticket_id != action.payload.ticket);
      localStorage.setItem("cart", JSON.stringify(state));
      location.reload();
      return [...state];
  }
};

export default reducer;
