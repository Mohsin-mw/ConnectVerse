import Settings from "../../assets/icons/Settings.svg"; // Import the Settings icon
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserProvider"; // Context for loggedin user

/**
 * UserCard component displays user information and settings icon.
 * Fetches user data using the useUser hook.
 */
const UserCard = () => {
  // Fetch user data using the custom hook
  // const { user } = useContext(UserContext);

  interface User {
    name: string;
    email: string;
    pic: string;
    _id: string;
  }
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const userInfo = localStorage.getItem("ConnectVerseUI");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  return (
    // Render the user card if user data is available
    user && (
      <div className="text-sonic-silver absolute bottom-0 bg-charleston-Green w-full font-medium px-4 py-2  flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4">
          {/* Display the user's avatar */}
          <img
            src={user.pic}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />

          {/* Display the user's username */}
          <div className="flex flex-col">
            <span className="font-medium text-french-gray text-sm">
              {user.name}
            </span>
            <span className="font-medium text-xs">userName</span>
          </div>
        </div>

        {/* Settings Button */}
        <Link
          to="/dashboard/settings/account"
          className="hover:bg-onyx p-1.5 rounded"
        >
          <img className="cursor-pointer" src={Settings} alt="Settings" />
        </Link>
      </div>
    )
  );
};

export default UserCard;
