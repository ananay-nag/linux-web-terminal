import BaseComponent from "./Base";

export class InputController extends BaseComponent {
  constructor(props: any) {
    super(props);
    this.state = {
      commandValue: "",
    };
    this.setTextControllerValue = this.setTextControllerValue.bind(this);
    this.handleProcessCommand = this.handleProcessCommand.bind(this);
  }
  setTextControllerValue(event: any) {
    event.preventDefault();
    if (event?.key == "Enter") {
      return null;
    } else {
      this.props.setCommandControllerState({commandValue: event?.target?.value});
    }
  }
  handleProcessCommand(event:any){
    this.props.processCommands(event);
  }
  componentDidMount(): void {
    document.getElementById("input-text-controller")?.focus();
  }
  render() {
    // console.log("InputController",this)
    return (
      <div className='input-actions'>
        <form
          autoComplete='off'
          onSubmit={() => {
            event?.preventDefault();
          }}>
          <input
            className='input-text-controller'
            id='input-text-controller'
            autoFocus={true}
            autoComplete={undefined}
            value={this.props.state.commandValue}
            onKeyPress={()=>{this.handleProcessCommand(event)}}
            onChange={this.setTextControllerValue}
          />
        </form>
      </div>
    );
  }
}
