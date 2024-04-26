import "./Home.css";
import CustomButton from "../../components/custombutton/CustomButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1 className="homepage-heading">Welcome!</h1>
      <div className="homepage-buttons">
        <CustomButton
          title="Contact Us"
          styles={{ background: "#004F69", color: "#ffffff" }}
          onclick={() => navigate("/contactus")}
        />
        <CustomButton title="Form Submited" onclick={() => navigate("/submited")} />
      </div>
    </div>
  );
};

export default Home;
