import { useState } from "react";

/**
 * Searchbar component for entering conversation search queries.
 * Uses local state to manage the input value.
 */
const Searchbar = () => {
  // State to store the input value
  const [value, setValue] = useState("");

  return (
    // Render the input element for the search bar
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)} // Update the value based on user input
      placeholder="Start a conversation"
      className="bg-raisin-black w-full text-sm text-sonic-silver placeholder-sonic-silver focus:outline-none font-medium px-4 py-2 rounded-md"
    />
  );
};

export default Searchbar;
