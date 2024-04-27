import Input from "../input/Input";
import CustomButton from "../custombutton/CustomButton";
import "./CustomForm.css";
import { useState } from "react";
import { put } from "@vercel/blob";

const CustomForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    link: "",
    file: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [title, setTitle] = useState("Submit")

  const submitted = JSON.parse(localStorage.getItem("formData")) || [];

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTitle("Please Wait...")
    setIsDisabled(true);

    const { url } = await put(selectedFile.name, selectedFile, {
      access: "public",
      token: process.env.REACT_APP_BLOB_READ_WRITE_TOKEN,
    });

    const updatedFormData = { ...formData, file: url };
    setFormData(updatedFormData);

    submitted.push(updatedFormData);

    localStorage.setItem("formData", JSON.stringify(submitted));

    setFormData({
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      link: "",
      file: "",
    });
    setTitle("Submit")
    setIsDisabled(false);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="name">
        <Input
          label="First Name"
          type="text"
          name="firstname"
          autocomplete="given-name"
          placeholder="First Name"
          onchange={(e) => onChangeInput(e)}
          value={formData.firstname}
          disable={isDisabled}
        />

        <Input
          label="Last Name"
          type="text"
          name="lastname"
          autocomplete="family-name"
          placeholder="Last Name"
          onchange={(e) => onChangeInput(e)}
          value={formData.lastname}
          disable={isDisabled}
        />
      </div>

      <Input
        label="Phone Number"
        type="tel"
        name="phone"
        autocomplete="tel"
        placeholder="000-000-0000"
        onchange={(e) => onChangeInput(e)}
        value={formData.phone}
        disable={isDisabled}
      />

      <Input
        label="Email"
        type="email"
        name="email"
        autocomplete="email"
        placeholder="you@example.com"
        onchange={(e) => onChangeInput(e)}
        value={formData.email}
        disable={isDisabled}
      />

      <Input
        label="Link"
        type="url"
        name="link"
        autocomplete="url"
        placeholder="http://www.example.com"
        onchange={(e) => onChangeInput(e)}
        value={formData.link}
        disable={isDisabled}
      />

      <Input
        label="File Upload"
        type="file"
        name="file"
        onchange={(e) => handleFileUpload(e)}
        disable={isDisabled}
      />

      <CustomButton
        title={title}
        styles={{
          background: "#000000",
          color: "#ffffff",
          marginTop: "30px",
          borderRadius: "10px",
        }}
        type="submit"
        disable={isDisabled}
      />
    </form>
  );
};

export default CustomForm;
