import React from 'react';

import FiltersActions from '../../actions/FiltersActions';

const Brand = ({name, count, selected, onClick}) => (
  <li onClick={onClick} className={selected ? 'selected' : ''}>
    <a title={`Refine by: ${name}`} className='listingchange'>
    <span className='refinement-name'>{name}</span>
      <span className='refinement-count'>({count})</span>
    </a>
  </li>
);




const BrandFilter = (props) => {
  const brands = props.brands.map(brand =>
  <Brand
    key={brand.name}
    {...brand}
    selected={props.selected.includes(brand.name)}
    onClick={() => FiltersActions.toggleFilter({filter: 'brand', id: brand.name})}
  />);
  return (
    <div className="refinement brand">
      <h3 className="toggle refinementhead expanded">
        Brand
      </h3>
      <div className="toggle-content refinementvalues expanded" style={{display: 'block'}}>
        <ul>
          {brands}
        </ul>
      </div>
      <div className="showall">
        <a href="#" className="button"><i className="icon icon-plus">{/* icon */}</i> Show
          all</a>
      </div>
      <div className="morerefinements">
        <ul>
          {brands}
        </ul>
      </div>
    </div>
  );
};

export default BrandFilter;
