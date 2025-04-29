import { IAvailableCommands } from "./types/Commands";
export const availableCommands : IAvailableCommands = { 
  params: ["help", "user", "form"],
  description: "List of available commands.",
  commands: {
    help: {
      name: "help",
      params: ["user", "form"],
      description: "Show help for the available commands.",
      details: {
        usages: "Usage : help [options]",
        options: {
          user: {
            name: "users",
            description: "Show help for the user commands.",
          },
          form: {
            name: "form",
            description: "Show help for the form commands.",
          },
        },
      },
    },
    user: {
      name: "user",
      params: [
        "help",
        "show",
        "logout",
        "delete-account",
        "chamge-password",
        "update",
      ],
      description: "List of commands for user.",
      details: {
        usages: "Usage : user [options]",
        options: {
          help:{
            name:"help",
            description:"Show help for the user commands."
          },
          show:{
            name:"show",
            description:"Show user details."
          },
          logout:{
            name:"logout",
            description:"Logout from your account."
          },
          "delete-account":{
            name:"delete-account",
            description:"Delete your account."
          },
          "change-password":{
            name:"change-password",
            description:"Change your password."
          },
          update:{
            name:"update",
            description:"Update your profile."
          },
        },
      },
    },
    form: {
      name: "form",
      params: ["help", "login", "signup", "register", "reset"],
      description: "List of commands for form.",
      details: {
        usages: "Usage : form [options]",
        options: {
          help: {
            name: "help",
            description: "Show help for the form commands.",
          },
          login: {
            name: "login",
            description: "Login to your account.",
          },
          signup: {
            name: "signup",
            description: "Sign up for a new account.",
          },
          register: {
            name: "register",
            description: "Register for a new account.",
          },
          reset: {
            name: "reset",
            description: "Reset the form.",
    }
  }
      },
    },
  }
};
