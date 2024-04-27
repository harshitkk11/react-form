import "./Submitted.css";
import CustomButton from "../../components/custombutton/CustomButton";
import { useNavigate } from "react-router-dom";

const Submited = () => {
  const navigate = useNavigate();
  const formData = JSON.parse(localStorage.getItem("formData")) || [];

  return (
    <div className="submitted">
      <h1>Submitted Data</h1>
      <ul className="data-list">
        {formData.map((data, index) => (
          <li key={index}>
            <p>
              <b>First Name:</b> {data.firstname}
            </p>
            <p>
              <b>Last Name:</b> {data.lastname}
            </p>
            <p>
              <b>Phone Number:</b> {data.phone}
            </p>
            <p>
              <b>Email:</b> {data.email}
            </p>
            <p>
              <b>Link:</b> <a href={data.link}>{data.link}</a>
            </p>
            <p>
              <b>File Upload:</b> <a href={data.file}>{data.file}</a>
            </p>
          </li>
        ))}
      </ul>
      <CustomButton
        title="Home"
        styles={{ background: "#004F69", color: "#ffffff" }}
        onclick={() => navigate("/")}
      />
    </div>
  );
};

export default Submited;
