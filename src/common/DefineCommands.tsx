import BaseComponent from "../modules/Base";

export class WrongInputController extends BaseComponent {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className='output-controller'>
        <pre>Type "show --help" for more information</pre>
      </div>
    );
  }
}

export class HelpController extends BaseComponent{
    constructor(props: any) {
        super(props);
    }
    command = this.props.command;
    render(){
        let {name, description, commands} = this.command;
        return (
            <div className='output-controller'>
              <div>Usage : {name} [options]</div>
              <div>Description : {description}</div>
              <div>options:</div>
              <table className="ws-table-all notranslate">
              <tbody>
              {Object.entries(commands).map(([key, value]) => (
                <CommandsDetailController value={value} key={key}/>
              ))}
              </tbody>
              </table>
              
            </div>
          );
    }
    
  }
  export class CommandsDetailController extends BaseComponent {
    constructor(props: any) {
        super(props);
    }
    detail = this.props.value;
    render(){
        let {name, description} = this.detail;
        return (
            <tr id='cmd-details'>
              <td id="cmd-details-name">{name} : </td>
              <td id="cmd-details-desc">{description}</td>
            </tr>
          );
    }
    
  }
