import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      setUser(formData);
      alert("Signed up successfully!");
    } else {
      if (formData.username === user?.username && formData.password === user?.password) {
        alert("Logged in successfully!");
      } else {
        alert("Invalid credentials");
      }
    }
    setFormData({ username: "", password: "" });
    const navigate = useNavigate();
    navigate("/transaction-list")
  };

  return (
    <div className="home">
      <h1>Welcome to Budgie!</h1>
      
      <button onClick={() => setIsSignUp(true)}>Sign Up</button>
      <button onClick={() => setIsSignUp(false)}>Log In</button>

      <form onSubmit={handleSubmit}>
        <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{isSignUp ? "Sign Up" : "Log In"}</button>
      </form>

      {user && !isSignUp && (
        <div>
          <h3>Welcome back, {user.username}!</h3>
        </div>
      )}
    </div>
  );
}

export default Home;
