import { useState } from "react";
import axios from "axios";

const PRIVATE_KEY = "a198a56e-a112-47a3-abaf-f903ed216d34";

const LoginForm = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const url = "https://api.chatengine.io/users/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        url,
        {
          username: username,
          secrect: password,
        },
        {
          headers: {
            "Private-Key": PRIVATE_KEY,
          },
        }
      );
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
      setError("");
    } catch (e) {
      setError("Oops, incorrect credentials");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Apllication</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  );
};
export default LoginForm;
