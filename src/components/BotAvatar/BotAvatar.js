import React from "react";
import Avatar from "../../assets/chatbot-avatar.png";
import "./BotAvatar.css";

const BotAvatar = props => {
  return <img className="bot-avatar" src={Avatar} alt="Bot Avatar" />;
};

export default BotAvatar;
