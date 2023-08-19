import { useState } from "react";
import { Button, Input } from "..";

type ServerModalProps = {
  server: boolean;
  setServer: (current: boolean) => void;
};

const ServerModal = ({ server, setServer }: ServerModalProps) => {
  const [serverName, setServerName] = useState("");

  const createServer = () => {};

  return (
    <div
      className={`${
        server ? "" : "hidden"
      } absolute w-screen h-screen z-40 backdrop-blur-sm rounded-md  flex items-center justify-center`}
    >
      <div className="w-1/4 rounded-md bg-charleston-Green text-sonic-silver py-5 px-5 flex flex-col items-start justify-center space-y-5">
        <Input
          id="text"
          label="Server Name"
          type="text"
          value={serverName}
          className="bg-charleston-Green  border-sonic-silver rounded-md text-sonic-silver"
          onChange={(e) => setServerName(e.target.value)}
        />
        <div className="flex flex-row items-center justify-center space-x-4">
          <div onClick={createServer}>
            <Button variant="outline" color="slate">
              Create
            </Button>
          </div>
          <div onClick={() => setServer(false)}>
            <Button variant="outline" color="slate">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerModal;
