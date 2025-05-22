import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Button = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      className={`${
        darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-700"
      } px-3 py-2 md:px-3 md:py-2 rounded-md cursor-pointer font-medium text-xs md:text-sm`}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <p>
          <span
            className={`${
              darkMode
                ? "transform inline-block rotate-180 transition-all"
                : "rotate-0"
            }`}
          >
            🔆
          </span>{" "}
          Light Mode
        </p>
      ) : (
        <p>
          <span>🌛</span> Dark Mode
        </p>
      )}
    </button>
  );
};

export default Button;
