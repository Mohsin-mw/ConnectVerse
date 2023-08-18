import inboxIcon from "../../assets/icons/inbox.svg";
import helpIcon from "../../assets/icons/help.svg";
import msgIcon from "../../assets/icons/messageIcon.svg";
import friendIcon from "../../assets/icons/friends.svg";
import React, { useEffect, useRef } from "react";

/**
 * Topbar component represents the section containing various buttons and icons.
 *
 */

function TopBar() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="w-full text-white py-4 px-4 h-16 border-b-raisin-black border-b-2 items-center justify-between flex gap-6">
      {/* User Profile Button : Will be used later to open profile modal */}
      <div className="flex">
        <button className="flex font-semibold gap-2 text-sm items-center pr-5 border-r border-arsenic">
          <img className="mr-1" src={friendIcon} /> Friends
        </button>
        {/*  Buttons for online all pending blocked add friend */}
        <div className="flex gap-6 [&>button]:shrink-0 [&>button]:p-[5px] [&>button]:rounded-md [&>button]:text-base">
          <button className=" bg-[#202225] ml-5">Online</button>
          <button className="">All</button>
          <button className="">Pending</button>
          <button className="">Blocked</button>
          <button className="bg-[#248046] text-white">Add Friend</button>
        </div>
      </div>
      <div className="flex gap-6">
        <button>
          <img src={msgIcon} />
        </button>
        <button
          className="topbarinbox"
          onClick={() => {
            return setShowModal(!showModal);
          }}
        >
          <img src={inboxIcon} />
        </button>
        <button>
          <img src={helpIcon} />
        </button>
      </div>

      {showModal && (
        <div className="absolute top-[44px] right-[48px]">
          <div>
            <div className="max-h-[80vh] w-[35vw] min-w-[480px]  relative bg-[#2a2d31] rounded-[4px] flex flex-col border-box  overflow-hidden ">
              <div className="bg-[#1f1f22] md:min-h-[88px] px-[12px] py-[16px] ">
                <div className="pb-[8px] items-center flex">
                  <img src={inboxIcon} alt="inbxicon" className="mr-[8px]" />
                  <div className="text-[20px] leading-[24px] flex-1 font-semibold">
                    Inbox
                  </div>
                  <div aria-label="View Friend Requests">
                    <div
                      className="cursor-pointer px-[4px] py-[8px] h-[20px] rounded-[20px] flex gap-[8px] items-center"
                      role="button"
                      tabIndex="0"
                    >
                      <div className="w-[16px] flex items-center">0</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-[32px] items-center ">
                  <div className="flex [&>div]:h-[24px] [&>div]:rounded-[4px] [&>div]:py-[2px] [&>div]:px-[8px] [&>div]:mr-[8px] ">
                    <div className="bg-[#2e2e33] ">For You</div>
                    <div>Unreads</div>
                    <div>Mentions</div>
                  </div>
                  <div className="flex ml-[auto]">
                    <div
                      className="h-[32px] w-[32px] min-w-[32px] min-h-[32px]"
                      aria-label="Mark All as Read"
                      role="button"
                      tabIndex="0"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="overflow-x-hidden overflow-y-scroll px-[16px]">
                <div className="opacity-100 height-[auto]">
                  <div className="pb-[16px]">
                    <div
                      className="items-center border-box flex h-[64px] pb-[12px] pt-[12px] sticky top-[0px]"
                      role="listitem"
                      data-list-item-id="unreads___recents-header-1087214653186261092-uid_23525"
                      tabIndex="0"
                      data-recents-channel="1087214653186261092"
                    >
                      <div
                        className="mr-[16px] cursor-pointer w-[40px] h-[40px] rounded-[12px] relative "
                        aria-hidden="true"
                        tabIndex="-1"
                        role="button"
                      ></div>
                      <div className="flex ">
                        <h1
                          className="h-[20px] text-[16px]  leading-[20px] font-semibold"
                          data-text-variant="heading-md/semibold"
                        >
                          <div
                            className="items-center cursor-pointer overflow-hidden whitespace-nowrap break-all w-full"
                            role="button"
                            tabIndex="0"
                          >
                            <span className="">channel name</span>
                          </div>
                        </h1>
                        <div className="text-[12px] leading-[16px] font-[400]">
                          <div
                            className="max-h-[16px] inline-block overflow-hidden "
                            role="button"
                            tabIndex="0"
                          >
                            channel name {">"} group name
                          </div>
                        </div>
                      </div>
                      <div
                        className="h-[32px] w-[32px] flex items-center justify-content-center rounded-[50%] "
                        aria-label="Notification Settings"
                        role="button"
                        tabIndex="0"
                      ></div>
                      <div
                        className="h-[32px] w-[32px] flex items-center justify-content-center rounded-[50%] "
                        aria-label="Mark As Read"
                        role="button"
                        tabIndex="0"
                      ></div>
                      <div
                        className="cabsolute w-[16px] h-[16px] p-[2px] left-[-6px]"
                        aria-label="Collapse"
                        role="button"
                        tabIndex="0"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopBar;
