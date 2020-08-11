// MessageParser starter code
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hey")) {
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

    if (
      lowerCaseMessage.includes("fuck") ||
      lowerCaseMessage.includes("shit") ||
      lowerCaseMessage.includes("bitch")
    ) {
      this.actionProvider.scold();
    }
  }
}

export default MessageParser;
