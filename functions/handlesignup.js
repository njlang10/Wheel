const fetch = require("node-fetch");
const base64 = require("base-64");

exports.handler = async (event) => {
  {body: {firstName, lastName, email, score}} = event;
  const url =
    "https://us20.api.mailchimp.com/3.0/lists/97c5b41ca2/members?skip_merge_validation=true";
  const body = JSON.stringify({
    email_address: email,
    status: "pending",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
      SCORE: score
    }
  });
  const headers = {
    Authorization: `Basic ${base64.encode(
      `key:${process.env.REACT_APP_MAILCHIMP_KEY}`
    )}`,
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  let response = fetch(url, { headers: headers, method: "post", body: body })
    .then((response) => response.json())
    .then((res) => console.log(res));
};