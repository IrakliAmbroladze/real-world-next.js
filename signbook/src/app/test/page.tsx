"use client";
import React, { useReducer } from "react";

const Page = () => {
  const initValue = { age: 42 };
  const reducer = (state: { age: number }, action: { type: string }) => {
    switch (action.type) {
      case "INCREMENT_AGE":
        return { age: state.age++ };
      case "DECREMENT_AGE":
        return { age: state.age-- };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initValue);
  const handleIncrementClick = () => {
    dispatch({ type: "INCREMENT_AGE" });
  };
  const handleDecrementClick = () => {
    dispatch({ type: "DECREMENT_AGE" });
  };
  return (
    <div className="p-20">
      <button
        onClick={handleIncrementClick}
        className="border rounded-lg p-2.5"
      >
        Increment age
      </button>
      <button
        onClick={handleDecrementClick}
        className="border rounded-lg p-2.5"
      >
        Decrement age
      </button>
      <p className="mt-5">
        Hello! You are <span>{state.age}</span>.
      </p>
    </div>
  );
};

export default Page;
