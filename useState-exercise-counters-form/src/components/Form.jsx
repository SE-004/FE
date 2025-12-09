import { useState } from "react";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.email &&
      formData.telephone &&
      formData.message
    ) {
      console.log(formData);
    }
  };
  return (
    <>
      <h1 className="text-2xl font-bold">Form:</h1>
      <form
        className="p-4 border border-gray-100 shadow rounded grid grid-cols-2 gap-2"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="name"
          className="border border-gray-200 rounded p-2"
          placeholder="Enter name"
          onChange={onChangeHandler}
        />
        <input
          type="email"
          name="email"
          className="border border-gray-200 rounded p-2"
          placeholder="Enter email"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="telephone"
          className="border border-gray-200 rounded p-2"
          placeholder="Enter telephone"
          onChange={onChangeHandler}
        />
        <textarea
          type="text"
          name="message"
          className="border border-gray-200 rounded p-2 col-span-2"
          placeholder="Enter message"
          onChange={onChangeHandler}
        />
        <input
          type="submit"
          className="border border-gray-200 rounded p-2 cursor-pointer bg-gray-100"
        />
      </form>
    </>
  );
};

export default Form;
