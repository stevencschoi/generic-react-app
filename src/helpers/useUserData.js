import { useState } from "react";

export function useUserData() {
  const [state, setState] = useState({
    inputs: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state.inputs);
  };

  const handleInputChange = e => {
    e.persist();
    // update state with the inputs from the form
    const inputValues = { ...state.inputs, [e.target.name]: e.target.value };
    setState(prev => ({
      ...prev,
      inputs: inputValues,
    }));
  };

  return { state, handleSubmit, handleInputChange };
}
