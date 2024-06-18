import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRandomNumber } from "../store/reducers/B5";

export default function B5() {
  const dispatch = useDispatch();
  const randomNumbers = useSelector(
    (state: { randomNumbers: number[] }) => state.randomNumbers
  );

  const handleGenerateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    dispatch(addRandomNumber(randomNumber));
  };

  return (
    <div>
      <p>{JSON.stringify(randomNumbers)}</p>
      <button onClick={handleGenerateRandomNumber}>
        Generate Random Number
      </button>
    </div>
  );
}
