import { Link } from "react-router-dom";
import useServers from "../../hooks/useServers";
import logo from "../../assets/logo.png";

/**
 * Sidebar component that displays navigation links and icons.
 * @component
 */
const Sidebar = () => {
  // Hook to receive Servers
  const { servers } = useServers();

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex w-20 flex-col">
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-raisin-black px-4">
          <div className="flex-1">
            {/* Discord Logo */}
            <div className="flex items-center justify-center py-4 border-b-dark-charcoal border-b-2">
              <img className="h-8 scale-150 w-auto" src={logo} />
            </div>

            {/* Navigation Links */}
            <nav
              aria-label="Sidebar"
              className="flex flex-col items-center space-y-3 py-6"
            >
              {servers &&
                servers.map((server) => (
                  <Link
                    key={server.name}
                    to="/dashboard"
                    className="flex items-center rounded-lg"
                  >
                    <img className="w-12 h-12 object-cover" src={server.icon} />
                    <span className="sr-only">{server.name}</span>
                  </Link>
                ))}
            </nav>

            {/* Add Server Button */}
            <img
              className="cursor-pointer"
              src="https://i.ibb.co/12qq3Ly/Add-Server.png"
            />

            {/* Discovery Button */}
            <img
              className="my-4 cursor-pointer"
              src="https://i.ibb.co/Jq3Ff6s/Discovery.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
