import React from "react";
import { wheel, categories } from "../constants/settings";

export default function ProgressBarCustom({ surveyResults }) {
  let sectionsComplete = 0;
  const colors = categories.map((category, index) => {
    const info = wheel[category];
    const isComplete =
      surveyResults !== null &&
      surveyResults !== undefined &&
      Object.keys(surveyResults[category]).length === 6;
    if (isComplete) {
      sectionsComplete = sectionsComplete + 1;
    }

    // Determine the radius
    let radius = "0px 0px 0px 0px";
    if (index === 0) {
      radius = "10px 0px 0px 10px";
    }
    if (index === categories.length - 1) {
      radius = "0px 10px 10px 0px";
    }

    return (
      <div
        key={category}
        style={{
          position: "relative",
          height: "15px",
          width: "100%",
          borderRadius: radius,
          borderLeft: index >= 0 ? `1px solid ${info.color}` : "0px",
          borderTop: `2px solid ${info.color}`,
          borderBottom: `2px solid ${info.color}`,
          borderRight:
            index === categories.length - 1 ? `2px solid ${info.color}` : "0px",
          backgroundColor: isComplete ? info.color : "rgb(245,245,245)"
        }}
      />
    );
  });
  return (
    <>
      <div style={{ textAlign: "start" }}>
        My Progress: {Math.ceil((sectionsComplete / 6) * 100)}
        {" %"}
      </div>
      <div style={{ display: "flex" }}>{colors}</div>
    </>
  );
}
