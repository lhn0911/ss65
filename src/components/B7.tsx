import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/reducers/B7";
import "../index.css";

export default function B7() {
  const dispatch = useDispatch();
  const theme = useSelector((state: { theme: string }) => state.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleToggleTheme}
        />
        {theme === "light" ? "Sáng" : "Tối"}
      </label>
    </div>
  );
}
