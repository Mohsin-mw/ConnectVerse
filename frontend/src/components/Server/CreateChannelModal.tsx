import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Button, Input } from "..";
import { Server } from "../../common";

type CreateChannelModalProps = {
  serverDetails: Server | undefined;
  open?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 *
 * @param {Object} props - Props needed for CreateChannelModal
 * @prop {boolean} props.open - Opens on true and closes on false
 * @prop {React.Dispatch<React.SetStateAction<boolean>>} props.setOpen - handles opening and closing
 * @prop {Server} props.serverDetails - Details of the discord server
 * @returns
 */
function CreateChannelModal({
  open,
  setOpen,
  serverDetails,
}: CreateChannelModalProps) {
  const [channelName, setChannelName] = useState("");

  async function createChannel() {
    // LOGIC ABOVE
    setChannelName("");
  }
  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        onClose={() => setOpen(false)}
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
          <Dialog.Panel className="w-screen transition-transform bg-raisin-black shadow text-white max-w-xl rounded px-4 py-5">
            <div className="text-start mb-6">
              <Dialog.Title className="text-xl font-semibold">
                {serverDetails?.serverName}
              </Dialog.Title>
              <Dialog.Description className="max-w-md text-sm text-french-gray mt-3">
                Create a new text channel.
              </Dialog.Description>
            </div>
            <Input
              id="text"
              label="Channel Name"
              type="text"
              value={channelName}
              className="bg-charleston-Green border-sonic-silver/30 focus:ring focus:ring-primary/20 border focus:border-primary/50 rounded-sm text-white"
              labelClassName="text-white"
              onChange={(e) => setChannelName(e.target.value)}
            />
            <Button
              variant="solid"
              color="primary"
              className="mt-4 w-full"
              onClick={createChannel}
            >
              Create Channel
            </Button>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default CreateChannelModal;
