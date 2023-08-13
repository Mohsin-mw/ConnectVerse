type InputProps = {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/**
 * Input Component
 *
 * The Input component displays a form input field along with a corresponding label.
 *
 * @param {Object} InputProps - The props for the Input component.
 * @param {string} InputProps.label - The label text for the input field.
 * @param {string} InputProps.id - The unique identifier for the input field.
 * @param {string} InputProps.type - The type of the input field (e.g., "text", "password", "email").
 * @param {string} InputProps.value - The current value of the input field.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} InputProps.onChange - The event handler for changes to the input field's value.
 * @returns {JSX.Element} - The rendered Input component.
 */
const Input = ({
  label,
  id,
  type,
  value,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          required
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary-color-shade2 focus:outline-none focus:ring-primary-color-shade2 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default Input;
