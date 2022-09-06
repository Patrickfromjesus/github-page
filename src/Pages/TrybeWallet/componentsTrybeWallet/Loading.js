import { Component } from 'react';

class Load extends Component {
  render() {
    return (
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>
    );
  }
}

export default Load;
