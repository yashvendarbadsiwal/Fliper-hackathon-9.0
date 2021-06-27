import React, { Component } from "react";
import "../style/inboxmail.css";
import axios from "axios";
import { Button } from "reactstrap";

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
    };
  }
  componentDidMount() {
    // fetch("http://localhost:4000/mail", {
    //   method: "GET",
    //   headers: {
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGQ3NmNhZjZlMWU5YjFjNTRkZmU3NjgiLCJpYXQiOjE2MjQ3Njg4ODksImV4cCI6MTYyNTEyODg4OX0.RkMJ1sJwv4SflmQZJ8ruadbLZDPJwCto98SFYOpzQUM",
    //   },
    // })
    axios
      .get("http://localhost:4000/mail", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGQ4MjlmN2RjODU1YjI5YTAyY2FjZWYiLCJpYXQiOjE2MjQ3Nzk0MTgsImV4cCI6MTYyNTEzOTQxOH0.kIpw6H6_bPPS6xRp-xq3l_tPU266Hiuv6YBSaIr9wtI",
        },
      })
      // .then((res) => res.json)
      .then((res) => {
        this.setState({ mails: res.data });
        console.log(res.data);
      });
  }
  render() {
    return (
      <div className="container">
        {" "}
        {this.state.mails.map((mail, key) => renderMail(mail, key))}{" "}
      </div>
    );
  }
}

export default Home;
