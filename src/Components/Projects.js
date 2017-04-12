import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleValues = this.handleValues.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: '',
      arr: []
    };
  }

  handleValues(evt) {
    this.setState({
      value: evt.target.value
    })
  }

  handleSubmit(evt) {
    const arrVal = this.state.arr.slice();
    arrVal.push(this.state.value);
    this.setState({
      arr: arrVal,
      value: ''
    });
    console.log(evt.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleValues} value={this.state.value} />
        <button onClick={this.handleSubmit} className="btn">Submit Values</button>
        <table className="table-striped">
          <th>Added Item</th>
          <tbody>
            {this.state.arr.map((items, index) => {
              return (<tr key={index}><td>
                {items}
              </td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
export default NameForm;