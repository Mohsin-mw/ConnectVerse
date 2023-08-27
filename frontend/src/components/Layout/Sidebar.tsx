import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ServerModal, Tooltip } from "..";
import logo from "../../assets/logo.png";
import { Server } from "../../common";
/**
 * Sidebar component that displays navigation links and icons.
 * @component
 */
const Sidebar = () => {
  
  const [servers, setServers] = useState<Server[]>([]);
  const [server, setServer] = useState(false);

  const navigate = useNavigate();

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
      if (error.response.data.error === "No token!") {
        window.alert("please sign in again");
        localStorage.removeItem("ConnectVerseUI");
        navigate("/signin");
      }
    }
  };

  useEffect(() => {
    fetchServers();
  }, []);

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex w-[4.5rem] flex-col">
        <div className="flex min-h-0 relative flex-1 bg-raisin-black px-2">
          <div className="flex-1">
            {/* Discord Logo */}
            <Tooltip title="Dashboard">
              <Link
                to="/dashboard"
                className="flex items-center justify-center py-4 border-b-dark-charcoal border-b-2"
              >
                <img className="h-8 scale-150 w-auto" src={logo} />
              </Link>
            </Tooltip>

            {/* Server Links */}
            <div
              aria-label="Sidebar"
              className="flex flex-col items-center space-y-3 py-6"
            >
              {servers &&
                servers.map((server) => (
                  <Tooltip key={server._id} title={server.serverName}>
                    <Link
                      key={server._id}
                      to={`/dashboard/servers/${server._id}`}
                      className="flex items-center rounded-lg"
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full"
                        src={server.pic}
                      />
                      <span className="sr-only">{server.serverName}</span>
                    </Link>
                  </Tooltip>
                ))}

              {/* Add Server Button */}
              <Tooltip title="Create New Server">
                <img
                  onClick={() => setServer(!server)}
                  className="cursor-pointer"
                  src="https://i.ibb.co/12qq3Ly/Add-Server.png"
                />
              </Tooltip>

              {/* Discovery Button */}
              <Tooltip title="Discover">
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
