import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "./CustomInput";
import { useState } from "react";
import { toast } from "react-toastify";
import { postNewUser } from "../../helpers/axiosHelper";

export const SignUpForm = () => {
  const [form, setForm] = useState({});
  const fields = [
    {
      label: "Name",
      placeholder: "Type your name",
      type: "text",
      required: true,
      name: "name",
    },
    {
      label: "Email",
      placeholder: "Type your Email",
      type: "email",
      required: true,
      name: "email",
    },
    {
      label: "Password",
      placeholder: "****",
      type: "password",
      required: true,
      name: "password",
    },
    {
      label: "Confirm Password",
      placeholder: "****",
      type: "password",
      required: true,
      name: "confirmPassword",
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error(
        "Password does not match. Please, try correct password"
      );
    }
    const { status, message } = await postNewUser(rest);
    toast[status](message);
  };
  return (
    <div className="border rounded p-4">
      <h4 className="mb-4">SIgn Up Now</h4>
      <Form onSubmit={handleOnSubmit}>
        {fields.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
