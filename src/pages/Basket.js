import { useSelector, useDispatch } from "react-redux";
import { deleteArticle } from "../actions/basket/actions";

export const Basket = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.articles);

  const deleteClick = (id) => {
    dispatch(deleteArticle(id));
  };
  
  return (
    <div>
      <h1>In your basket :</h1>
      <ul>
        {products.length > 0 &&
          products.map((product) => {
            return (
              <li key={product.id}>
                {product.id} {product.title} : {product.price} €
                <button onClick={() => deleteClick(product.id)}>delete</button>
              </li>
            );
          })}
      </ul>
      final price : {products.reduce((acc, product) => acc + product.price, 0)}
    </div>
  );
};
