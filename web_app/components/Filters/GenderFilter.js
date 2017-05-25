import React from 'react';

import FiltersActions from '../../actions/FiltersActions';

const Gender = ({name, count, selected, onClick}) => (
  <li onClick={onClick} className={selected ? 'selected' : ''}>
    <a title={`Refine by: ${name}`} className='listingchange'>
    <span className='refinement-name'>{name}</span>
      <span className='refinement-count'>({count})</span>
    </a>
  </li>
);



const GenderFilter = props => {
  const genders = props.genders.map(gender =>
    <Gender
      key={gender.name}
      {...gender}
      selected={props.selected.includes(gender.name)}
      onClick={() => FiltersActions.toggleFilter({filter: 'gender', id: gender.name})}
    />
  );
  return (
    <div className='refinement gender'>
      <h3 className='toggle refinementhead'>
        Gender
      </h3>
      <div className='toggle-content refinementvalues' style={{display: 'block'}}>
        <ul>
          {genders}
        </ul>
      </div>
    </div>
  );
};

export default GenderFilter;
