import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import inboxIcon from "../../assets/icons/inbox.svg";
import { Tab } from "@headlessui/react";
import FriendRequest from "./FriendRequest";
import useFriendRequests from "../../hooks/useFriendRequests";

{
  /**
   * Inbox Popup component is responsible for opening and closing popup to show unreads, friend
   * requests and mentions
   * @component
   */
}
function InboxPopup() {
  // Get friend requests
  const { friendRequests } = useFriendRequests();
  return (
    <Popover className="relative shrink-0 h-[18px]">
      <>
        {/* Inbox button to toggle popover */}
        <Popover.Button className="outline-none h-[inherit]">
          <span aria-hidden hidden>
            Inbox
          </span>
          <img src={inboxIcon} />
        </Popover.Button>

        {/* Transitions */}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          {/* Panel To render the inbox content */}
          <Popover.Panel className="absolute z-10 right-0 mt-2 rounded">
            <div className="max-h-[70vh] min-w-[480px]  relative bg-dark-charcoal rounded-[4px] flex flex-col overflow-hidden ">
              <div className="bg-raisin-black px-3 py-4 ">
                <div className="items-center flex gap-3 justify-start">
                  <img src={inboxIcon} alt="inbxicon" />
                  <p className="leading-[24px] font-semibold">Inbox</p>
                </div>
              </div>

              {/* Tab group */}
              <Tab.Group>
                <Tab.List className="flex items-center py-3 px-4 gap-2 text-sm font-medium text-french-gray bg-raisin-black">
                  {/* Tab - triggers for you */}
                  <Tab
                    className={({ selected }) =>
                      `py-0.5 px-1.5 rounded hover:bg-dark-charcoal ${
                        selected
                          ? "bg-dark-charcoal hover:bg-charleston-Green text-white"
                          : ""
                      }`
                    }
                  >
                    For You
                  </Tab>

                  {/* Tab - triggers unreads */}
                  <Tab
                    className={({ selected }) =>
                      `py-0.5 px-1.5 rounded hover:bg-dark-charcoal ${
                        selected
                          ? "bg-dark-charcoal hover:bg-charleston-Green text-white"
                          : ""
                      }`
                    }
                  >
                    Unreads
                  </Tab>

                  {/* Tab - Triggers mentions */}
                  <Tab
                    className={({ selected }) =>
                      `py-0.5 px-1.5 rounded hover:bg-dark-charcoal ${
                        selected
                          ? "bg-dark-charcoal hover:bg-charleston-Green text-white"
                          : ""
                      }`
                    }
                  >
                    Mentions
                  </Tab>
                </Tab.List>

                <Tab.Panels className="overflow-x-hidden overflow-y-auto">
                  {/* Panel 1 - For you */}
                  <Tab.Panel>
                    {friendRequests.map((friendRequest) => (
                      <FriendRequest
                        key={friendRequest.userName}
                        friendRequest={friendRequest}
                      />
                    ))}
                  </Tab.Panel>
                  {/* Panel 2 - Unreads */}
                  <Tab.Panel className="p-4">panel 2</Tab.Panel>
                  {/* Panel 3 - Mentions */}
                  <Tab.Panel className="p-4">panel 3</Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
}

export default InboxPopup;
