import React from "react";

type ProfileInputProps = {
  title: string;
  placeholder: string;
  state: string;
  setState: (state: string) => void;
  type: "text" | "email" | "password";
};

/**
 * Props for the ProfileInput component.
 *
 * @typedef {Object} ProfileInputProps
 * @property {string} title - The title or label for the input field.
 * @property {string} placeholder - The placeholder text for the input field.
 * @property {string} state - The current value of the input field.
 * @property {function(string): void} setState - The function to update the state when the input value changes.
 * @property {"text" | "email" | "password"} type - The type of input field.
 */

/**
 * ProfileInput component renders an input field with a title and placeholder.
 *
 * @param {ProfileInputProps} props - The component props.
 * @returns {JSX.Element} - The rendered ProfileInput component.
 * @component
 */
const ProfileInput = ({
  title,
  placeholder,
  state,
  setState,
  type,
}: ProfileInputProps) => {
  return (
    <div className="text-sm my-2">
      {/* Input Title */}
      <span className="block">{title}</span>
      {/* Input Field */}
      <input
        type={type}
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
        className="bg-charleston-Green w-full text-sonic-silver placeholder-sonic-silver focus:outline-none font-medium px-2 py-2 rounded-md"
      />
    </div>
  );
};

export default ProfileInput;
