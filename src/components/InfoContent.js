import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "antd/dist/antd.css";
import { Typography, Button, Row } from "antd";
// import Wheel from "../components/Wheel";
import NewWheel from "../components/NewWheel";
import ProgressBarCustom from "../components/Progress";
import { wellnessText as info } from "../constants/settings";

export default function InfoContent({
  setCardContentView,
  setCategory,
  transitionTitle,
  surveyResults
}) {
  const [clickId, setClickID] = useState({ id: 0, isClicked: false });
  const wellnessText = {
    0: "Soul Care is a multi-dimensional approach to wellness rooted in six dimensions of well-being. This assessment will give you an overview of your range of engagement in each  dimension so that you have a better understanding of your total well-being.",
    1: "The Soul Dimension is one’s ability to find purpose, nourish your soul, seek understanding, find meaning and seek fulfillment. It’s not limited to religious beliefs and practices, yet includes the values placed into action to create harmony, peace, and joy.",
    2: "The Connection Dimension deals with our relationships with others. It involves feeling connected in relationships, having a strong social network of support and guidance in times of need.",
    3: "The Mindset Dimension is associated with self-development, growth and lifelong learning. It includes engaging the subject or topic you know nothing about and being willing to first consider without judgment or agreement.",
    4: "The Feelings Dimension consists of being able to experience a broad range of emotions, thoughts, and reactions. It also includes identifying, managing and understanding our emotions as we experience them.",
    5: "The Movement Dimension is the area many often associate with overall wellness. This area includes the ways we take care of our bodies that produce endurance, flexibility and strength along with encouraging knowledge about food and nutrition.",
    6: "The Surroundings Dimension incorporates the interdependency of us as individuals and our environment. The core element is recognizing that the spaces that we live in affect our health and well-being and support a healthy, safe & comfortable environment."
  };

  const duration = 250;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in`,
    opacity: 1
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 }
  };

  const transitionText = (
    <Transition
      key={`${clickId.id}-${clickId.isClicked.toString()}`}
      in={true}
      timeout={duration}
      appear={true}
    >
      {(state) => (
        <div
          style={{
            ...{
              paddingTop: "20px",
              paddingRight: "5%",
              position: "absolute",
              maxHeight: "35%",
              overflow: "auto"
            }
            // ...defaultStyle,
            // ...transitionStyles[state]
          }}
        >
          <Typography.Title
            key={clickId.id + "title"}
            style={{
              ...{
                paddingLeft: "5%",
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "15Px",
                color: "black"
              },
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            {clickId.isClicked ? "" : 'What is the "Soul Care Wheel" '}
          </Typography.Title>
          <Typography.Paragraph
            key={clickId.id + "paragraph"}
            style={{
              ...{
                paddingLeft: "5%",
                fontFamily: "Montserrat",
                fontSize: "15Px",
                color: "black",
                textAlign: "left"
              },
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            {!clickId.isClicked ? wellnessText[0] : wellnessText[clickId.id]}
          </Typography.Paragraph>
        </div>
      )}
    </Transition>
  );

  return (
    <div
      style={{
        height: "100%"
      }}
    >
      <div style={{}}>
        <Button
          type="primary"
          disabled={clickId.isClicked === false}
          block
          onClick={(_) => setCardContentView("survey")}
        >
          {clickId.isClicked === true
            ? "Click Here to Begin Assessment"
            : "Touch the Wheel for More Information"}
        </Button>
        <div
          style={{ paddingLeft: "5%", paddingTop: "10px", paddingRight: "5%" }}
        >
          <ProgressBarCustom surveyResults={surveyResults} />
        </div>
        <Row>{transitionText}</Row>
      </div>
      <NewWheel
        clickId={clickId}
        setClickID={setClickID}
        setCategory={setCategory}
        transitionTitle={transitionTitle}
      />
    </div>
  );
}
