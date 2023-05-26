import Nav from "../Nav";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import store from "../../store";

const BaseLayout = ({ children }) => {
  const count = useSelector((state) => state.articles.length);

  return (
    <>
      <header>
        <Nav />
        nb product : {count}
      </header>
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
