import Nav from "../Nav";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import store from "../../store";

const BaseLayout = ({ children }) => {
  //   const articles = useSelector((state) => state.articles);
  const [articles, setArticles] = useState([]);
  console.log(store.getState());

  useEffect(() => {

  }, []);

  return (
    <>
      <header>
        <Nav />
      </header>
      {articles && console.log(articles)}
      {articles.count}
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
