import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCount } from "../actions";
export default function Count() {
  const stateCount: any = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(actionCount("INCREASE", 1));
  };
  const decrease = () => {
    dispatch({
      type: "DECREASE",
    });
  };

  return (
    <div>
      <p>Giá trị count:{stateCount.reducerCount}</p>
      <button onClick={increase}>tăng</button>
      <button onClick={decrease}>giảm</button>
    </div>
  );
}
