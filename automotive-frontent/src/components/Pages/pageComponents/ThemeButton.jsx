import useTheme from "../../../hooks/useTheme";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  const themeIconChanger = () => {
    if (theme == "dark") return <BsFillSunFill></BsFillSunFill>;
    else return <BsFillMoonFill></BsFillMoonFill>;
  };

  return (
    <button
      className=" p-1 md:p-2 border rounded-full mx-2 md:mx-5"
      onClick={toggleTheme}
    >
      {themeIconChanger()}
    </button>
  );
}
export default ThemeButton;
