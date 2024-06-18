import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function B1() {
  const stateUser = useSelector((user) => {
    return user;
  });
  console.log(stateUser);
  return <div></div>;
}
