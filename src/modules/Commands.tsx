import BaseComponent from "./Base";
import { InputController } from "./InputController";
import { availableCommands } from "../common/preDefineCommands";
import { WrongInputController } from "../common/DefineCommands";
import { BasePrompt } from "../common/BasePrompt";
import {
  IAvailableCommands,
  IPastCommands,
  ISetCommand,
} from "../common/types/Commands";
import { PastCommandController } from "../common/components/PastCommands";

export class Commands extends BaseComponent {
  stateValues: any;
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      pastCommands: { commands: [] } as IPastCommands,
      commandValue: "" as string,
      availableCommands: availableCommands as IAvailableCommands,
      isNewPrompt: false,
      defaultCommand: availableCommands.commands.help,
    };
    this.setCommandControllerState = this.setCommandControllerState.bind(this);
    this.processCommands = this.processCommands.bind(this);
    this.parseCommand = this.parseCommand.bind(this);
  }
  setCommandControllerState(name: any) {
    this.setState({ ...this.state, ...name });
  }
  processCommands(event: any) {
    if (event?.key == "Enter") {
      event.preventDefault();
      console.log("Enter Pressed", this.state.commandValue);
      // this.setState({ ...this.state, commandValue: ""});
      let command: string = this.state.commandValue
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");
      if (!command || !command.length) {
        return null;
      }
      let setCommand: ISetCommand = {
        type: "cmd",
        cmd: "",
        params: "",
        title: "",
      };
      let [cmd, params = ""]: Array<string> = command.split(" ");
      console.log("cmd", cmd);
      console.log("params", params);
      setCommand = {
        ...setCommand,
        title: command,
      };
      if (!this.state.availableCommands.params.includes(cmd)) {
        setCommand = { ...setCommand, cmd: this.state.defaultCommand.name };
      }
      if (
        this.state.availableCommands.params.includes(cmd) &&
        (params == "help" || !params)
      ) {
        setCommand = { ...setCommand, cmd, params: params ? "help" : "" };
      }
      if (
        this.state.availableCommands.params.includes(cmd) &&
        this.state.availableCommands.commands[cmd].params.includes(params)
      ) {
        setCommand = { ...setCommand, cmd, params };
      } else {
        setCommand = { ...setCommand, cmd: this.state.defaultCommand.name };
      }
      console.log("setCommand", setCommand);

      this.setState(
        {
          pastCommands: {
            commands: [...this.state.pastCommands.commands, setCommand],
          },
          commandValue: ""
        },
      );
    }
  }

  parseCommand(cmd: string, params: string | null) {
    if (!params || Object.keys(this.state.availableCommands).includes(params)) {
      return this.state.availableCommands[cmd];
    }
    switch (cmd) {
      case "user":
      // return parseUserCommand(value);
      case "show":
      // return parseShowCommand(value);
      default:
        return WrongInputController;
    }
  }
  getStateValue(key: string) {
    if (!key) return this.state;
    return this.state[key];
  }

  componentDidMount(): void {}

  render() {
    return (
      <>
      <PastCommandController commands={this.state.pastCommands.commands} />
      <InputCommandController
        state={this.state}
        getStateValue={this.getStateValue}
        setCommandControllerState={this.setCommandControllerState}
        processCommands={this.processCommands}
      />
      </>
    )
    // return this.state.pastCommands.commands &&
    //   this.state.pastCommands.commands.length ? (
    //   <PastCommandController commands={this.state.pastCommands.co} />
    // ) : (
    //   <InputCommandController
    //     state={this.state}
    //     getStateValue={this.getStateValue}
    //     setCommandControllerState={this.setCommandControllerState}
    //     processCommands={this.processCommands}
    //   />
    // );
  }
}

export class InputCommandController extends BaseComponent {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount(): void {}

  render() {
    // console.log("InputCommandController ", this);
    return (
      <div className="input-controller">
        <div className="input-title">
          <BasePrompt />
        </div>
        <InputController
          setCommandControllerState={this.props.setCommandControllerState}
          state={this.props.getStateValue()}
          processCommands={this.props.processCommands}
        />
      </div>
    );
  }
}

// export class PastCommandController extends BaseComponent {
//   constructor(props: any) {
//     super(props);
//   }
//   componentDidMount(): void {}

//   render() {
//     // console.log("PastCommandController", this);
//     return (
//       <>
//         {this.props.state.pastCommands &&
//           this.props.state.pastCommands.map((command: any) => (
//             <PastCommand
//               command={command}
//               availableCommands={this.props.state.availableCommands}
//             />
//           ))}
//       </>
//     );
//   }
// }

// export const PastCommand = ({ command, availableCommands }: any) => {
//   console.log("availableCommands", availableCommands);
//   console.log("PastCommand", command);
//   let { cmd, value, output } = command;
//   return (
//     <>
//       <div className="input-controller">
//         <div className="input-title">
//           <BasePrompt />
//         </div>
//         <div className="c-ffffff">
//           {cmd} --{value}
//         </div>
//       </div>
//       {<output.content command={availableCommands[cmd]} />}
//     </>
//   );
// };
