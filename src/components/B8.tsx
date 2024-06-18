import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, toggleTheme } from "../store/reducers/B8";

const B8: React.FC = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.themeReducer.isDarkMode
  );
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  const themeStyles = {
    backgroundColor: isDarkMode ? "black" : "white",
    color: isDarkMode ? "white" : "black",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={themeStyles}>
      <label>
        <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
        {isDarkMode ? "Tối" : "Sáng"}
      </label>
    </div>
  );
};

export default B8;
