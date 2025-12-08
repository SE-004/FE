import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  return (
    <ul className="grid grid-cols-3 gap-4 px-4 py-2">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </ul>
  );
};

export default ProductsList;
