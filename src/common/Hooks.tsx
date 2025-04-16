
import {Menu} from "./menu";
import React from "react";

interface DragProps {
  nodeRef?: React.RefObject<HTMLDivElement>;
}

class DragComponent extends React.Component<DragProps> {
  private nodeRef: React.RefObject<HTMLDivElement>;
  
  constructor(props: DragProps) {
    super(props);
    this.nodeRef = props.nodeRef || React.createRef<HTMLDivElement>();
  }

 
  render() {
    return (
      <div className='header-bar' ref={this.nodeRef}>
        <div className='title-bar'>
          <div className='title'>Welcome To Linux Form</div>
          <div className='bar-actions'>
            <div className='action minimize'></div>
            <div className='action close'></div>
          </div>
        </div>
        <Menu />
      </div>
    );
  }
}

export default DragComponent;
