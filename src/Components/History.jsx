import React, { Component } from "react";
import axios from "axios";
import "../style/history.css";
import { Redirect } from "react-router-dom";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mails: [],
      redirect: false,
    };
  }
  componentDidMount() {
    return new Promise((resolve, fail) => {
      if (
        !localStorage.getItem("token") ||
        localStorage.getItem("timeout") < new Date().getTime()
      ) {
        if (localStorage.getItem("token")) {
          localStorage.removeItem("token");
        }
        this.setState({ redirect: true });
        fail("Login again");
      } else {
        resolve();
      }
    }).then((resolved) => {
      axios
        .get("http://localhost:4000/mail", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        // .then((res) => res.json)
        .then(
          (res) => {
            this.setState({
              mails: res.data.filter((mail) => !mail.isSchedule),
            });
            console.log(res.data);
          },
          (err) => {}
        );
    });
  }
  render() {
    if (this.state.redirect) {
      <Redirect to="/login" />;
    }
    return (
      <div className="history">
        <div className="gradient-custom w-100 h-100">
          <br />
          <div className="container w-100  mt-auto">
            <div className="card shadow-2-strong ">
              <div className="row justify-content-center h-100">
                <div className="col-8 col-lg-9 col-xl-5 mt-3 p-3 ">
                  <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                      <h3>History</h3>
                    </div>

                    <div className="col text-center">
                      <div class="form-outline d-flex">
                        <input
                          id="search-input"
                          type="search"
                          id="form1"
                          class="form-control"
                        />
                        <label class="form-label" for="form1"></label>
                        <button
                          id="search-button"
                          type="button"
                          class="btn btn-primary"
                        >
                          <i class="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className=" card container-fluid shadow-5-strong d-flex">
                    <div>
                      <h5>sample@email.com</h5>
                      <p>message that was sent</p>
                      <p>time it was sent at</p>
                    </div>
                    <div className="float-left">
                      <button className="btn btn-primary btn-sm" type="button">
                        View Details
                      </button>
                    </div>
                    <br />
                  </div>
                  <br />
                  <div className=" card container-fluid shadow-5-strong d-flex">
                    <div>
                      <h5>sample@email.com</h5>
                      <p>message that was sent</p>
                      <p>time it was sent at</p>
                    </div>
                    <div className="float-left">
                      <button className="btn btn-primary btn-sm" type="button">
                        View Details
                      </button>
                    </div>
                    <br />
                  </div>
                  <br />
                  <div className=" card container-fluid shadow-5-strong d-flex">
                    <div>
                      <h5>sample@email.com</h5>
                      <p>message that was sent</p>
                      <p>time it was sent at</p>
                    </div>
                    <div className="float-left">
                      <button className="btn btn-primary btn-sm" type="button">
                        View Details
                      </button>
                    </div>
                    <br />
                  </div>
                  <br />
                </div>
                <br />
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default History;
