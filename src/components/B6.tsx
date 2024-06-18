import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCompany } from "../store/reducers/B6";

export default function B6() {
  const dispatch = useDispatch();
  const company = useSelector((state: { company: string }) => state.company);

  const handleChangeState = () => {
    dispatch(changeCompany());
  };

  return (
    <div>
      <h1>{company}</h1>
      <button onClick={handleChangeState}>Change state</button>
    </div>
  );
}
