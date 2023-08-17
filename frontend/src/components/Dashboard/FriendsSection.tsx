import { Link } from "react-router-dom";
import friendIcon from "../../assets/icons/friends.svg";

/**
 * FriendsSection component represents the section displaying friends.
 * It includes an icon and label for the friends section.
 */
const FriendsSection = () => (
  // Replace div with link or button later
  <Link
    to="/dashboard/friends"
    className="text-french-gray font-medium flex gap-4 my-4 items-center hover:bg-onyx p-3 rounded text-sm hover:text-white  duration-100"
  >
    {/* Display the friends icon */}
    <img src={friendIcon} alt="Friends Icon" />

    {/* Display the label for the friends section */}
    <span>Friends</span>
  </Link>
);

export default FriendsSection;
