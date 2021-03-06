import React from "react";
import Input from "./partials/Input";
import Button from "./partials/Button";
import "../styles/Register.scss";

import { useUserData } from "../helpers/useUserData";

export default function Register() {
  const { state, handleSubmit, handleInputChange } = useUserData();

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={state.inputs.firstName}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={state.inputs.lastName}
        onChange={handleInputChange}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email address"
        value={state.inputs.email}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="username"
        placeholder="Username"
        value={state.inputs.username}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={state.inputs.password}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="passwordConfirmation"
        placeholder="Confirm password"
        value={state.inputs.passwordConfirmation}
        onChange={handleInputChange}
      />
      <Button>Register</Button>
    </form>
  );
}
