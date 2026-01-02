import { Link } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        <ul>
            <Link to={"/home"}><li>Home Page</li></Link>
            <Link to={"/about"}><li>About Page</li></Link>
            <Link to={"/contact"}><li>Contact Page</li></Link>
        </ul>
    </div>
  )
}
export default Navbar
