import React, { useState } from "react";
import { Typography, Button } from "antd";
import { ResultsTable } from "../components/ResultsContent";
import ProgressBarCustom from "../components/Progress";

export default function ResultsPage({ surveyResults, currentCategory }) {
  return (
    <div
      style={{
        paddingLeft: "5%",
        paddingTop: "10px",
        paddingRight: "5%",
        textAlign: "center"
      }}
    >
      <ProgressBarCustom surveyResults={surveyResults} />
      <Typography.Title level={3} style={{ paddingTop: "10px" }}>
        Are you ready for a Soul Trasformation?
      </Typography.Title>
      <Typography.Text>
        Based on your assessment, you’re Ready for a Soul Shift.{" "}
      </Typography.Text>
      <Typography.Text>
        What if you could bring “you” – the best version of “you” to the world
        every day? What if your energy was not directed at trying to “fix,” but
        rather consciously focused on demonstrating, with ease, all that is you
        on your very best day, every day?{" "}
      </Typography.Text>
      <div style={{ paddingTop: "10px" }} />
      <Button
        href="https://soul-abode-coaching.mykajabi.com/"
        target="_blank"
        style={{ fontSize: "15px" }}
        block
        type="primary"
      >
        Start your Soul Care Journey Here
      </Button>
      <div style={{ paddingTop: "10px" }} />
      <ResultsTable key={currentCategory} surveyResults={surveyResults} />
    </div>
  );
}
