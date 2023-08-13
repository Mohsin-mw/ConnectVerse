/**
 * Logo Component
 *
 * The Logo component displays the application logo.
 *
 * @param {LogoProps} props - The props for the Logo component.
 * @returns {JSX.Element} - The rendered Logo component.
 */
import React from "react";

interface LogoProps {
  className: string;
}

const Logo: React.FC<LogoProps> = ({ className }: LogoProps): JSX.Element => {
  return (
    <img
      className={className}
      src="https://i.ibb.co/T2Qy1NQ/discord-logo-blue.png"
      alt="Application Logo"
    />
  );
};

export default Logo;
