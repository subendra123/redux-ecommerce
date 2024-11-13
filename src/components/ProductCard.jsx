import React, { useState } from "react";
import Data from "./CardsData";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

// console.log(Data);

const ProductCard = () => {
  const [product, setProduct] = useState(Data);

  const dispatch = useDispatch();

const AddProductToCart = (e) => {
  // console.log(e);

  dispatch(ADD(e));
  
  
}

  return (
    <>
    <Navbar />
      <div className="productbox">
        {product.map((item) => {
          const { id, rname, imgdata, price, qnty } = item;
          return (
            <>
              <div className="card" key={id}>
              <Link to={`/product/${id}`}>
                <img className="card-img-top" src={imgdata} alt="Card image" /> </Link>
                <div className="card-body">
                  <h4 className="card-title">{rname}</h4>
                  <p className="card-text">{price}</p>
                  <a href="#" className="btn btn-primary" onClick={ () => AddProductToCart(item)}>
                    Add To Cart
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductCard;
