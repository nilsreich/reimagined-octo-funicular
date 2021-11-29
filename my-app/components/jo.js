import React from 'react';


class Calculator extends React.Component {

  constructor(props) {
    super(props);

    this.state = { value: 3 }

  }
  handleChange = (e) => {
    this.setState({ value: e.taget })
  }

  render() {
    return (
      <div className="flex flex-col h-full overflow-hidden bg-white w-full">
        <div className="flex-1">{this.state.value}</div>
        <div>
          <input className="w-full focus:outline-none border-t" onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default Calculator;

