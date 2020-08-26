import React, { useState } from "react";
import "antd/dist/antd.css";
import { Transition } from "react-transition-group";
import { Card, Button, Layout, Header } from "antd";
import CardContent from "../components/CardContent";
import InfoContent from "../components/InfoContent";
import { wheel, categories } from "../constants/settings";

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

  console.log("survey results", surveyResults);
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

  return (
    <Card
      title={transitionedTitle}
      headStyle={{
        backgroundColor:
          currentCategory.key === "default"
            ? "rgb(130,170,145)"
            : currentCategory.color,
        borderRadius: "20px 20px 0 0",
        borderWidth: "0px",
        fontFamily: "Montserrat",
        color: currentCategory.key !== "connection" ? "white" : "black"
      }}
      extra={
        cardContentView !== "info" ? (
          <Button
            ghost
            shape="round"
            size="small"
            onClick={() => {
              setCardContentView(cardContentTypes.info);
              setCurrentCategory(wheel.default);
            }}
          >
            Return To Wheel{" "}
          </Button>
        ) : null
      }
      hoverable
      style={{
        height: "95vh",
        width: "89vw",
        display: "inline-block",
        borderWidth: "5px",
        borderRadius: "25px",
        textAlign: "left",
        font: "montserrat"
      }}
    >
      <CardContentSelector
        contentType={cardContentView}
        setCardContentView={setCardContentView}
        setCategory={setCurrentCategory}
        currentCategory={currentCategory}
        surveyResults={surveyResults}
        setSurveyResults={setSurveyResults}
        transitionTitle={transitiontitle}
      />
    </Card>
  );
}
