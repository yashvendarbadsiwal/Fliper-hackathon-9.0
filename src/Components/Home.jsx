import React, { Component } from "react";
import "../style/inboxmail.css";
import { Button } from "reactstrap";
const mails = new Array(15).fill({
  to: "yashvendar@gmail.com",
  subject: "kuch bhi",
  text: "lorem  jkdf dkfj d",
  html: "<h1>This is a testing Email</h1>",
  schadule: true,
  time: Date(),
});
const renderMail = (mail) => {
  return (
    <div className="inboxbody">
      <div className="shadow mb-3 mt-3 pb-2 pt-2 mail-box inboxbody">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6">
          <h5 className="ml-4">{mail.subject}</h5>
        </div>
        <div className="col-12 col-sm-3">
          {mail.schadule && <p>{mail.time}</p>}
        </div>
      </div>
      <div className="row">
        {mail.text && <div>{mail.text}</div>}
        {!mail.text && <div>Html content</div>}
      </div>
      <div className="align-item-right">
        <Button outline color="primary pull-left">
          Edit
        </Button>
        <Button color="danger pull-left">Delete</Button>
      </div>
    </div>
    </div>
  );
};
class Home extends Component {
  render() {
    return (
      <div className="container"> {mails.map((mail) => renderMail(mail))} </div>
    );
  }
}

export default Home;
