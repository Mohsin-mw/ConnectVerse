import React from "react";
import { type FriendRequest } from "../../common";
import { formatDate } from "../../utils/Helpers";

interface FriendRequestProps {
  friendRequest: FriendRequest;
}

function FriendRequest({ friendRequest }: FriendRequestProps) {
  return (
    <div className="text-white py-4 px-2 hover:text-white text-sm cursor-pointer flex flex-row items-center justify-start gap-2 hover:bg-charleston-Green duration-100 ">
      {/* Display the user's avatar */}
      <div>
        <img
          src={friendRequest.avatar}
          alt={friendRequest.userName}
          className="w-9 h-9"
        />
      </div>

      {/* Display the user's username and activity */}
      <div className="truncate flex-1">
        {/* Truncate class added ellipsis(...) on overflow  */}
        <p className="text-french-gray" title={friendRequest.userName}>
          {friendRequest.userName} has{" "}
          <strong className="font-medium text-white">
            {friendRequest.status}
          </strong>{" "}
          your friend request.
        </p>
        <p className="text-xs text-french-gray font-medium">
          {formatDate(friendRequest.date)}
        </p>
      </div>
    </div>
  );
}

export default FriendRequest;
