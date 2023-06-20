/** @format */

import { createContext } from "react";
import Child from "./components/Child";
import GrandChild from "./components/GrandChild";
import Parent from "./components/Parent";
import { useState } from "react";
import Form from "./components/FormCompo/Form";
import ReducerCard from "./components/ReducerCard";

export const COUNT_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = { count, setCount };

  return (
    <>
      <div className="h-screen flex flex-col gap-10 justify-center items-center bg-[#2826284a] text-white">
        <COUNT_CONTEXT.Provider value={value}>
          {/* <Parent /> */}
          {/* <Child /> */}
          {/* <GrandChild /> */}
          <Form />
          {/* <ReducerCard /> */}
        </COUNT_CONTEXT.Provider>
      </div>
    </>
  );
}

export default App;
