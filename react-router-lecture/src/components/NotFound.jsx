import { Link, useNavigate, Navigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-2xl font-bold mb-2">404 NOT Found</p>
      {/* <Link
        to="/"
        className="border border-slate-600 bg-slate-400 p-2  rounded "
      >
        Back
      </Link> */}
      <button
        onClick={(e) => {
          navigate(-1);
        }}
        className="border border-slate-600 bg-slate-400 p-2  rounded "
      >
        Back
      </button>
    </div>
  );
}

export default NotFound;
