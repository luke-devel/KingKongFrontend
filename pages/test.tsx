import React, { useState } from "react";
import { Links } from "../components/links";
import { postLogin } from "../services/rest_service";

export type LoginInputs = {
  email: string
  password: string
}

function Login() {
  // these values are hardcoded since our main.go api only accepts this auth combo
  const initialValues: LoginInputs = { 
    email: "rickety_cricket@example.com", 
    password: "shhh!", 
  };

  const [inputs, setInputs] = useState(initialValues);

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    alert(`TODO add login endpoint! ${JSON.stringify(inputs)}`)
  };

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email"
               id="email"
               name="email"
               onChange={handleInputChange}
               value={inputs.email}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password"
               id="password"
               name="password"
               onChange={handleInputChange}
               value={inputs.password}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </>;
}

export default Login;