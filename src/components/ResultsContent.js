import React, { useState, useEffect } from "react";
import { categories, ratingDetails } from "../constants/settings";
import { Table, Typography, Form, Input, Button } from "antd";

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
      <div style={{ position: "relative" }}>
        <Typography.Title level={2}>
          {/* TODO: Pick a specific color */}
          You are currently{" "}
          <span style={{ color: ratingDetails[scoreResult].color }}>
            {scoreResult}
          </span>
        </Typography.Title>
        <Typography.Paragraph>
          <span>
            {ratingDetails[scoreResult].description}{" "}
            {shouldShowSignup ? (
              <>
                <b>
                  {""}Get your results mailed to you to start your personalized
                  wellness journey
                </b>
              </>
            ) : null}
          </span>
          {shouldShowSignup ? (
            <SignUp
              key="signup"
              onSubmit={(formInfo) => {
                setUserInfo((old) => {
                  const newVals = {
                    firstName: formInfo.getFieldValue("firstname"),
                    lastName: formInfo.getFieldValue("lastname"),
                    email: formInfo.getFieldValue("email"),
                    isSignedUp: true
                  };
                  return { ...old, ...newVals };
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

function ResultsContent({ surveyResults, currentCategory }) {
  const [data, setData] = useState(() => {
    const emptyOutcomes = [6, 4, 2, 0, -2, -4, -6].map((val) => {
      return { outcome: val };
    });
    return emptyOutcomes.map((dummyCol) => {
      const emptyCategory = categories.reduce((accum, c) => {
        accum[c] = "";
        return accum;
      }, {});
      return { ...dummyCol, ...emptyCategory };
    });
  });

  // Column setup
  let columns = [];
  const resultColumn = {
    title: "outcome",
    dataIndex: "outcome",
    key: "outcome"
  };
  const fullColumns = categories.map((c) => {
    return { title: c, dataIndex: c, key: c };
  });
  columns = [resultColumn, ...fullColumns];

  const rowToUpdate = surveyResults[currentCategory.key];
  const score = Object.values(rowToUpdate).reduce((a, v) => {
    return a + v;
  }, 0);

  const indexToUpdate = calculateIndex(score);
  // Wipe any old score
  // Set score, but only do this if:
  // surveyResults change
  // category changes,
  // indexToUpdate changes
  useEffect(
    () =>
      setData((prev) => {
        const newData = prev.map((value, index) => {
          let newVal = value;
          if (index !== indexToUpdate) {
            newVal[currentCategory.key] = "";
          } else {
            newVal[currentCategory.key] = "X";
          }
          return newVal;
        });
        return newData;
      }),
    [surveyResults, currentCategory, indexToUpdate]
  );

  return (
    <>
      <Typography.Title level={2}>Here are your results</Typography.Title>
      <Typography.Paragraph>
        You are {score} in the {currentCategory.title} category
      </Typography.Paragraph>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: 100 }}
      />
    </>
  );
}

export { ResultsScore, ResultsContent };
