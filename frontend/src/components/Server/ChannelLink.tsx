import { FiHash } from "react-icons/fi";
import { Link, LinkProps, useLocation } from "react-router-dom";
import { classNames } from "../../utils/Helpers";

/**
 * ChannelLink component is used for navigating between channels of server.
 * It takes same props as Link from react-router-dom and handles active states itself.
 * @param to - Link to the channel
 * @param className - Extra classes for the link
 * @param children - Content 
 * @returns `Link` - From react-router-dom 
 */
function ChannelLink({ className, to, children, ...props }: LinkProps) {
  const location = useLocation();
  return (
    <Link
      {...props}
      to={to}
      className={classNames(
        "text-sm gap-2 text-french-gray truncate transition-colors w-full font-medium flex items-center rounded py-1.5 px-2",
        // Active when the current channel is selected
        location.pathname == to
          ? "bg-onyx text-white"
          : "hover:bg-onyx hover:text-white",
        className
      )}
    >
      <span className="flex gap-0.5 border-r text-sonic-silver border-sonic-silver/30 pr-2 items-center">
        <FiHash size={20} />
      </span>
      {children}
    </Link>
  );
}

export default ChannelLink;
