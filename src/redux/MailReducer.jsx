import React from "react";
export const initialState = {
  userid: "",
  subject: "",
  to: "",
  from: "",
  cc: "",
  bcc: "",
  isText: true,
  text: "",
  html: "",
  isSchedule: false,
  schedule: {
    date: "",
    dayOfWeek: "",
    month: "",
    year: "",
    hour: "",
    second: "",
    minute: "",
  },
};
export const MailReducer = (state = initialState, acttions) => {
  switch (acttions.type) {
    default:
      return state;
  }
};
