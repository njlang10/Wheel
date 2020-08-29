import React, { useState } from "react";
import "antd/dist/antd.css";
import { Transition } from "react-transition-group";
import { Button, Layout, Row, Col } from "antd";
import CardContent from "../components/CardContent";
import InfoContent from "../components/InfoContent";
import { ResultsTable } from "../components/ResultsContent";
import ProgressBarCustom from "../components/Progress";
import { wheel, categories } from "../constants/settings";

const cardContentTypes = { info: "info", survey: "survey", results: "results" };

// Wrapper to select the appropriate view to show in the card detail
function CardContentSelector({
  contentType,
  setCardContentView,
  setCategory,
  currentCategory,
  surveyResults,
  setSurveyResults,
  transitionTitle,
  userInfo,
  setUserInfo
}) {
  switch (contentType) {
    case cardContentTypes.info:
      return (
        <InfoContent
          setCardContentView={setCardContentView}
          setCategory={setCategory}
          transitionTitle={transitionTitle}
          surveyResults={surveyResults}
        />
      );
    case cardContentTypes.survey:
      return (
        <CardContent
          currentCategory={currentCategory}
          surveyResults={surveyResults}
          setSurveyResults={setSurveyResults}
          setCategory={setCategory}
          setCardContentView={setCardContentView}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
      );
    case cardContentTypes.results:
      return (
        <div
          style={{
            paddingLeft: "5%",
            paddingTop: "10px",
            paddingRight: "5%"
          }}
        >
          <ProgressBarCustom surveyResults={surveyResults} />
          {/* TODO add some text and stuff here */}
          <ResultsTable key={currentCategory} surveyResults={surveyResults} />
        </div>
      );
    default:
      return (
        <InfoContent
          setCardContentView={setCardContentView}
          setCategory={setCategory}
          transitionTitle={transitionTitle}
          surveyResults={surveyResults}
        />
      );
  }
}

// Main Card for whole app
export default function InfoCard() {
  // Setup contentview, category, and surveyresult state
  const [titleIsTransitioning, transitiontitle] = useState(true);
  const [cardContentView, setCardContentView] = useState(cardContentTypes.info);
  const [currentCategory, setCurrentCategory] = useState(wheel.default);
  const [surveyResults, setSurveyResults] = useState(() => {
    return categories.reduce((accum, current) => {
      accum[current] = {};
      return accum;
    }, {});
  });
  const [userInfo, setUserInfo] = useState(() => {
    return { firstName: null, lastName: null, email: null, isSignedUp: false };
  });

  const duration = 200;
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
  const transitionedTitle = (
    <Transition
      key={currentCategory.title}
      in={titleIsTransitioning}
      timeout={duration}
      appear={titleIsTransitioning}
    >
      {(state) => (
        <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
          {currentCategory.title}
        </div>
      )}
    </Transition>
  );

  console.log("Survey results", surveyResults);

  return (
    <Layout className="layout" style={{ maxHeight: "100vh" }}>
      <Layout.Header
        style={{
          backgroundColor:
            currentCategory.key === "default"
              ? "rgb(130,170,145)"
              : currentCategory.color,
          borderWidth: "0px",
          fontFamily: "Montserrat",
          color:
            currentCategory.key !== "connection" &&
            currentCategory.key !== "soul"
              ? "white"
              : "black",
          textAlign: "left",
          paddingLeft: "5%",
          position: "relative"
        }}
      >
        <Row justify="space-between" style={{ height: "64px" }}>
          {transitionedTitle}
          {cardContentView !== "info" ? (
            <Col>
              <Button
                ghost
                shape="round"
                size="small"
                onClick={() => {
                  setCardContentView(cardContentTypes.info);
                  setCurrentCategory(wheel.default);
                }}
              >
                Return To Wheel
              </Button>
            </Col>
          ) : null}
        </Row>
      </Layout.Header>
      <Layout.Content style={{ background: "white" }}>
        <CardContentSelector
          contentType={cardContentView}
          setCardContentView={setCardContentView}
          setCategory={setCurrentCategory}
          currentCategory={currentCategory}
          surveyResults={surveyResults}
          setSurveyResults={setSurveyResults}
          transitionTitle={transitiontitle}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
      </Layout.Content>
    </Layout>
  );
}
