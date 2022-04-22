import React, { Component } from "react";

class Event extends Component {
  render() {
    console.log(this.props);
    const { event } = this.props;
    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <p className="start-date">
          {event.start.dateTime} ({event.start.timeZone})
        </p>

        <p className="location">
          @{event.summary} | {event.location}
        </p>
        </div>
    )}
  }

export default Event;