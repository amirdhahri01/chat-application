import { ChatEngine } from "react-chat-engine";
import "./App.css";
import Chatfeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {
  if (!localStorage.getItem("username")) {
    return <LoginForm />;
  }
  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="1ce2707a-58fb-4346-971c-7a8367f4f8df"
        userName="AmirDhahri"
        userSecret="azerty123"
        renderChatFeed={(ChatAppProps) => {
          return <Chatfeed {...ChatAppProps} />;
        }}
        onNewMessage={() => {
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play();
        }}
      />
    </>
  );
}
export default App;
