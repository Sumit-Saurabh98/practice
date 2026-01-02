import { useSelector } from "react-redux";

const Cart = () => {
  const stateValue = useSelector((state)=> state.cart)

  console.log(stateValue)

  return (
    <>
      <style>
        {`
          .cart {
            position: relative;
            font-size: 22px;
            cursor: pointer;
          }

          .badge {
            position: absolute;
            top: -8px;
            right: -10px;
            background-color: red;
            color: white;
            border-radius: 50%;
            padding: 2px 6px;
            font-size: 12px;
          }
        `}
      </style>

      <div className="cart">
        🛒
        <span className="badge">{stateValue.value}</span>
      </div>
    </>
  );
};

export default Cart;
