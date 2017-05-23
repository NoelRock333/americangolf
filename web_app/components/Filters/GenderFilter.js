import React, { Component } from 'react';

const Gender = ({name, count, selected, onClick}) => (
  <li onClick={onClick} className={selected ? 'selected' : ''}>
    <a title={`Refine by: ${name}`} className='listingchange'>
    <span className='refinement-name'>{name}</span>
      <span className='refinement-count'>({count})</span>
    </a>
  </li>
);



class GenderFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [
        {
          name: 'Male',
          count: 1221,
          selected: false
        },
        {
          name: 'Female',
          count: 461,
          selected: false
        },
        {
          name: 'Junior',
          count: 92,
          selected: false
        },
        {
          name: 'Unisex',
          count: 758,
          selected: false
        },
        {
          name: 'Not Applicable',
          count: 3,
          selected: false
        }
      ]
    };
  }

  handleClick(name) {
    const genders = this.state.genders.map(gender => (
      gender.name === name ? {...gender, selected: !gender.selected} : gender
    ));
    this.setState({genders});
  }

  render() {
    const genders = this.state.genders.map(gender => <Gender {...gender} onClick={() => this.handleClick(gender.name)} />);
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
  }
}

export default GenderFilter;
