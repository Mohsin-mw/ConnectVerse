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
    <div className="flex flex-row items-center justify-between text-sonic-silver border-b-arsenic border-b-2 py-4">
      <div className="flex flex-row">
        {/* Friend Avatar */}
        <img
          className="object-cover w-10 h-10"
          src={friend.avatar}
          alt={`${friend.userName}'s avatar`}
        />
        <div className="flex flex-col items-start justify-start px-2">
          {/* Friend Username */}
          <div className="text-lg">{friend.userName}</div>
          {/* Friend Status */}
          <div className="text-sm">{friend.status}</div>
        </div>
      </div>
      <div className="flex flex-row gap-x-8">
        {/* Message Icon */}
        <div className="w-10 h-10 bg-charleston-Green p-2 flex items-center justify-center rounded-full cursor-pointer">
          <img src={messageIcon} alt="Message" />
        </div>
        {/* Dots Icon */}
        <div className="w-10 h-10 bg-charleston-Green p-2 flex items-center justify-center rounded-full cursor-pointer">
          <img src={dots} alt="Options" />
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
