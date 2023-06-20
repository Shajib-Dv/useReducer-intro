/** @format */

import { useContext } from "react";
import Card from "./Card";
import { COUNT_CONTEXT } from "../App";

const GrandChild = () => {
  const { count } = useContext(COUNT_CONTEXT);
  return (
    <Card>
      <h2 className="text-xl">GrandChild</h2>
      <p className="pt-4">{count}</p>
    </Card>
  );
};

export default GrandChild;
