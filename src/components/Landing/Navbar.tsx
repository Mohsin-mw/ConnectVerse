import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button } from "..";

/**
 * Navbar component for the application header, containing the logo and sign-up button.
 * @component
 */

const Navbar = () => {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        {/* Application Logo */}
        <Link to="/">
          <img
            className="h-28 md:scale-150  w-auto sm:h-10"
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>

      <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
        {/* Sign Up Button */}
        <Link to="/signIn">
          <Button variant="solid" color="slate">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
