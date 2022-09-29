import { TextField } from "@mui/material";
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="content">
      <div className="setting">
        <span style={{ fontSize: 30 }}>Quiz Setting</span>
        <div className="setting_select">
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter your Name"
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: 25 }}
            select
            label="select category"
            variant="outlined"
          />
        </div>
      </div>
      <img src="/quiz.svg" className="banner" alt="quiz img" />
    </div>
  );
};

export default Home;
