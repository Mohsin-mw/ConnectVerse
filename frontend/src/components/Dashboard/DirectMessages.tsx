import { Link } from "react-router-dom";
import useFriends from "../../hooks/useFriends";

/**
 * DirectMessages component displays a list of direct messages.
 *
 * @component
 */
const DirectMessages = () => {
  // Fetch friends using the custom hook
  const { friends } = useFriends();

  return (
    <>
      {friends &&
        friends.map((friend) => (
          <Link
            // Href to dm to start chatting.
            to={""}
            key={friend.userName}
            className="text-french-gray p-2 hover:text-white text-sm rounded-md cursor-pointer my-2 flex flex-row  items-center justify-start gap-4 hover:bg-arsenic  duration-100 "
          >
            {/* Display the user's avatar */}
            <div>
              <img src={friend.avatar} alt={friend.userName} />
              {/* Status : online, offline, busy yet to add */}
              <div></div>
            </div>

            {/* Display the user's username and activity */}
            <div className="truncate flex-1">
              {/* Truncate class added ellipsis(...) on overflow  */}
              <p className="font-medium" title={friend.userName}>
                {friend.userName}
              </p>
              <p className="text-xs" title={friend.activity}>
                {friend.activity}
              </p>
            </div>
          </Link>
        ))}
    </>
  );
};

export default DirectMessages;
