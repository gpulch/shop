import React, { useEffect, useState } from "react";
import ProductService from "../services/product.service";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addArticle, deleteArticle } from "../actions/basket/actions";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

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

  const deleteClick = () => {
    dispatch(deleteArticle(product.id));
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Description : {product.description}</p>
      <p>Price : {product.price}</p>
      <div className="images">
        {product?.images?.map((image, i) => {
          return <img key={i} src={image} />;
        })}
      </div>
      <button onClick={() => handleClick()}>add</button>
      <button onClick={() => deleteClick()}>delete</button>
    </div>
  );
};
