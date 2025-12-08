const ProductCard = ({ product }) => {
  return (
    <li className="grid gap-2 items-center justify-center border shadow rounded py-2">
      <p>Name: {product.name}</p>
      <p>Price: {product.price}$</p>
      <p>Quantity: {product.quantity}</p>
      <p>Rating: {product.rating}</p>
      <button className="border rounded bg-gray-200 cursor-pointer ">
        View more
      </button>
    </li>
  );
};

export default ProductCard;
