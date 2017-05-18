import React from 'react';

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1>Hello world</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>React app</p>
          </div>
        </div>
      </div>
    );
  }
}
