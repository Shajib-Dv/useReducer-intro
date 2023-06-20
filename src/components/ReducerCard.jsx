/** @format */

import { useReducer } from "react";
import Card from "./Card";

const ReducerCard = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "DECREMENT") {
      return state - action.payload;
    } else if (action.type === "INCREMENT") {
      return state + action.payload;
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Card>
      <p>{state}</p>
      <div className="flex justify-center items-center gap-4 pt-4">
        <button
          onClick={() => dispatch({ type: "DECREMENT", payload: 2 })}
          className="btn btn-error"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "INCREMENT", payload: 2 })}
          className="btn btn-warning"
        >
          Increment
        </button>
      </div>
    </Card>
  );
};

export default ReducerCard;
