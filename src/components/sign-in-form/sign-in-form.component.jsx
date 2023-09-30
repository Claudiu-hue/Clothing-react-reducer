import React, { useContext, useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGgooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

const defaultformFileds = {
  email: "",
  password: "",
};

const SingInForm = () => {
  const [formFileds, setFormFields] = useState(defaultformFileds);
  const { email, password } = formFileds;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFileds, [name]: value });
    console.log(formFileds);
  };

  const resetFormFields = () => {
    setFormFields(defaultformFileds);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGgooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password": {
          alert("Wrong password");
          break;
        }
        case "auth/user-not-found": {
          alert("User not found");
          break;
        }
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit" children="sign in" />
          <Button
            type="button"
            buttonType="google"
            onClick={signInWithGoogle}
            children="Google sign in"
          />
        </div>
      </form>
    </div>
  );
};

export default SingInForm;
