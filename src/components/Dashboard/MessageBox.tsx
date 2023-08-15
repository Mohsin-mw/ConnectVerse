import { useState } from "react";

/**
 * Message component will be responsible for sending messages and media uploads.
 */
const MessageBox = () => {
  // State to store the message
  const [message, setMessage] = useState("");
  return (
    <div className="bg-dark-charcoal p-4 flex">
      <form className="flex-1 bg-charleston-Green shadow-lg rounded-md">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update the message based on user input
          placeholder="Message #General"
          className="w-full bg-transparent text-sonic-silver placeholder-sonic-silver focus:outline-none font-medium px-4 py-2 rounded-md"
        />
      </form>
    </div>
  );
};

export default MessageBox;
