import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticks: new Date()
    };
  }

  ticking() {
   this.setState({ticks: new Date()});
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.ticking(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>The clock: { this.state.ticks.toLocaleTimeString() }</h1>
      </div>
    )
  }
}

export default Clock; 