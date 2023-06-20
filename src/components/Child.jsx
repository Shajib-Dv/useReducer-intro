/** @format */

import { useContext } from "react";
import Card from "./Card";
import { COUNT_CONTEXT } from "../App";

const Child = () => {
  const { setCount } = useContext(COUNT_CONTEXT);
  return (
    <Card>
      <h2 className="text-xl">Child</h2>
      <div className="flex justify-center items-center gap-4 pt-4">
        <button
          onClick={() => setCount((previousValue) => previousValue - 1)}
          className="btn btn-error"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount((previousValue) => previousValue + 1)}
          className="btn btn-warning"
        >
          Increment
        </button>
      </div>
    </Card>
  );
};

export default Child;
