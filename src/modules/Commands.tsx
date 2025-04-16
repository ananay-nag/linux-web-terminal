import BaseComponent from "./Base";
import {InputController} from "./InputController";
import {availableCommands} from "../common/preDefineCommands";
import {HelpController, WrongInputController} from "../common/DefineCommands";

export class Commands extends BaseComponent {
  stateValues: any;
  constructor(props: any) {
    super(props);
    this.state = {
      name: "hii",
      pastCommands: [],
      commandValue: "",
      availableCommands: availableCommands,
      isNewPrompt: false,
    };
    this.setCommandControllerState = this.setCommandControllerState.bind(this);
    this.processCommands = this.processCommands.bind(this);
    this.parseCommand = this.parseCommand.bind(this);
  }
  setCommandControllerState(name: any) {
    this.setState({...this.state, ...name});
  }
  processCommands(event: any) {
    if (event?.key == "Enter") {
      event.preventDefault();
      console.log("Enter Pressed", this.state.commandValue);
      this.setCommandControllerState({commandValue: ""});
      let command : string = this.state.commandValue.toString().trim().replace(/ /g, "");
      let element: any;
      if (!command || !command.length) {
        return null;
      }
      let [cmd, params]: Array<string> = command.split("--");
      if (!Object.keys(this.state.availableCommands).includes(cmd)) {
        element = WrongInputController;
      } else {
        element = this.parseCommand(cmd, params);
      }

      let setCommand = {
        type: "input",
        cmd: cmd,
        name: params,
        value: params,
        output: {
          isDom: true,
          content: element,
        },
      };
      this.setState({pastCommands: [...this.state.pastCommands, setCommand]});
    }
  }
  // addCommandToHistory(setCommand:any){

  // }
  createCommand(_cmd:string,_params:string,){

  }
  parseCommand(cmd: string, params: string) {
    if (params.toLowerCase() == "help") {
      return HelpController;
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
    return this.state.pastCommands && this.state.pastCommands.length ? (
      <>
        <PastCommandController props={this} state={this.state} getStateValue={this.getStateValue} />
        {!this.state.isNewPrompt && (
          <InputCommandController
            state={this.state}
            getStateValue={this.getStateValue}
            setCommandControllerState={this.setCommandControllerState}
            processCommands={this.processCommands}
          />
        )}
      </>
    ) : (
      !this.state.isNewPrompt && (
        <InputCommandController
          state={this.state}
          getStateValue={this.getStateValue}
          setCommandControllerState={this.setCommandControllerState}
          processCommands={this.processCommands}
        />
      )
    );
  }
}

export class InputCommandController extends BaseComponent {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount(): void {}

  render() {
    console.log("InputCommandController ", this);
    return (
      <div className='input-controller'>
        <div className='input-title'>
          <div className='c-3cd509'>user@linuxform.com</div>
          <div className='c-ffffff'> &nbsp;: ~ $</div>
        </div>
        <InputController setCommandControllerState={this.props.setCommandControllerState} state={this.props.getStateValue()} processCommands={this.props.processCommands} />
      </div>
    );
  }
}
export class PastCommandController extends BaseComponent {
  constructor(props: any) {
    super(props);
  }
  componentDidMount(): void {}

  render() {
    console.log("PastCommandController", this);
    return <>{this.props.state.pastCommands && this.props.state.pastCommands.map((command: any) => <PastCommand command={command} availableCommands={this.props.state.availableCommands} />)}</>;
  }
}

export class PastCommand extends BaseComponent {
  constructor(props: any) {
    super(props);
  }
  command : { [key: string]: any } = this.props.command;
  availableCommands : { [key: string]: any } = this.props.availableCommands;

  // console.log("command", command);
 
  render() {
    console.log("availableCommands", this.availableCommands);
    console.log("PastCommand", this);
    console.log("command", this.command);
    let {cmd, value, output} = this.command;
    return (
      <>
        <div className='input-controller'>
          <div className='input-title'>
            <div className='c-3cd509'>user@linuxform.com</div>
            <div className='c-ffffff'> &nbsp;: ~ $ &nbsp;</div>
          </div>
          <div className='c-ffffff'>
            {cmd} --{value}
          </div>
        </div>
        {<output.content command={this.availableCommands[cmd]}/>}
      </>
    );
  }
}
