import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Cardsdata from "./CardsData";

// console.log('data is ', Cardsdata);

const ProductDetails = () => {
  const { productId } = useParams();
  // const[data, setData] = useState(dedailProduct)

  const dedailProduct = Cardsdata.find((item) => {
    return item.id === parseInt(productId);
  });
  // console.log(dedailProduct);

  return (
    <>
      <h1>Product details</h1>
      {/* <p> {dedailProduct.rname} </p> */}

      <div className="productbox">
        <div className="detailbox">
          <div className="card  w-50" key={dedailProduct.id}>
            <img
              className="card-img-top"
              src={dedailProduct.imgdata}
              alt="Card image"
            />
            <div className="card-body">
              <h4 className="card-title">{dedailProduct.rname}</h4>
              <p className="card-text">{dedailProduct.price}</p>
              <a href="#" className="btn btn-primary">
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
