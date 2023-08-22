import { Fragment, useEffect, useState } from "react";
import { Button, Input } from "..";
import axios from "axios";
import { toast } from "react-toastify";
import { Dialog, Transition } from "@headlessui/react";

type ServerModalProps = {
  server: boolean;
  open?: boolean;
  setServer: (current: boolean) => void;
};

const ServerModal = ({ server, setServer }: ServerModalProps) => {
  const [serverName, setServerName] = useState("");
  const [loading, setLoading] = useState(false);

  const createServer = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/server/create-server",
        { serverName },
        { withCredentials: true }
      );
      // console.log(data);

      setLoading(false);
      toast.success("Server Created", { theme: "dark" });
      setServer(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.response.data.error, { theme: "dark" });
    }
  };

  return (
    <Transition show={server} as={Fragment}>
      <Dialog
        onClose={() => setServer(false)}
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
          <Dialog.Panel className="transition-transform bg-raisin-black shadow text-white max-w-xl rounded px-4 py-5">
            <div className="text-center mb-6">
              <Dialog.Title className="text-xl font-semibold">
                Create New Server
              </Dialog.Title>
              <Dialog.Description className="max-w-md text-sm text-french-gray mt-3">
                Your server is where you and your friends hang out. Make yours
                and start talking.
              </Dialog.Description>
            </div>
            <Input
              id="text"
              label="Server Name"
              type="text"
              value={serverName}
              className="bg-charleston-Green border-sonic-silver/30 focus:ring focus:ring-primary/20 border focus:border-primary/50 rounded-sm text-white"
              labelClassName="text-white"
              onChange={(e) => setServerName(e.target.value)}
            />
            <Button
              variant="solid"
              color="primary"
              className="mt-4 w-full"
              onClick={createServer}
            >
              Create New Server
            </Button>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ServerModal;
