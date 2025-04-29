import { BasePrompt } from "../BasePrompt";
import { IPastCommand, IPastCommands } from "../types/Commands";

export const PastCommandController = (pastCommands: IPastCommands) => {
  console.log(pastCommands);
  return (
    pastCommands &&
    pastCommands.commands.map((command: any, index: number) => {
      return <PastCommand command={command} index={index} />;
    })
  );
};

export const PastCommand = ({ command, index }: IPastCommand) => {
  console.log("PastCommand Im here", command);
  let { type, cmd, params, title } = command;
  return (
    <div className="input-controller" key={index}>
      <div className="input-title">
        <BasePrompt />
      </div>
      <div className="c-ffffff">
        {title}
      </div>
    </div>
  );
};
