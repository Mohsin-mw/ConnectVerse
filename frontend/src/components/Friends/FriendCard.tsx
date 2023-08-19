import messageIcon from "../../assets/icons/messageIcon.svg";
import dots from "../../assets/icons/dots.svg";
import { Friend } from "../../common";

type FriendCardProps = {
  friend: Friend;
};

/**
 * Props for the FriendCard component.
 * @typedef {Object} FriendCardProps
 * @property {Friend} friend - The friend object containing information about the friend.
 */

/**
 * A component representing a card displaying friend information.
 * @component
 * @param {FriendCardProps} props - The props for the FriendCard component.
 * @returns {JSX.Element} The rendered FriendCard component.
 */

const FriendCard = ({ friend }: FriendCardProps): JSX.Element => {
  return (
    <div className="flex gap-4 items-center group justify-between text-french-gray transition-colors border-b-arsenic border-b-2 p-3 rounded-lg hover:bg-dark-charcoal">
      <div className="gap-2 flex flex-row">
        {/* Friend Avatar */}
        <img
          className="object-cover w-9 h-9"
          src={friend.avatar}
          alt={`${friend.userName}'s avatar`}
        />
        <div className="flex flex-col items-start justify-start px-2">
          {/* Friend Username */}
          <div className="text-sm font-medium text-white">
            {friend.userName}
          </div>
          {/* Friend Status */}
          <div className="text-xs font-medium">{friend.status}</div>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        {/* Message Icon */}
        <button className="w-9 h-9 bg-dark-charcoal group-hover:bg-charleston-Green p-1.5 grid place-items-center rounded-full cursor-pointer">
          <img src={messageIcon} alt="Message" className="mt-0.5" />
        </button>
        {/* Dots Icon */}
        <button className="w-9 h-9 bg-dark-charcoal group-hover:bg-charleston-Green p-2 grid place-items-center rounded-full cursor-pointer">
          <img src={dots} alt="Options" />
        </button>
      </div>
    </div>
  );
};

export default FriendCard;
