import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>NC News</h1>
      <nav>
        <Link to="/">Home Page</Link>
        <Link to="/articlepage">Article Page</Link>
        <Link to="/userform">User Form</Link>
      </nav>
    </div>
  );
};

export default Header;
