import React from 'react';

import PriceRange from './PriceRange';
import ColourFilter from './ColourFilter';
import BrandFilter from './BrandFilter';
import GenderFilter from './GenderFilter';

const Filters = () => (
  <div id="secondary" className="col-sm-12 col-md-12 col-lg-3 full-height only-on-lg secondary-content first-content-column">
    <div className="refinements">
      <PriceRange />
      <ColourFilter />
      <BrandFilter />
      <GenderFilter />

    </div>
    <div className="only-on-lg" />
  </div>
);

export default Filters;
