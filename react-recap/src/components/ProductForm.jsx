const ProductForm = ({ setProducts }) => {
  const submit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: crypto.randomUUID(),
      name: e.target.elements.name.value,
      price: e.target.elements.price.value,
      quantity: 1,
      rating: 0,
    };

    setProducts((products) => [...products, newProduct]);
  };

  return (
    <form onSubmit={submit}>
      <input
        className="border border-gray-400 rounded px-2 py-1"
        type="text"
        name="name"
      />
      <input
        className="border border-gray-400 rounded px-2 py-1"
        type="number"
        name="price"
      />
      <input
        className="border border-gray-400 rounded px-2 py-1"
        type="submit"
        value="Submit"
      />
    </form>
  );
};

export default ProductForm;
