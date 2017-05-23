import React from 'react';

export default class ProductColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        color: props.data
    };
  }

  render() {
      var color = this.state.color;

      return <li>
        <a className="swatch productlink" href="http://www.americangolf.co.uk/clothing-shoes/windshirts/nike-golf-dri-fit-windshirt-307757.html?dwvar_307757_variantimage=black%2Fwhite" title={ color.title }>
          <span className="swatch-inner"
            style={{backgroundImage: color.background }}
            data-mediumimage="http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwce25f86b/zoom/307757_black1.jpg?sw=255">
          </span>
        </a>
      </li>
  }
}