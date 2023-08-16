import React, { useState } from "react";
import { Button, ProfileInput } from "../../components";

/**
 * Profile component displays user profile information and allows editing.
 *
 * @component
 */
const Profile = () => {
  // State variables for user profile information
  const [name, setName] = useState("Mohsin");
  const [email, setEmail] = useState("null.mmw@gmail.com");
  const [password, setPassword] = useState("123456789");

  /**
   * Handles the profile update action.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submit event.
   */
  const handleProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement your profile update logic here
  };

  return (
    <div>
      {/* Title */}
      My Account
      <div className="bg-raisin-black rounded-md overflow-hidden my-4">
        {/* Profile header */}
        <div className="h-28 bg-white" />
        <div className="pl-4">
          {/* Profile image */}
          <img
            className="border-8 rounded-full border-raisin-black -translate-y-5"
            src="https://i.ibb.co/h8C6k3R/Server-2.png"
            alt="Profile"
          />
        </div>
        {/* Profile form */}
        <form onSubmit={handleProfile} className="flex flex-col px-6">
          {/* Display Name input */}
          <ProfileInput
            title="DISPLAY NAME"
            placeholder={name}
            type="text"
            state={name}
            setState={setName}
          />
          {/* Email input */}
          <ProfileInput
            title="EMAIL"
            placeholder={email}
            type="email"
            state={email}
            setState={setEmail}
          />
          {/* Password input */}
          <ProfileInput
            title="Password"
            placeholder={password}
            type="password"
            state={password}
            setState={setPassword}
          />
          {/* Save button */}
          <button type="submit" className="my-4 flex flex-row items-start">
            <Button variant="outline" color="white">
              Save
            </Button>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
