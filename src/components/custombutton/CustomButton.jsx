import "./CustomButton.css";

const button = ({ title, styles, onclick, type }) => {
  return (
    <button className="custom-button" style={styles} onClick={onclick} type={type}>
      {title}
    </button>
  );
};

export default button;
