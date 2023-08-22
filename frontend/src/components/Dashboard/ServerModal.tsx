import { useState } from "react";
import { Button, Input } from "..";
import axios from "axios";
import { toast } from "react-toastify";

type ServerModalProps = {
  server: boolean;
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

        {/* SERVER IMAGE:( will do it later) */}
        {/* <Input
          id="text"
          label="Server Name"
          type="text"
          value={serverName}
          className="bg-charleston-Green  border-sonic-silver rounded-md text-sonic-silver"
          onChange={(e) => setServerName(e.target.value)}
        /> */}

        {!loading ? (
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
        ) : null}
      </div>
    </div>
  );
};

export default ServerModal;
