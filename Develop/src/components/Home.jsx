// src/components/Home.jsx
import React from "react";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Budgie</h1>
      <button onClick={() => console.log("Sign Up / Log In clicked")}>Sign Up / Log In</button>
    </div>
  );
}

export default Home;
