import { ChatEngine } from "react-chat-engine";
import "./App.css";
import Chatfeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import newMessageAudio from "./Audio/new-message-audio.mp3";
const PROJECT_ID = "1ce2707a-58fb-4346-971c-7a8367f4f8df";

function App() {
  if (!localStorage.getItem("username")) {
    return <LoginForm />;
  }
  return (
    <>
      <ChatEngine
        height="100vh"
        projectID={PROJECT_ID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(ChatAppProps) => {
          return <Chatfeed {...ChatAppProps} />;
        }}
        onNewMessage={() => new Audio(newMessageAudio).play()}
      />
    </>
  );
}
export default App;
