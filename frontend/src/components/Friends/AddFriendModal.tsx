import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";

interface AddFriendModalProps {
  open?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function AddFriendModal({ open, setOpen }: AddFriendModalProps) {
  const [username, setUsername] = useState("");

  function handleClose() {
    setOpen(false);
    setTimeout(() => {
      setUsername("");
    }, 201);
  }

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        onClose={() => handleClose()}
        className="absolute inset-0 z-10 grid place-items-center"
      >
        <Dialog.Backdrop
          className="fixed inset-0 bg-black/60"
          aria-hidden="true"
        />
        {/* Transitioning Panel */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-5 scale-95"
          enterTo="opacity-100 translate-y-0 scale-100"
        >
          {/* Main Content */}
          <Dialog.Panel className="min-h-[300px] transition-transform h-screen flex flex-col max-h-[70vh] w-screen bg-raisin-black shadow text-white max-w-xl rounded px-4 pt-4 pb-2">
            <input
              id="text"
              type="text"
              value={username}
              className="bg-charleston-Green outline-none block w-full py-2 px-3 border-sonic-silver/30 focus:ring focus:ring-primary/20 border focus:border-primary/50 rounded-sm text-white"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Search for users by their username..."
            />
            {!username ? (
              <div className="min-h-[200px] flex-1 grid place-items-center">
                <div className="text-center max-w-sm">
                  <p className="text-lg font-semibold mb-2">Search for users</p>
                  <p className="text-sm text-french-gray">
                    You can add friends by searching from their username.
                  </p>
                </div>
              </div>
            ) : (
              <div className="min-h-[200px] py-4 flex flex-col flex-1">
                <p className="text-sm mb-4 text-french-gray">
                  Search Results for{" "}
                  <span className="text-white">{username} :</span>{" "}
                </p>
                {/* Scrollable container */}
                <div className="flex-1 overflow-auto">
                  {/* Items received from search */}
                </div>
              </div>
            )}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default AddFriendModal;
