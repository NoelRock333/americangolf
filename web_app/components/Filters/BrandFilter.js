import React, { Component } from 'react';

const Brand = ({name, count, selected, onClick}) => (
  <li onClick={onClick} className={selected ? 'selected' : ''}>
    <a title={`Refine by: ${name}`} className='listingchange'>
    <span className='refinement-name'>{name}</span>
      <span className='refinement-count'>({count})</span>
    </a>
  </li>
);




class BrandFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [
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
      ]
    };
  }

  handleClick(name) {
    const brands = this.state.brands.map(brands => (
      brands.name === name ? {...brands, selected: !brands.selected} : brands
    ));
    this.setState({brands});
  }

  render() {
    const brands = this.state.brands.map(brand => <Brand key={brand.name} {...brand} onClick={() => this.handleClick(brand.name)} />);
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
  }
}

export default BrandFilter;
