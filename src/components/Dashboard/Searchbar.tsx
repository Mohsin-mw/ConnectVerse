import { useState } from "react";

const Searchbar = () => {
  const [value, setValue] = useState("");
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Start a conversation"
      className="bg-raisin-black text-sonic-silver placeholder-sonic-silver focus:outline-none  font-medium px-2 py-2 rounded-md "
    />
  );
};

export default Searchbar;
