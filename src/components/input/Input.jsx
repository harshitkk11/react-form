import "./Input.css";

const Input = ({
  label,
  type,
  name,
  autocomplete,
  placeholder,
  onchange,
  value,
  disable
}) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        name={name}
        required
        autoComplete={autocomplete}
        placeholder={placeholder}
        disabled={disable}
        onChange={onchange}
        value={value}
      />
    </div>
  );
};

export default Input;
