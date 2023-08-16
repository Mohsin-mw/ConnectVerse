type ToggleButtonProps = {
  children: React.ReactNode;
};
/**
 * Props for the ToggleButton component.
 * @typedef {Object} ToggleButtonProps
 * @property {React.ReactNode} children - The content to be displayed inside the ToggleButton.
 */

/**
 * A ToggleButton component that wraps its children inside a styled container.
 * @param {ToggleButtonProps} props - The props for the ToggleButton component.
 * @returns {JSX.Element} - The ToggleButton JSX element.
 */

const ToggleButton = ({ children }: ToggleButtonProps): JSX.Element => {
  /**
   * Render a ToggleButton component.
   * @returns {JSX.Element} - The ToggleButton JSX element.
   */
  return <div className="relative h-[60px] w-[60px] ">{children}</div>;
};

export default ToggleButton;
