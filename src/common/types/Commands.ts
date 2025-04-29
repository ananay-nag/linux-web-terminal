import { PastCommand } from "../components/PastCommands";

export interface IAvailableCommands {
  params: string[];
  description: string;
  commands: {
    [key: string]: ICommands;
  };
}

export interface ICommands {
  name: string;
  params: string[];
  description: string;
  details: {
    usages: string;
    options?: {
      [key: string]: {
        name: string;
        description: string;
      };
    };
  };
}

export interface ISetCommand {
  type?: string;
  cmd?: string;
  params?: string;
  title?: string;
}

// this interface of Array of ISetCommand
export interface IPastCommands {
  commands: ISetCommand[];
}

export interface IPastCommand {
  command : ISetCommand;
  index? : number;
}