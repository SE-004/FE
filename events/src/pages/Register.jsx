function Regisger() {
  return (
    <form className="p-4 grid gap-2">
      <input
        type="email"
        name="email"
        className="border border-gray-500 px-2 py-1"
      />
      <input
        type="password"
        name="password"
        className="border border-gray-500 px-2 py-1"
      />
      <input
        type="submit"
        value="Register"
        className="border border-gray-500 px-2 py-1 bg-slate-800 text-white"
      />
    </form>
  );
}

export default Regisger;
