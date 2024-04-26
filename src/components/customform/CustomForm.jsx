import Input from "../input/Input";
import CustomButton from "../custombutton/CustomButton";
import "./CustomForm.css";
import { useState } from "react";

const CustomForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    link: "",
    file: null,
  });

  const submited = JSON.parse(localStorage.getItem("formData")) || [];

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    setFormData({...formData, file: e.target.files[0]});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    // const formdata = new FormData();
    // formdata.append('file', formData.file);
    // console.log(formdata);
    submited.push(formData);
    localStorage.setItem("formData", JSON.stringify(submited));

    setFormData({
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      link: "",
      file: null,
    });
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
        />

        <Input
          label="Last Name"
          type="text"
          name="lastname"
          autocomplete="family-name"
          placeholder="Last Name"
          onchange={(e) => onChangeInput(e)}
          value={formData.lastname}
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
      />

      <Input
        label="Email"
        type="email"
        name="email"
        autocomplete="email"
        placeholder="you@example.com"
        onchange={(e) => onChangeInput(e)}
        value={formData.email}
      />

      <Input
        label="Link"
        type="url"
        name="link"
        autocomplete="url"
        placeholder="http://www.example.com"
        onchange={(e) => onChangeInput(e)}
        value={formData.link}
      />

      <Input label="File Upload" type="file" name="file" onchange={(e) => handleFileUpload(e)} />

      <CustomButton
        title="Submit"
        styles={{
          background: "#000000",
          color: "#ffffff",
          marginTop: "30px",
          borderRadius: "10px",
        }}
        type="submit"
      />
    </form>
  );
};

export default CustomForm;
