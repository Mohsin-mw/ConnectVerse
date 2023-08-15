import useUser from "../../hooks/useUser"; // Import the custom hook for fetching user data
import Settings from "../../assets/icons/Settings.svg"; // Import the Settings icon
import { Link } from "react-router-dom";

/**
 * UserCard component displays user information and settings icon.
 * Fetches user data using the useUser hook.
 */
const UserCard = () => {
  // Fetch user data using the custom hook
  const { user } = useUser();

  return (
    // Render the user card if user data is available
    user && (
      <div className="text-sonic-silver bg-charleston-Green w-full font-medium px-4 py-4  flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4">
          {/* Display the user's avatar */}
          <img src={user.avatar} alt="User Avatar" />

          {/* Display the user's username */}
          <div className="flex flex-col">
            <span className="font-bold">{user.name}</span>
            <span className="font-medium text-xs">{user.userName}</span>
          </div>
        </div>

        {/* Settings Button */}
        <Link to="/dashboard/settings/account">
          <img className="cursor-pointer" src={Settings} alt="Settings" />
        </Link>
      </div>
    )
  );
};

export default UserCard;
