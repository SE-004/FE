import { use } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router";

function Login() {
  const { user, login } = use(AuthContext);

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <form
      className="p-4 grid gap-2"
      onSubmit={(e) => {
        e.preventDefault();

        const data = {
          email: e.target.elements.email.value,
          password: e.target.elements.password.value,
        };

        login(data);
      }}
    >
      <input
        type="email"
        name="email"
        className="border border-gray-500 px-2 py-1"
        placeholder="Enter Email"
      />
      <input
        type="password"
        name="password"
        className="border border-gray-500 px-2 py-1"
        placeholder="Enter Password"
      />
      <input
        type="submit"
        value="Login"
        className="border border-gray-500 px-2 py-1 bg-slate-800 text-white"
      />
    </form>
  );
}

export default Login;
