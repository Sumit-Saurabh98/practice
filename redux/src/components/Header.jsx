import { useDispatch } from "react-redux";
import Cart from "../pages/Cart";
import { clearCart } from "../redux/slice";

const Header = () => {

    const dispatch = useDispatch()
  return (
    <>
      <style>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 20px;
            background-color: #1f2937;
            color: white;
          }

          .menu {
            display: flex;
            gap: 20px;
          }

          .menu a {
            color: white;
            text-decoration: none;
            font-size: 16px;
            cursor: pointer;
          }

          .menu a:hover {
            text-decoration: underline;
          }

          .clear-btn {
            background: #dc2626;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 4px;
            cursor: pointer;
          }
        `}
      </style>

      <header className="header">
        <nav className="menu">
          <a>Home</a>
          <a>Products</a>
          <a>About</a>
          <a>Contact</a>
        </nav>

        <button onClick={()=>dispatch(clearCart())} className="clear-btn">Clear Cart</button>

        <Cart />
      </header>
    </>
  );
};

export default Header;
