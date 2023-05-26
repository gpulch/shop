import { useSelector } from "react-redux";

export const Basket = () => {
  const products = useSelector((state) => state.articles);

  console.log(products);

  return (
    <div>
      <h1>Basket</h1>
      <ul>
        {products.length > 0 &&
          products.map((product) => {
            return (
              <li key={product.id}>
                {product.id} {product.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
