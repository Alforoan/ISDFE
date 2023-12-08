import React from "react";
import { useForm } from "react-hook-form";
import "./LogIn.scss";

const LogIn = () => {
  const { register, handleSubmit } = useForm();

  const submitLogIn = (formData) => {
    console.log(formData);
  };

  return (
    <div className="form-container login">
      <form className="form" onSubmit={handleSubmit(submitLogIn)}>
        <h3 className="form-title">ISD Design</h3>
        <fieldset>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="name@company.com"
              {...register("email")}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="**" {...register("password")} />
          </div>
        </fieldset>
        <button className="button">Log in</button>
      </form>
    </div>
  );
};

export default LogIn;
