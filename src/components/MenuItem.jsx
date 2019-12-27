import React from "react";
import Sidebar from "./Sidebar.jsx";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({
      clicked: true
    });
    alert(this.state.clicked);
  };
  render() {
    console.log(this.props.submenu.item);
    return (
      <div className="menu_item" onClick={this.handleClick}>
        {this.state.clicked ? (
          <div className="menu_open">
            {this.props.submenu.map(({ item }, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        ) : (
          ""
        )}
        <h5>{this.props.item}</h5>
      </div>
    );
  }
}

export default MenuItem;
