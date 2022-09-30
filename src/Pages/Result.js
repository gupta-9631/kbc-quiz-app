import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = ({ name, score }) => {
  const navigate = useNavigate();
  useEffect(() => {
    shoutOut();
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  const [shout, setShout] = useState("");

  const shoutOut = () => {
    if (score <= 2) {
      setShout("Good Effort,");
    } else if (score >= 2 && score <= 4) {
      setShout("Weldone 👍");
    } else if (score.length >= 5 && score <= 7) {
      setShout("Almost Perfect,");
    } else if (score >= 8) {
      setShout("Perfection 👌");
    } else {
      setShout("Keep Playing");
    }
  };


  return (
    <div className="result">
      <span className="shout" style={{ marginBottom: 40 }}>
        {shout} {name}
      </span>
      <span className="title"> Final Score: {score}/10</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go To HomePage
      </Button>
    </div>
  );
};

export default Result;
