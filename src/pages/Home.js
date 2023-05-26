import { Link } from "react-router-dom";
import ProductService from "../services/product.service";
import { useEffect, useState } from "react";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await ProductService.getAll();
      setProducts(res.products);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>Products :</h2>
        <ul>
          {products.length > 0 &&
            products.map((product) => {
              return (
                <li key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    {product.id} {product.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
