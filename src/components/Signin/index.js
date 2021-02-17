import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Button from "../forms/Button";
import { signInWithGoogle, auth } from "./../../firebase/utils";
import AuthWrapper from "./../AuthWrapper";
import FormInput from "../forms/FormInput";

const initalState = {
  email: "",
  password: "",
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initalState,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initalState,
      }); //reset Form
    } catch (err) {
      //error
    }
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;

    const configAuthWrapper = {
      headline: "LogIn",
    };
    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              handleChange={this.handleChange}
            />

            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              handleChange={this.handleChange}
            />

            <Button type="submit">Log In</Button>
            <div className="socialSignin">
              <div className="row">
                <Button onClick={signInWithGoogle}>Sign In with Google</Button>
              </div>
            </div>
            <div className="links">
              <Link to="/recovery">Reset Password</Link>
            </div>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default SignIn;
