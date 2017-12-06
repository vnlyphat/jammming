import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  //add Track method
  addTrack() {
    this.props.onAdd(this.props.track);
  }

  //remove track method
  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  //show + or - on the list
  renderAction () {
    const isRemoval = this.props.onRemove;
    if (isRemoval) {
      return <a className="Track-action" onClick={this.removeTrack}> - </a>;
    } else {
      return <a className="Track-action" onClick={this.addTrack}> + </a>;
    }
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
          {this.renderAction()}
      </div>
    );
  }
}

export default Track;
