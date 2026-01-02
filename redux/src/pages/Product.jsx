import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slice";
import { useEffect } from "react";
import { fetchProduct } from "../redux/productSlice";

const Product = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProduct())
    }, [])

    const productState = useSelector((state)=>state.products)   

  return (
    <>

      <div style={{display:"flex", flexWrap:"wrap"}}>
        {
  productState.products.length > 0 &&
  productState.products.map((product) => (
    <div
      className="product-card"
      key={product.id}
      style={{ width: "260px", margin: "12px" }}
    >
      <style>
        {`
          .product-card {
            border: 1px solid #e5e7eb;
            border-radius: 10px;
            padding: 12px;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .product-card img {
            width: 100%;
            height: 170px;
            object-fit: cover;
            border-radius: 8px;
          }

          .title {
            font-size: 15px;
            font-weight: 600;
            line-height: 1.3;
          }

          .brand {
            font-size: 13px;
            color: #6b7280;
          }

          .price-row {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .price {
            font-size: 16px;
            font-weight: bold;
            color: #16a34a;
          }

          .discount {
            font-size: 12px;
            color: #dc2626;
          }

          .rating {
            font-size: 13px;
            color: #f59e0b;
          }

          .description {
            font-size: 12px;
            color: #374151;
            line-height: 1.4;
          }

          .stock {
            font-size: 12px;
            font-weight: 600;
            color: ${product.stock > 0 ? "#15803d" : "#b91c1c"};
          }

          .btn-group {
            display: flex;
            gap: 8px;
            margin-top: 6px;
          }

          .add-btn {
            flex: 1;
            background: #2563eb;
            color: white;
            border: none;
            padding: 6px;
            border-radius: 4px;
            cursor: pointer;
          }

          .remove-btn {
            flex: 1;
            background: #dc2626;
            color: white;
            border: none;
            padding: 6px;
            border-radius: 4px;
            cursor: pointer;
          }

          .add-btn:hover {
            background: #1d4ed8;
          }

          .remove-btn:hover {
            background: #b91c1c;
          }
        `}
      </style>

      <img src={product.thumbnail} alt={product.title} />

      <div className="title">{product.title}</div>
      <div className="brand">
        {product.brand} • {product.category}
      </div>

      <div className="price-row">
        <span className="price">₹ {product.price}</span>
        <span className="discount">
          ({product.discountPercentage}% OFF)
        </span>
      </div>

      <div className="rating">
        ⭐ {product.rating} / 5
      </div>

      <div className="description">
        {product.description.slice(0, 80)}...
      </div>

      <div className="stock">
        {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </div>

      <div className="btn-group">
        <button
          className="add-btn"
          onClick={() => dispatch(addItem(1))}
        >
          Add
        </button>

        <button
          className="remove-btn"
          onClick={() => dispatch(addItem(-1))}
        >
          Remove
        </button>
      </div>
    </div>
  ))
}
      </div>
    </>
  );
};

export default Product;
