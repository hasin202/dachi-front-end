import { useReducer, useContext } from "react";
import { cartContext } from "./cart_context";
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
  }
};

const Reducer = () => {
  const { name, age, sayHi } = useContext(cartContext);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const add = () => {
    dispatch({ type: "add" });
  };
  return (
    <div>
      <button onClick={sayHi}>+</button>
      <p>{state.count}</p>
    </div>
  );
};

export default Reducer;
