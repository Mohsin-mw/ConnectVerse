import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import inboxIcon from "../../assets/icons/inbox.svg";

{/**
* Inbox Popup component is responsible for opening and closing popup to show unreads, friend
* requests and mentions
* @component
*/}
function InboxPopup() {
  return (
    <Popover className="relative">
      <>
        {/* Inbox button to toggle popover */}
        <Popover.Button className="outline-none">
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
          <Popover.Panel className="absolute z-10 right-0">
            <div className="max-h-[80vh] min-w-[480px]  relative bg-[#2a2d31] rounded-[4px] flex flex-col border-box  overflow-hidden ">
              <div className="bg-raisin-black px-[12px] py-[16px] ">
                <div className="pb-2 items-center flex gap-3 justify-start">
                  <img src={inboxIcon} alt="inbxicon" />
                  <p className="leading-[24px] font-semibold">Inbox</p>
                </div>
                <div className="flex items-center mt-3 gap-2 text-sm font-medium text-french-gray">
                  {/* Acitve state */}
                  <button className="py-0.5 px-1.5 rounded-sm hover:text-white hover:bg-dark-charcoal">
                    For You
                  </button>
                  <button className="py-0.5 px-1.5 rounded-sm hover:text-white hover:bg-dark-charcoal">
                    Unreads
                  </button>
                  <button className="py-0.5 px-1.5 rounded-sm hover:text-white hover:bg-dark-charcoal">
                    Mentions
                  </button>
                </div>
              </div>
              <div className="overflow-x-hidden overflow-y-auto px-[16px] min-h-[100px]">
                {/* Main content assigned to GraphX */}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
}

export default InboxPopup;
