import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Row } from "reactstrap";
class email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: {
        subject: "",
        to: "",
        from: "",
        cc: "",
        bcc: "",
        isText: true,
        text: "",
        html: "",
        isSchedule: true,
        schedule: {
          date: "*",
          dayOfWeek: "*",
          month: "*",
          year: "*",
          hour: "*",
          second: "*",
          minute: "*",
        },
      },
    };
  }
  render() {
    return (
      <div
        className="container inboxbody"
        style={{ minHeight: "80vh", width: "60%" }}
      >
        <Form>
          <FormGroup row>
            <Label>
              From
              <Input
                type="email"
                name="from"
                onChange={(e) => (this.state.mail.form = e.target.value)}
              />
            </Label>
          </FormGroup>
          <FormGroup row>
            <Label>
              Subject
              <Input
                type="text"
                name="subject"
                onChange={(e) => (this.state.mail.subject = e.target.value)}
              />
            </Label>
          </FormGroup>

          <FormGroup row>
            <Label>
              To
              <Input
                type="text"
                name="to"
                value={this.state.mail.to}
                onChange={(e) => this.setState({ "mail.to": e.target.value })}
              />
            </Label>
          </FormGroup>

          <FormGroup row>
            <Label>
              CC
              <Input
                type="text"
                name="cc"
                value={this.state.mail.cc}
                onChange={(e) => this.setState({ "mail.cc": e.target.value })}
              />
            </Label>
          </FormGroup>
          <FormGroup row>
            <Label>
              BCC
              <Input
                type="text"
                name="bcc"
                value={this.state.mail.bcc}
                onChange={(e) => this.setState({ "mail.bcc": e.target.value })}
              />
            </Label>
          </FormGroup>
          {/* <FormGroup>
            <Label>
              <Input
                type="checkbox"
                value={this.state.mail.isText}
                onChange={(e) =>
                  this.setState({ "mail.isText": e.target.value })
                }
              />
              Response is Text
            </Label>
          </FormGroup> */}
          {this.state.mail.isText && (
            <FormGroup>
              <Label>
                Mail Text
                <Input
                  type="textarea"
                  value={this.state.mail.text}
                  onChange={(e) =>
                    this.setState({ "mail.text": e.target.value })
                  }
                />
              </Label>
            </FormGroup>
          )}
          {!this.state.mail.isText && (
            <FormGroup>
              <Label>
                Mail HTML
                <Input
                  type="textarea"
                  value={this.state.mail.html}
                  onChange={(e) =>
                    this.setState({ "mail.html": e.target.value })
                  }
                />
              </Label>
            </FormGroup>
          )}
          {/* <FormGroup>
            <Label>
              <Input
                type="checkbox"
                value={this.state.mail.isSchedule}
                onChange={(e) =>
                  this.setState({ "mail.isSchedule": e.target.value })
                }
              />
              Want Scheduling
            </Label>
          </FormGroup>
          {this.state.mail.isSchedule} */}
          <Row>Scheduling</Row>
          <FormGroup>
            <Label>
              <Input
                type="number"
                onChange={(e) =>
                  (this.state.mail.schedule.date = e.target.value)
                }
              />
              Date
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              <Input
                type="number"
                onChange={(e) =>
                  (this.state.mail.schedule.dayOfWeek = e.target.value)
                }
              />
              DayOfWeek
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              <Input
                type="number"
                onChange={(e) =>
                  (this.state.mail.schedule.month = e.target.value)
                }
              />
              Date
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              <Input
                type="number"
                onChange={(e) =>
                  (this.state.mail.schedule.date = e.target.value)
                }
              />
              Date
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              <Input
                type="number"
                onChange={(e) =>
                  (this.state.mail.schedule.date = e.target.value)
                }
              />
              Date
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              <Input
                type="number"
                onChange={(e) =>
                  (this.state.mail.schedule.date = e.target.value)
                }
              />
              Date
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              <Input
                type="number"
                onChange={(e) =>
                  (this.state.mail.schedule.date = e.target.value)
                }
              />
              Date
            </Label>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default email;
