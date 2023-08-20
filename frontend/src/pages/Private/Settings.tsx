import { XCircleIcon } from "@heroicons/react/24/outline";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { SettingButtons } from "../../constants/Constants";

/**
 * Settings component displays user settings options and content.
 *
 * @component
 */
const Settings = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full flex flex-row text-sonic-silver">
      {/* User Settings Sidebar */}
      <div className="w-2/3 h-full bg-charleston-Green py-10 pr-6 flex flex-col items-end justify-start">
        <div className="font-medium w-56 py-1">
          <span className="px-2 text-xs">USER SETTINGS</span>
          {SettingButtons.map((button) => (
            <Link
              key={button.href}
              to={button.href}
              className="hover:bg-arsenic block duration-100 my-4 py-1 px-2 rounded-md"
            >
              {button.title}
            </Link>
          ))}
        </div>
      </div>
      {/* Settings Content */}
      <div className="w-full relative h-full bg-dark-charcoal py-10 pl-6">
        <div className="w-1/2">
          {/* Escape Or Back Button */}
          <button
            onClick={() => navigate("/dashboard")}
            className="absolute flex flex-col leading-tight items-center group text-sm text-sonic-silver right-20 top-10"
          >
            <XCircleIcon className="w-10 h-10 mb-1 group-hover:text-white transition-colors" />
            Back to
            <br /> dashboard
          </button>
          {/* Render nested route components */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Settings;
