import React, { useEffect, useState } from "react";
import ProductService from "../services/product.service";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "../actions/basket/actions";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.count);

  useEffect(() => {
    const fetchData = async () => {
      const res = await ProductService.get(id);
      setProduct(res);
    };

    fetchData();
  }, []);

  const handleClick = () => {
    dispatch(addArticle(product));
  };

  return (
    <div>
      toto
      <p>nb product : {articles}</p>
      <h1>{product.title}</h1>
      <p>Description : {product.description}</p>
      <p>Price : {product.price}</p>
      <div className="images">
        {product?.images?.map((image) => {
          return <img src={image} />;
        })}
      </div>
      <button onClick={() => handleClick()}>add</button>
    </div>
  );
};
