type RememberMeProps = {
  onClick: () => void;
};

/**
 * RememberMe Component
 *
 * The RememberMe component displays a checkbox input for remembering user login.
 *
 * @param {Object} RememberMeProps - The props for the RememberMe component.
 * @param {() => void} RememberMeProps.onClick - The event handler for when the checkbox is clicked.
 * @returns {JSX.Element} - The rendered RememberMe component.
 */
const RememberMe = ({ onClick }: RememberMeProps): JSX.Element => {
  return (
    <div className="flex items-center">
      <input
        onClick={onClick}
        id="remember-me"
        name="remember-me"
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-primary-color focus:ring-primary-color"
      />
      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
        Remember me
      </label>
    </div>
  );
};

export default RememberMe;
