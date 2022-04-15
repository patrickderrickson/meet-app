import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        infoText: "",
      };
    
      handleInputChanged = (event) => {
        const value = event.target.value;
        if (value < 1 || value > 32) {
          this.setState({
            numberOfEvents: "",
            infoText: "Please enter a number between 1 and 32",
          });
        } else {
          this.setState({
            numberOfEvents: value,
            infoText: "",
          });
        }
    };

    render() {
        return (
          <div className="NumberOfEvents">
            <input
              type="number"
              className="numberOfEvents"
              value={this.state.numberOfEvents}
              onChange={this.handleInputChanged}
            />
          </div>
        );
      }
    }

  export default NumberOfEvents;