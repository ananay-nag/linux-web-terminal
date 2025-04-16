import "./App.css";
import "./assets/css/style.css";
import BaseComponent from "./modules/Base";
import DragComponent from "./common/Hooks";
import {Commands} from "./modules/Commands";

import {createRef} from "react";
import Draggable from "react-draggable";

class MainDesk extends BaseComponent {
  draggableRef: any;
  constructor(props: any) {
    super(props);
    this.state = {
    };
    this.draggableRef = createRef();
  }

  render() {
    return (
      <div className='main-container'>
        <Draggable nodeRef={this.draggableRef} handle='.title-bar'>
          <div className='main-frame' id='main-frame'>
            <DragComponent nodeRef={this.draggableRef} />
            <div className='controller-body'>
              <div
                className='controller' // id='controller'
                onClick={() => {
                  document.getElementById("input-text-controller");
                }}>
                <Commands />
              </div>
            </div>
          </div>
        </Draggable>
        <div className='owner'>Made with ❤️ from ananay nag</div>
      </div>
    );
  }
}

export default MainDesk;
// export default App
