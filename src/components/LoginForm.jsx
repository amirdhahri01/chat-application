import { useState } from "react";
import axios from "axios";

const PROJECT_ID = "1ce2707a-58fb-4346-971c-7a8367f4f8df";

const URL = "https://api.chatengine.io/chats/";

const LoginForm = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get(URL, {
        headers: {
          "Project-ID": PROJECT_ID,
          "User-Name": username,
          "User-Secret": password,
        },
      });
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
