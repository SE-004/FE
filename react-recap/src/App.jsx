import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductsList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <h1 className="text-2xl font-semibold">My E-commerce App</h1>
      <ProductForm setProducts={setProducts} />
      <button
        onClick={(e) => {
          setProducts([]);
        }}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete Products
      </button>
      <ProductsList products={products} />
    </>
  );
}

export default App;
