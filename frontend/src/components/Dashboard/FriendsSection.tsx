import friendIcon from "../../assets/icons/friends.svg";

/**
 * FriendsSection component represents the section displaying friends.
 * It includes an icon and label for the friends section.
 */
const FriendsSection = () => (
  <div className="text-sonic-silver flex flex-row items-center justify-start px-4 py-4 gap-4 rounded-md my-4 cursor-pointer hover:bg-arsenic  duration-100">
    {/* Display the friends icon */}
    <img src={friendIcon} alt="Friends Icon" />

    {/* Display the label for the friends section */}
    <span>Friends</span>
  </div>
);

export default FriendsSection;
