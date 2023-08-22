import { Link } from "react-router-dom";
import useServers from "../../hooks/useServers";
import logo from "../../assets/logo.png";
import { ServerModal, Tooltip } from "..";
import { useEffect, useState } from "react";
import axios from "axios";
/**
 * Sidebar component that displays navigation links and icons.
 * @component
 */
const Sidebar = () => {
  // Hook to receive Servers
  // const { servers } = useServers();
  interface Server {
    channels: string[];
    members: string[];
    owner: string;
    pic: string;
    serverName: string;
    _id: string;
  }
  const [servers, setServers] = useState<Server[]>([]);
  const [server, setServer] = useState(false);

  // Fetching servers:
  const fetchServers = async () => {
    try {
      const { data } = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/server/fetch-server",
        { withCredentials: true }
      );
      // console.log(data);
      const serverData: Server[] = data.servers;
      setServers(serverData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchServers();
  }, []);

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex w-[4.5rem] flex-col">
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-raisin-black px-2">
          <div className="flex-1">
            {/* Discord Logo */}
            <Link
              to="/dashboard"
              className="flex items-center justify-center py-4 border-b-dark-charcoal border-b-2"
            >
              <img className="h-8 scale-150 w-auto" src={logo} />
            </Link>

            {/* Server Links */}
            <div
              aria-label="Sidebar"
              className="flex flex-col items-center space-y-3 py-6"
            >
              {servers &&
                servers.map((server) => (
                  <Link
                    key={server._id}
                    to="/dashboard"
                    className="flex items-center rounded-lg"
                  >
                    <img
                      className="w-12 h-12 object-cover rounded-full"
                      src={server.pic}
                    />
                    <span className="sr-only">{server.serverName}</span>
                  </Link>
                ))}

              {/* Add Server Button */}
              <img
                onClick={() => setServer(!server)}
                className="cursor-pointer"
                src="https://i.ibb.co/12qq3Ly/Add-Server.png"
              />

              {/* Discovery Button */}
              <Tooltip title="Explore ServersF">
                <Link to="/dashboard/explore">
                  <img
                    className="cursor-pointer"
                    src="https://i.ibb.co/Jq3Ff6s/Discovery.png"
                  />
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <ServerModal server={server} setServer={setServer} />
    </div>
  );
};

export default Sidebar;
