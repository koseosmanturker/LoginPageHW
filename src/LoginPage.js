import "./styles.css";
import React, { useState } from "react";

function LoginPage() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  };

  const imageStyle = {
    width: "100px",
    height: "100px"
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2706/2706874.png"
        alt="Phone Book Image"
        style={imageStyle}
      />
      <br />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <br />
      <button>Submit</button>
    </div>
  );
}

export default LoginPage;
