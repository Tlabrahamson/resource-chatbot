import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";

// Widgets
import LearningOptions from "./components/learningOptions/learningOptions";
import LinkList from "./components/LinkList/LinkList";

const botName = "Resource Bot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hi, I'm ${botName}. I have some pretty solid resources on web development, what are you looking for?`,
      {
        widget: "learningOptions"
      }
    )
  ],
  customComponents: {
    botAvatar: props => <BotAvatar {...props} />
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#463fb5"
    },
    chatButton: {
      backgroundColor: "#463fb5"
    }
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: props => <LearningOptions {...props} />
    },
    {
      widgetName: "htmlLinks",
      widgetFunc: props => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to Basic HTML & HTML5",
            url:
              "https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/",
            id: 1
          },
          {
            text: "W3Schools HTML Tutorial",
            url: "https://www.w3schools.com/html/",
            id: 2
          },
          {
            text: "HTML Dog Beginner Tutorial",
            url: "https://htmldog.com/guides/html/beginner/",
            id: 3
          }
        ]
      }
    },
    {
      widgetName: "cssLinks",
      widgetFunc: props => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to Basic CSS",
            url:
              "https://www.freecodecamp.org/learn/responsive-web-design/basic-css/",
            id: 1
          },
          {
            text: "W3Schools CSS Tutorial",
            url: "https://www.w3schools.com/css/",
            id: 2
          },
          {
            text: "Mozilla CSS basics",
            url:
              "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
            id: 3
          },
          {
            text: "CSS Tricks",
            url: "https://css-tricks.com/",
            id: 4
          },
          {
            text: "Flexbox Froggy",
            url: "https://flexboxfroggy.com/",
            id: 5
          }
        ]
      }
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: props => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3
          },
          {
            text: "Wes Bos",
            url: "https://wesbos.com/",
            id: 4
          },
          {
            text: "W3Schools JavaScript Tutorial",
            url: "https://www.w3schools.com/js/",
            id: 5
          }
        ]
      }
    }
  ]
};

export default config;
