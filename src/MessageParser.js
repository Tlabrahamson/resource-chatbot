// MessageParser starter code
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("hello there")) {
      this.actionProvider.greviousGreet();
    }

    if (lowerCaseMessage.includes("html")) {
      this.actionProvider.handleHtmlList();
    }

    if (lowerCaseMessage.includes("css")) {
      this.actionProvider.handleCssList();
    }

    if (lowerCaseMessage.includes("javascript")) {
      this.actionProvider.handleJavascriptList();
    }
  }
}

export default MessageParser;
