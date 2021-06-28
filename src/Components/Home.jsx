import React, { Component } from "react";
import "../style/inboxmail.css";
import axios from "axios";
import { Button } from "reactstrap";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const renderMail = (mail, key) => {
  return (
    <div
      key={key}
      className="shadow mb-3 mt-3 pb-2 pt-2 mail-box row inboxbody"
    >
      <div className="row">
        <div className="col-12 col-sm-7 ">
          <h5 className="ml-4">{mail.subject}</h5>
        </div>
        <div className="col-12 col-sm-4 " style={{ opacity: 0.7 }}>
          {/* {JSON.stringify(mail)}
          {String(mail.schadule)} */}
          {mail.isSchedule && (
            <p className="schedule-container">
              <span>&nbsp;{mail.schedule.second}&nbsp;</span>
              <span>&nbsp;{mail.schedule.minute}&nbsp;</span>
              <span>&nbsp;{mail.schedule.hour}&nbsp;</span>
              <span>&nbsp;{mail.schedule.date}&nbsp;</span>
              <span>&nbsp;{mail.schedule.month}&nbsp;</span>
              <span>&nbsp;{mail.schedule.year}&nbsp;</span>
              <span>&nbsp;{mail.schedule.dayOfWeek}&nbsp;</span>
            </p>
          )}
        </div>
      </div>
      <div className="row">
        {mail.text && <div>{mail.text}</div>}
        {!mail.text && <div>Html content</div>}
      </div>
      <div className="row">
        <div className="mail-buttons">
          <Button outline color="primary">
            Edit
          </Button>
          <Button color="danger">Delete</Button>
        </div>
      </div>
    </div>
  );
};
class Home extends Component {
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
            this.setState({ mails: res.data });
            console.log(res.data);
          },
          (err) => {}
        );
    });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    if (this.state.mails.length == 0) {
      return (
        <div
          className="container"
          style={{ minHeight: "80vh", color: "white" }}
        >
          Nothing there, Add Schedule to show
        </div>
      );
    }
    return (
      <div className="container" style={{ minHeight: "80vh" }}>
        {" "}
        {this.state.mails.map((mail, key) => renderMail(mail, key))}{" "}
      </div>
    );
  }
}

export default Home;
