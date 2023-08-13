type SocialSignInButtonProps = {
  clickHandler: () => void;
  platform: string;
  icon: React.ReactNode;
};
/**
 * SocialSignInButton Component
 *
 * The SocialSignInButton component displays a button for social media sign-in.
 *
 * @param {Object} SocialSignInButtonProps - The props for the SocialSignInButton component.
 * @param {() => void} SocialSignInButtonProps.clickHandler - The click handler function for the button.
 * @param {string} SocialSignInButtonProps.platform - The name of the social media platform (e.g., "Facebook", "Twitter", "GitHub").
 * @param {React.ReactNode} SocialSignInButtonProps.icon - The React node representing the icon for the social media platform.
 * @returns {JSX.Element} - The rendered SocialSignInButton component.
 */
const SocialSignInButton = ({
  clickHandler,
  platform,
  icon,
}: SocialSignInButtonProps): JSX.Element => {
  return (
    <div
      onClick={clickHandler}
      className=" cursor-pointer inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
    >
      <span className="sr-only">{platform}</span>
      <span className="w-4 h-4">{icon}</span>
    </div>
  );
};

export default SocialSignInButton;
