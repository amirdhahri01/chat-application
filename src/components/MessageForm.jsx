import { SendOutlined, PictureOutlined } from "@ant-design/icons";

import { sendMessage, isTyping } from "react-chat-engine";

import { useState } from "react";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const [files, setFiles] = useState(null);
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleUpload = (event) => {
    setFiles(event.target.files);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
      setValue("");
    }
    if (files && files.length > 0) {
      sendMessage(creds, chatId, { files: files, text: "" });
      setFiles(null);
    }
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onFocus={() => {
          isTyping(props, chatId);
        }}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};
export default MessageForm;
