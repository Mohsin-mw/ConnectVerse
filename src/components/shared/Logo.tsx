import logo from "../../assets/discordPrimary.png";

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
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }: LogoProps): JSX.Element => {
  return <img className={className} src={logo} alt="Application Logo" />;
};

export default Logo;
