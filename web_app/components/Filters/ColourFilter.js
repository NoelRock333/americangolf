import React from 'react';

import FiltersActions from '../../actions/FiltersActions';

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

const ColourFilter = props => {
  const colours = props.colours.map(colour => (
    <Colour
      key={colour.id}
      {...colour}
      selected={props.selected.includes(colour.name)}
      handleClick={() => FiltersActions.toggleFilter({filter: 'colour', id: colour.name})}
    />
  ));

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
};

export default ColourFilter;
