import React, { useState, useRef } from "react";
import {
  Button,
  Carousel,
  Divider,
  Steps,
  Form,
  Input,
  Typography
} from "antd";
import { ResultsScore } from "../components/ResultsContent";
import ProgressBarCustom from "../components/Progress";
import { Transition } from "react-transition-group";

import connection from "../images/connection.jpg";
import { wheel as wheelInfo } from "../constants/settings";

function isComplete(surveyResults) {
  const emptySurveys = Object.keys(surveyResults).map((key) => {
    const isEmpty = Object.keys(surveyResults[key]).length === 0;
    return isEmpty ? key : null;
  });

  const leftOvers = emptySurveys?.filter((category) => category !== null);

  return leftOvers.length === 0;
}

function SignUp({ onSubmit }) {
  const [form] = Form.useForm();

  const itemLayout = {
    labelCol: { span: 8 },
    layout: "horizontal",
    size: "large"
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography.Title level={4}>
            Get your results mailed to you
          </Typography.Title>
          <Typography.Paragraph style={{ textAlign: "left" }}>
            Now that you've completed your first set of questions, make sure
            tosign up to begin your personalized journey toward a healthier self
          </Typography.Paragraph>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-block" }}>
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
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
export default function CardContent({
  currentCategory,
  surveyResults,
  setSurveyResults,
  setCategory,
  setCardContentView,
  userInfo,
  setUserInfo
}) {
  const { key: categoryKey, questions } = currentCategory;
  const carouselRef = useRef();
  const [currentStep, setStep] = useState(0);

  // Controls stepping out of order on the carousel
  // NOTE: FIX OUT OF ORDER STEPPING TO TABLE!!!
  const handleChangeStep = (step) => {
    if (carouselRef && carouselRef.current) {
      setStep(step);
      carouselRef.current.goTo(step, false);
    }
  };

  // Content view of the carousel
  const carouselCards = Object.keys(questions).map((i) => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2
        style={{
          textAlign: "center"
        }}
        key={i}
      >
        {questions[i]}
      </h2>
    </div>
  ));

  // Add the results step
  carouselCards.push(
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ResultsScore
        key="results"
        surveyResults={surveyResults}
        currentCategory={currentCategory}
        shouldShowSignup={userInfo.email === null}
        setUserInfo={setUserInfo}
      />
    </div>
  );
  // Complete the carousel
  const carousel = (
    <Carousel
      dots={false}
      ref={carouselRef}
      effect="scrollx"
      style={{ marginTop: "20px", position: "relative", maxHeight: "35vh" }}
    >
      {carouselCards}
    </Carousel>
  );

  // Add step components on the bottom
  const steps = Object.keys(questions).map((i) => <Steps.Step key={i} />);
  const answerCard = <Steps.Step key="answers" />;

  steps.push(answerCard);

  const duration = 185;

  const defaultStyle = {
    transition: `all ${duration}ms ease-out`,
    transform: "translate(100%, 0)",
    opacity: 0
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { transform: "translate(0%, 0)", opacity: 1 },
    exiting: { transform: "translateX(0)" },
    exited: { transform: "translateX(-100vw)" }
  };
  // NOTE this is code to slide in and out. Remove this
  const TransitionedSignup = ({ in: inProp }) => (
    <Transition appear in={true} timeout={duration}>
      {(state) => (
        <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
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
              carouselRef.current.goTo(currentStep + 1, false);
              setStep(currentStep + 1);
            }}
          />
        </div>
      )}
    </Transition>
  );

  return (
    <>
      {/* <TransitionedSignup in={true} /> */}
      {currentStep === steps.length - 1 ? (
        <div style={{ position: "relative" }}>
          <Button
            block
            type="primary"
            onClick={() => {
              const emptySurveys = Object.keys(surveyResults).map((key) => {
                const isEmpty = Object.keys(surveyResults[key]).length === 0;
                return isEmpty ? key : null;
              });

              const leftOvers = emptySurveys?.filter(
                (category) => category !== null
              );

              const isComplete = leftOvers.length === 0;
              const nextCategory = wheelInfo[leftOvers[0]];

              if (isComplete) {
                setCardContentView("info");
              } else {
                setCategory(nextCategory);
                setStep(0);
                carouselRef.current.goTo(0, false);
              }
            }}
          >
            {!isComplete(surveyResults)
              ? "Move on to next category"
              : "See full results"}
          </Button>
        </div>
      ) : null}

      {currentStep === steps.length - 1 ? (
        <div
          style={{ paddingLeft: "5%", paddingTop: "10px", paddingRight: "5%" }}
        >
          <ProgressBarCustom surveyResults={surveyResults} />
        </div>
      ) : null}

      <div
        style={{
          paddingLeft: "5%",
          paddingRight: "5%",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative"
        }}
      >
        {carousel}
      </div>
      <div
        style={{
          zIndex: 2,
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          width: "100vw"
        }}
      >
        {currentStep < steps.length - 1 ? (
          <>
            <Button
              style={{ height: "60px", width: "60px", marginLeft: "20px" }}
              size="large"
              type="primary"
              onClick={() => {
                setSurveyResults((prev) => {
                  const updated = { [currentStep]: 1 };
                  prev[categoryKey] = { ...prev[categoryKey], ...updated };
                  return prev;
                });

                carouselRef.current.goTo(currentStep + 1, false);
                setStep(currentStep + 1);
              }}
            >
              Yes
            </Button>
            <Button
              style={{
                height: "60px",
                width: "60px",
                alignSelf: "flex-end",
                marginRight: "20px"
              }}
              size="large"
              type="danger"
              onClick={() => {
                setSurveyResults((prev) => {
                  const updated = { [currentStep]: -1 };
                  prev[categoryKey] = { ...prev[categoryKey], ...updated };
                  return prev;
                });
                carouselRef.current.goTo(currentStep + 1, false);
                setStep(currentStep + 1);
              }}
            >
              No
            </Button>{" "}
          </>
        ) : null}
      </div>
      {currentStep < steps.length - 1 ? (
        <div style={{ position: "fixed", bottom: 0, right: 0, left: 0 }}>
          <Divider />
          <Steps
            type="navigation"
            size="small"
            labelPlacement={"horizontal"}
            current={currentStep}
            onChange={handleChangeStep}
          >
            {steps}
          </Steps>
        </div>
      ) : null}
    </>
  );
}
