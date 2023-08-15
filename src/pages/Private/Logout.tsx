import { Button } from "../../components";

/**
 * Logout component displays a confirmation dialog for logging out.
 *
 * @component
 */
const Logout = () => {
  /**
   * Handles the logout action.
   */
  const logOutHandler = () => {
    // Your logout logic here
  };

  return (
    <div>
      {/* Title */}
      My Account
      <div className="my-4">
        {/* Confirmation message */}
        <div className="my-2 leading-relaxed">
          Are you sure you want to log out?
        </div>
        <div className="my-2 leading-relaxed">
          Logging out will securely end your session. If you wish to use your
          account again, you will need to log in.
        </div>
        <div className="my-2 leading-relaxed ">
          If you suspect any unauthorized activity or have any concerns about
          your account's security, please contact our support team immediately
          at support@yourwebsite.com.
        </div>
        {/* Logout button */}
        <div className="my-4 flex flex-row items-start" onClick={logOutHandler}>
          <Button className="text-inherit" variant="outline" color="white">
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
