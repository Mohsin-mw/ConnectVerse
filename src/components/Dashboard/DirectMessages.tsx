import useDirectMessages from "../../hooks/useDirectMessages";

/**
 * DirectMessages component displays a list of direct messages.
 *
 * @component
 */
const DirectMessages = () => {
  // Fetch direct messages using the custom hook
  const { dm } = useDirectMessages();

  return (
    <>
      {dm &&
        dm.map((message) => (
          <div
            key={message.avatar}
            className="text-sonic-silver font-medium px-4 py-2 rounded-md cursor-pointer my-2 flex flex-row  items-center justify-start gap-4 hover:bg-arsenic  duration-100 "
          >
            {/* Display the user's avatar */}
            <img src={message.avatar} alt={message.userName} />

            {/* Display the user's username */}
            <span>{message.userName}</span>
          </div>
        ))}
    </>
  );
};

export default DirectMessages;
