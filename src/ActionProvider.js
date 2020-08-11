// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleHtmlList = () => {
    const message = this.createChatBotMessage(
      "Just getting started huh? That's Awesome! Here are a some good spots to learn more about HTML:",
      {
        widget: "htmlLinks"
      }
    );
    this.updateChatbotState(message);
  };

  handleCssList = () => {
    const message = this.createChatBotMessage(
      "OooOoo, learning how to style I see. This is what I have for CSS:",
      {
        widget: "cssLinks"
      }
    );
    this.updateChatbotState(message);
  };

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Nice! Here are some resources to spice up your JavaScript skills:",
      {
        widget: "javascriptLinks"
      }
    );
    this.updateChatbotState(message);
  };

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi there!");
    this.updateChatbotState(greetingMessage);
  }

  greviousGreet() {
    const greetingMessage = this.createChatBotMessage(
      "General Kenobi! You are a bold one."
    );
    this.updateChatbotState(greetingMessage);
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  }
}

export default ActionProvider;
