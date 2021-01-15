import { Link } from "react-router-dom";

// stateless functional component
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Basic blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
