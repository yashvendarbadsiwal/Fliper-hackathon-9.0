import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, FormGroup, Input, Label, Col, Row } from "reactstrap";
import axios from "axios";
import "../style/register.css";

class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm = (e) => {
    e.preventDefault();

    console.log(e.target[0].value);
    const payload = {
      username: e.target[0].value,
      password: e.target[1].value,
    };

    console.log(payload, e.target[1].value);
    return axios.post("http://localhost:4000/users/signup", payload).then(
      (data) => {
        console.log(data);
        this.setState({ redirect: true });
      },
      (err) => {
        console.log(err);
        alert(JSON.stringify(err));
      }
    );
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="register">
        <section className="gradient-custom shadow-2-strong ">
          <div className="forbag">
            <div className="container py-5 h-100 ">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                  <div className="card shadow-2-strong card-registration forb">
                    <div className="card-body p-4 p-md-5">
                      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                        Registration Form
                      </h3>
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

                        <FormGroup row>
                          <Col md={{ size: 10 }}>
                            <button
                              type="submit"
                              className="btn btn-primary btn-block"
                            >
                              SignUp
                            </button>
                          </Col>
                        </FormGroup>
                        {/* <!-- Submit button --> */}
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default register;
