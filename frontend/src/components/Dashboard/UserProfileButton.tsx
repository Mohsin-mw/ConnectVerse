import atIcon from "../../assets/icons/at.svg";

/**
 * UserProfileButton component will handle opening user's profile modal.
 */
const UserProfileButton = () => {
  return (
    // Button to toggle profile modal
    <button className="flex font-semibold gap-2 text-sm items-center">
      <img src={atIcon} /> Emily{" "}
      <div aria-hidden className="w-2 h-2 rounded-full bg-green"></div>
    </button>
  );
};

export default UserProfileButton;
