import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
const Chatfeed = (props) => {
  const { chats, activeChat, userNamr, messages } = props;
  const chat = chats && chats[activeChat];
  const renderMessages = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
    });
  };
  return (
    <>
      <div>Chatfeed</div>
    </>
  );
};

export default Chatfeed;
