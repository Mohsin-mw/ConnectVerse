import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { PiCaretDownBold } from "react-icons/pi";
import { RiLogoutCircleFill } from "react-icons/ri";
import { UserContext } from "../../context/UserProvider";
import { classNames } from "../../utils/Helpers";
import { Server } from "../../common";
import CreateChannelModal from "./CreateChannelModal";

interface ServerMenuProps {
  serverDetails: Server | undefined;
}

function ServerMenu({ serverDetails }: ServerMenuProps) {
  const [creatingChannel, setCreatingChannel] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <>
      <Menu as="div" className="relative">
        <Menu.Button
          aria-label="Server Options"
          className="w-6 h-6 hover:bg-onyx grid place-items-center rounded"
        >
          <PiCaretDownBold />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute text-french-gray outline-none right-0 top-full mt-1 p-1 text-[12px] font-medium rounded w-[200px] z-10 shadow bg-raisin-black">
            {user?._id == serverDetails?.owner && (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setCreatingChannel(true)}
                    className={classNames(
                      "rounded-sm items-center flex gap-1 justify-between w-full text-start py-1.5 px-2",
                      active ? "bg-primary text-gray-200" : ""
                    )}
                  >
                    Create Channel <FiPlus size={18} />
                  </button>
                )}
              </Menu.Item>
            )}
            <hr className="my-1.5 first:hidden last:hidden border-dark-charcoal" />
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    "rounded-sm items-center flex gap-1 justify-between w-full text-start py-1.5 px-2",
                    active ? "bg-red-500 text-gray-200" : "text-red-500"
                  )}
                >
                  Leave Server <RiLogoutCircleFill size={18} />
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* CREATE CHANNEL MODAL */}
      <CreateChannelModal
        open={creatingChannel}
        setOpen={setCreatingChannel}
        serverDetails={serverDetails}
      />
    </>
  );
}

export default ServerMenu;
