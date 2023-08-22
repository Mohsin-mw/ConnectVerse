import { useState } from "react";
import { Icons, InboxPopup, AddFriendModal } from "..";
import helpIcon from "../../assets/icons/help.svg";
import msgIcon from "../../assets/icons/messageIcon.svg";

/**
 * Topbar component represents the section containing various buttons and icons.
 *
 */

function TopBar() {
  const [addFriendModalOpen, setAddFriendModalModal] = useState(false);
  return (
    <div className="w-full text-white py-4 px-4 h-16 border-b-raisin-black border-b-1 items-center justify-between flex gap-6">
      {/* User Profile Button : Will be used later to open profile modal */}
      <div className="flex">
        <button className="flex border-r font-semibold gap-2 text-sm items-center pr-5 border-sonic-silver">
          <Icons.Friend className="text-french-gray" /> Friends
        </button>
        {/*  Buttons for online all pending blocked add friend */}
        <div className="flex ml-4 font-medium gap-2 [&>button]:shrink-0 text-sm text-french-gray">
          <button className="py-0.5 px-1.5 rounded hover:bg-dark-charcoal">
            Online
          </button>
          <button className="py-0.5 px-1.5 rounded hover:bg-dark-charcoal">
            All
          </button>
          <button className="py-0.5 px-1.5 rounded hover:bg-dark-charcoal">
            Pending
          </button>
          <button className="py-0.5 px-1.5 rounded hover:bg-dark-charcoal">
            Blocked
          </button>
          <button
            onClick={() => setAddFriendModalModal(true)}
            className="bg-green rounded text-white py-.5 px-1.5"
          >
            Add Friend
          </button>
          <AddFriendModal
            open={addFriendModalOpen}
            setOpen={setAddFriendModalModal}
          />
        </div>
      </div>
      <div className="flex gap-6">
        <button>
          <img src={msgIcon} />
        </button>
        {/* Inbox Popup */}
        <InboxPopup />
        <button>
          <img src={helpIcon} />
        </button>
      </div>
    </div>
  );
}

export default TopBar;
