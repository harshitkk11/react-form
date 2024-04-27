import "./CustomButton.css";

const button = ({ title, styles, onclick, type, disable }) => {
  return (
    <button
      className="custom-button"
      style={styles}
      onClick={onclick}
      type={type}
      disabled={disable}
    >
      {title}
    </button>
  );
};

export default button;
