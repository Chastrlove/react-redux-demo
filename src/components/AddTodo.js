import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as all from "../redux/actions/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  getTodo=()=>{
    this.props.getRemoteValue(123);
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
        <button className="get-todo" onClick={this.getTodo}>
          get Todo
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(all, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
// export default AddTodo;
