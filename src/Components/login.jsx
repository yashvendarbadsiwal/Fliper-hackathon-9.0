import axios from "axios";
import { Button } from "bootstrap";
import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { Link, Redirect } from "react-router-dom";
import { Form, FormGroup, Input, Label, Col, Row } from "reactstrap";
import "../style/login.css";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.submitForm = this.submitForm.bind(this);
  }
  responseGoogle = (response) => {
    // console.log(response);
    // console.log(response.profileObj);
  };
  submitForm = (e) => {
    e.preventDefault();

    console.log(e.target[0].value);
    const payload = {
      username: e.target[0].value,
      password: e.target[1].value,
    };

    console.log(payload, e.target[1].value);
    return axios.post("http://localhost:4000/users/login", payload).then(
      (data) => {
        console.log(data);
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("username", data.data.username);
        localStorage.setItem("userid", data.data.userid);
        localStorage.setItem("timeout", new Date().getTime() + 360000);
        this.setState({ redirect: true });
      },
      (err) => alert(JSON.stringify(err))
    );
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login">
        <div className="container">
          <div id="intro" className="bg-image shadow-2-strong">
            <div className="mask d-flex align-items-center h-100 forbag">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-5 col-md-8">
                    <Form
                      action=""
                      className="bg-white  rounded-5 shadow-5-strong p-5"
                      onSubmit={(e) => this.submitForm(e)}
                    >
                      <FormGroup row className="mb-3">
                        <Input
                          type="text"
                          name="username"
                          id="email_login"
                          placeholder="example@example.com"
                          // onChange={(e) => console.log(e)}
                        />
                        <Label for="email_login">Username</Label>
                      </FormGroup>
                      <FormGroup row className="mb-3">
                        <Input
                          type="password"
                          name="password"
                          id="password_login"
                          placeholder="********"
                        />
                        <Label for="password_login">Password</Label>
                      </FormGroup>
                      <Row>
                        <span>
                          * don't have an account{" "}
                          <Link to="/register">Register here </Link>
                        </span>
                      </Row>
                      <FormGroup row>
                        <Col md={{ size: 10 }}>
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Sign in
                          </button>
                        </Col>
                      </FormGroup>
                      {/* <!-- Submit button --> */}

                      <hr />
                      <div>
                        <GoogleLogin
                          clientId="193577459583-r55oh4o0b4k1umbrc327k3k7sk2eammr.apps.googleusercontent.com"
                          buttonText="Sign in with Google Account"
                          onSuccess={this.responseGoogle}
                          onFailure={this.responseGoogle}
                          cookiePolicy={"single_host_origin"}
                        />
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
