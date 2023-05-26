import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Basket } from "./pages/Basket";
import { Error } from "./pages/Error";
import { Product } from "./pages/Product";
import BaseLayout from "./components/layouts/baseLayout";

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
