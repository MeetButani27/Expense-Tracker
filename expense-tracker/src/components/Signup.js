import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, email, password } = this.state;
    console.log(username, email, password);

    fetch("http://localhost:5000/signup", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        alert("Account created successfully, Click on Log in to continue");
      });
  }

  render() {
    return (
      <div className="conatiner login">
        <form onSubmit={this.handleSubmit}>
          <h2><u>Sign Up</u></h2><br />

          <div className="mb-3">
            <label>Username:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={(e) => this.setState({ username: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email ID:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => this.setState({ email: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => this.setState({ password: e.target.value })}
              required
            />

          <br />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary mb-4">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right flex">
            Already have an account? <Link className="nav-link" to="/login"><label><u>Sign In</u></label></Link>
          </p>
        </form>
      </div>
    );
  }
}
