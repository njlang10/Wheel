import React from "react";
import { categories, ratingDetails } from "../constants/settings";
import { wheel } from "../constants/settings";
import { Table, Typography, Form, Input, Button, Divider } from "antd";

const calculateIndex = (score) => {
  if (score > 4) {
    return "Thriving";
  } else if (score <= 4 && score > 1) {
    return "Progressing";
  } else if (score <= 1 && score > -3) {
    return "Stagnant";
  } else {
    return "Struggling";
  }
};

// const duration = 185;

// const defaultStyle = {
//   transition: `all ${duration}ms ease-out`,
//   transform: "translate(100%, 0)",
//   opacity: 0
// };

// const transitionStyles = {
//   entering: { opacity: 0 },
//   entered: { transform: "translate(0%, 0)", opacity: 1 },
//   exiting: { transform: "translateX(0)" },
//   exited: { transform: "translateX(-100vw)" }
// };
// // NOTE this is code to slide in and out. Remove this
// const TransitionedSignup = ({ in: inProp }) => (
//   <Transition appear in={true} timeout={duration}>
//     {(state) => (
//       <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
//         <SignUp
//           key="signup"
//           onSubmit={(formInfo) => {
//             setUserInfo((old) => {
//               const newVals = {
//                 firstName: formInfo.getFieldValue("firstname"),
//                 lastName: formInfo.getFieldValue("lastname"),
//                 email: formInfo.getFieldValue("email"),
//                 isSignedUp: true
//               };
//               return { ...old, ...newVals };
//             });
//             carouselRef.current.goTo(currentStep + 1, false);
//             setStep(currentStep + 1);
//           }}
//         />
//       </div>
//     )}
//   </Transition>
// );

function postToMailChimp(newVals) {
  const url =
    "https://elated-heyrovsky-f6035a.netlify.app/.netlify/functions/handlesignup";
  const body = JSON.stringify({
    firstName: newVals.firstName,
    lastName: newVals.lastName,
    email: newVals.email,
    score: "0"
  });

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  };

  return fetch(url, { headers: headers, method: "post", body: body })
    .then((response) => {
      console.log("Got a response", response);
      return response.json();
    })
    .then((json) => {
      console.log("Json id is ", json.id);
      return json.id;
    })
    .catch((error) => console.log("error in posting email", error));
}

function SignUp({ onSubmit }) {
  const [form] = Form.useForm();

  const itemLayout = {
    labelCol: { span: 4 },
    layout: "horizontal",
    size: "large"
  };

  return (
    <div
      style={{
        alignItems: "center",
        maxWidth: "80vw",
        paddingLeft: "5px",
        paddingTop: "5px"
      }}
    >
      <Form form={form} onValuesChange={() => {}} {...itemLayout}>
        <Form.Item label="First Name" name="firstname">
          <Input placeholder="Hello!" />
        </Form.Item>
        <Form.Item label="Last Name" name="lastname">
          <Input placeholder="Happy to have you!" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="myemail@address.com" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={() => onSubmit(form)}>
            SignUp!
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

function ResultsScore({
  surveyResults,
  currentCategory,
  shouldShowSignup,
  setUserInfo
}) {
  const currentResult = Object.values(
    surveyResults[currentCategory.key]
  ).reduce((a, v) => {
    return a + v;
  }, 0);
  const scoreResult = calculateIndex(currentResult);

  return (
    <>
      <div
        style={{
          position: "relative"
        }}
      >
        <Typography.Title level={4}>
          {/* TODO: Pick a specific color */}
          You are currently{" "}
          <div style={{ fontSize: "30px" }}>{scoreResult.toUpperCase()}</div>
        </Typography.Title>
        <Typography.Paragraph style={{ fontSize: "15px" }}>
          <span>{ratingDetails[scoreResult].description} </span>
          {shouldShowSignup ? (
            <>
              <Divider />
              <div></div>
              <div>
                <b>{""}Sign up to have your results mailed to you</b>
              </div>
            </>
          ) : null}
          {shouldShowSignup ? (
            <SignUp
              key="signup"
              onSubmit={(formInfo) => {
                const info = {
                  firstName: formInfo.getFieldValue("firstname"),
                  lastName: formInfo.getFieldValue("lastname"),
                  email: formInfo.getFieldValue("email")
                };
                postToMailChimp(info).then((id) => {
                  setUserInfo((old) => {
                    const newVals = {
                      firstName: formInfo.getFieldValue("firstname"),
                      lastName: formInfo.getFieldValue("lastname"),
                      email: formInfo.getFieldValue("email"),
                      isSignedUp: true,
                      id: id
                    };
                    return { ...old, ...newVals };
                  });
                });
              }}
            />
          ) : (
            <div style={{ paddingTop: "5px" }}>
              <b style={{ fontSize: "15px" }}>
                Click the Button Above to Continue
              </b>
            </div>
          )}
        </Typography.Paragraph>
      </div>
    </>
  );
}

function ResultsTable({ surveyResults }) {
  // Set up columns
  const columns = [];

  columns.push({
    title: "Well-being State",
    dataIndex: "state",
    key: "state",
    fixed: "left",
    align: "center"
  });
  const categoryCols = categories.map((c) => {
    return {
      title: (
        <div
          style={{
            color: wheel[c].color,
            fontSize: "17px",
            textAlign: "center"
          }}
        >
          {c}
        </div>
      ),
      dataIndex: c,
      key: c,
      render: (text) => {
        return <div style={{ textAlign: "center" }}>text</div>;
      }
    };
  });
  const allColumns = [...columns, ...categoryCols];

  const emptyRows = Object.keys(ratingDetails).map((rating, index) => {
    return { key: index, state: rating };
  });

  // Make a blank row for each category
  /**
   * {key: 0, state, Thriving, soul: "", connection: "", mindset: "", feelings: "", movement: "", surroundings: ""}
   *
   */
  const dummyRows = emptyRows.map((outcome) => {
    const emptyRow = categories.reduce((accum, c) => {
      accum[c] = "";
      return accum;
    }, {});
    return { ...outcome, ...emptyRow };
  });

  // Search through each category, find the result for that category, then
  // find it's corresponding state and match the data
  categories.forEach((c, index) => {
    const currentResult = Object.values(surveyResults[c]);

    if (currentResult.length > 1) {
      const result = calculateIndex(
        currentResult.reduce((accum, result) => accum + result),
        0
      );
      dummyRows.forEach((row) => {
        if (row.state === result) {
          row[c] = "x";
        }
      });
    }
  });

  return (
    <Table
      columns={allColumns}
      dataSource={dummyRows}
      sticky
      pagination={false}
      scroll={{ x: 950 }}
      bordered
    />
  );
}

export { ResultsScore, ResultsTable };
