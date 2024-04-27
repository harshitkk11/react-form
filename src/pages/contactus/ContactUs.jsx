import CustomForm from "../../components/customform/CustomForm";
import "./ContactUs.css";
import CustomButton from "../../components/custombutton/CustomButton";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <CustomForm />
      <div className="buttons">
      <CustomButton
        title="Home"
        styles={{ background: "#004F69", color: "#ffffff" }}
        onclick={() => navigate("/")}
      />
      <CustomButton
        title="Submitted Data"
        onclick={() => navigate("/submitted")}
      />
      </div>
    </div>
  );
};

export default ContactUs;
