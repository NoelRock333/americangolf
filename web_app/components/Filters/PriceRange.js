import React, { Component } from 'react';
class PriceRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 100,
      min: 25,
      max: 100
    };

    this.changeRange = this.changeRange.bind(this);
  }

  changeRange(ev) {
    const { left, width} = ev.currentTarget.getBoundingClientRect();
    const diffX = ev.clientX - left;
    const percentage = diffX / width * 100;
    this.setState({percentage: percentage > 100 ? 100 : percentage});
  }

  handleMouseDown(ev) {
    console.log(ev.clientX);
  }

  render() {
    const { percentage, min, max } = this.state;
    return (
      <div className="refinement price">
        <h3 className="refinementhead toggle expanded">
          <span>Price range</span>
        </h3>
        <div className="refinementvalues toggle-content expanded">
          <div className="price-slider">
            <div className="slider-control-ctr" >
              <div className="slider-control" onClick={this.changeRange}>
                <div className="noUi-origin" style={{left: '0%'}}>
                  <div className="noUi-handle noUi-handle-lower" data-handle="0" style={{zIndex: 5}} onMouseDown={this.handleMouseDown} />
                </div>
                <div className="noUi-connect" style={{left: '0%', right: `${100 - percentage}%`}}></div>
                <div className="noUi-origin" style={{left: `${percentage}%`}}>
                  <div className="noUi-handle noUi-handle-upper" data-handle="1" style={{zIndex: 4}} onMouseDown={this.handleMouseDown} />
                </div>
              </div>
            </div>
            <div className="values">
              <div className="from">
                ${min}
              </div>
              <div className="to">
                ${Math.round(max * percentage / 100)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceRange;
