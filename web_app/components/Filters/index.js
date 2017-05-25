import React from 'react';
import {Container} from 'flux/utils';

import FiltersStore from '../../stores/FiltersStore';
import PriceRange from './PriceRange';
import ColourFilter from './ColourFilter';
import BrandFilter from './BrandFilter';
import GenderFilter from './GenderFilter';

const colours = [
  {
    className: 'swatch-black',
    id: 'swatch-black',
    name: 'Black'
  },
  {
    className: 'swatch-blue',
    id: 'swatch-blue',
    name: 'Blue'
  },
  {
    className: 'swatch-brown',
    id: 'swatch-brown',
    name: 'Brown'
  },
  {
    className: 'swatch-gold',
    id: 'swatch-gold',
    name: 'Gold'
  },
  {
    className: 'swatch-green',
    id: 'swatch-green',
    name: 'Green'
  },
  {
    className: 'swatch-grey',
    id: 'swatch-grey',
    name: 'Grey'
  },
  {
    className: 'swatch-multi',
    id: 'swatch-multi',
    name: 'Multi'
  },
  {
    className: 'swatch-navy',
    id: 'swatch-navy',
    name: 'Navy'
  },
  {
    className: 'swatch-orange',
    id: 'swatch-orange',
    name: 'Orange'
  },
  {
    className: 'swatch-pink',
    id: 'swatch-pink',
    name: 'Pink'
  },
  {
    className: 'swatch-purple',
    id: 'swatch-purple',
    name: 'Purple'
  },
  {
    className: 'swatch-red',
    id: 'swatch-red',
    name: 'Red'
  },
  {
    className: 'swatch-silver',
    id: 'swatch-silver',
    name: 'Silver'
  },
  {
    className: 'swatch-white',
    id: 'swatch-white',
    name: 'White'
  },
  {
    className: 'swatch-yellow',
    id: 'swatch-yellow',
    img: 'http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Yellow',
    name: 'Yellow'
  },
  {
    className: 'swatch-cream',
    id: 'swatch-cream',
    img: 'http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Cream',
    name: 'Cream'
  }
];
const genders = [
  {
    name: 'Male',
    count: 1221
  },
  {
    name: 'Female',
    count: 461
  },
  {
    name: 'Junior',
    count: 92
  },
  {
    name: 'Unisex',
    count: 758
  },
  {
    name: 'Not Applicable',
    count: 3
  }
];
const brands = [
  {
    name: 'CallawayGolf',
    count: 213
  },

  {
    name: 'adidasGolf',
    count: 187
  },

  {
    name: 'Ping',
    count: 187
  },

  {
    name: 'NikeGolf',
    count: 119
  },

  {
    name: 'TaylorMade',
    count: 116
  },

  {
    name: 'UnderArmour',
    count: 107
  },

  {
    name: 'FootJoy',
    count: 104
  },

  {
    name: 'CobraGolf',
    count: 90
  },

  {
    name: 'PUMAGolf',
    count: 81
  },

  {
    name: 'MastersGolf',
    count: 78
  }
];

const Filters = ({filters}) => (
  <div id="secondary" className="col-sm-12 col-md-12 col-lg-3 full-height only-on-lg secondary-content first-content-column">
    <div className="refinements">
      <PriceRange />
      <ColourFilter selected={filters.colour || []} colours={colours} />
      <BrandFilter selected={filters.brand || []} brands={brands} />
      <GenderFilter selected={filters.gender || []} genders={genders} />
    </div>
    <div className="only-on-lg" />
  </div>
);

function getStores() {
  return [
    FiltersStore
  ];
}

function getState() {
  return {
    filters: FiltersStore.getState()
  };
}

export default Container.createFunctional(Filters, getStores, getState);
