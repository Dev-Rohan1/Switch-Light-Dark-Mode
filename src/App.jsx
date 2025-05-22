import { useContext } from "react";
import Button from "./components/Button";
import { ThemeContext } from "./contexts/ThemeContext";

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen transition-colors duration-300 p-10 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Toggle Light & Dark Mode
      </h1>
      <p className="mt-3 text-xs md:text-sm text-center">
        Click the button to switch between light and dark mode.
      </p>
      <div className="mt-5">
        <Button />
      </div>
    </div>
  );
};

export default App;
