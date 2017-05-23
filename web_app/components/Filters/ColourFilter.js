import React, { Component } from 'react';

const Colour = ({id, name, className, handleClick, selected}) => (
  <li className={`swatch ${selected ? 'selected' : ''} ${className}`} onClick={handleClick} >
    <a
      id={id}
      title={name}
      className='listingchange swatchanchor'
    >
      <span className='swatchanchor-inner'>${name}</span>
    </a>
  </li>
);

class ColourFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colours: [
        {
          className: 'swatch-black',
          id: 'swatch-black',
          name: 'Black',
          selected: false
        },
        {
          className: 'swatch-blue',
          id: 'swatch-blue',
          name: 'Blue',
          selected: false
        },
        {
          className: 'swatch-brown',
          id: 'swatch-brown',
          name: 'Brown',
          selected: false
        },
        {
          className: 'swatch-gold',
          id: 'swatch-gold',
          name: 'Gold',
          selected: false
        },
        {
          className: 'swatch-green',
          id: 'swatch-green',
          name: 'Green',
          selected: false
        },
        {
          className: 'swatch-grey',
          id: 'swatch-grey',
          name: 'Grey',
          selected: false
        },
        {
          className: 'swatch-multi',
          id: 'swatch-multi',
          name: 'Multi',
          selected: false
        },
        {
          className: 'swatch-navy',
          id: 'swatch-navy',
          name: 'Navy',
          selected: false
        },
        {
          className: 'swatch-orange',
          id: 'swatch-orange',
          name: 'Orange',
          selected: false
        },
        {
          className: 'swatch-pink',
          id: 'swatch-pink',
          name: 'Pink',
          selected: false
        },
        {
          className: 'swatch-purple',
          id: 'swatch-purple',
          name: 'Purple',
          selected: false
        },
        {
          className: 'swatch-red',
          id: 'swatch-red',
          name: 'Red',
          selected: false
        },
        {
          className: 'swatch-silver',
          id: 'swatch-silver',
          name: 'Silver',
          selected: false
        },
        {
          className: 'swatch-white',
          id: 'swatch-white',
          name: 'White',
          selected: false
        },
        {
          className: 'swatch-yellow',
          id: 'swatch-yellow',
          img: 'http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Yellow',
          name: 'Yellow',
          selected: false
        },
        {
          className: 'swatch-cream',
          id: 'swatch-cream',
          img: 'http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Cream',
          name: 'Cream',
          selected: false
        }
      ]
    };
  }

  handleClick(id) {
    const colours = this.state.colours.map(colour => (
      colour.id === id ? {...colour, selected: !colour.selected} : colour
    ));
    this.setState({colours});
  }

  render() {
    const colours = this.state.colours.map(color => <Colour {...color} handleClick={() => this.handleClick(color.id)} />);

    return  (
      <div className='refinement refinementColour'>
        <h3 className='toggle refinementhead expanded'>
          Colour
        </h3>
        <div className='toggle-content refinementvalues expanded' style={{display: 'block'}}>
          <ul className='swatches swatches-color Colour'>
            {colours}
          </ul>
        </div>
      </div>
    );
  }
}

export default ColourFilter;
