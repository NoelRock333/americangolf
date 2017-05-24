import React from 'react';

export default class TopCategories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-section">
        <h2 className="heading-1">Top Categories</h2>
        <div className="grid-row">
          <div className="col-sm-6 col-md-4 col-lg-2">
            <a className="cat-teaser" href="http://www.americangolf.co.uk/golf-clubs/sets-of-irons">
              <span className="cat-teaser-image">
                <img src="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw3dae9293/2017/ag/content/homepage/row-2/ab-test-may/clubs-irons.jpg" alt="Link to Sets of Irons Subcategory" />
              </span>
              <span className="cat-teaser-name">
                <span>Sets of Irons</span>
                <i className="icon icon-arrow_right">{/* icon */}</i>
              </span>
            </a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
            <a className="cat-teaser" href="http://www.americangolf.co.uk/golf-clubs/drivers">
              <span className="cat-teaser-image">
                <img src="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw241bcdb4/2017/ag/content/homepage/row-2/ab-test-may/clubs-drivers.jpg" alt="Link to Drivers Subcategory" />
              </span>
              <span className="cat-teaser-name">
                <span>Drivers</span>
                <i className="icon icon-arrow_right">{/* icon */}</i>
              </span>
            </a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
            <a className="cat-teaser" href="http://www.americangolf.co.uk/gps-bags-equipment/all-golf-bags">
              <span className="cat-teaser-image">
                <img src="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw158d28f0/2017/ag/content/homepage/row-2/ab-test-may/equipment-allbags.jpg" alt="Link to All Bags Subcategory" />
              </span>
              <span className="cat-teaser-name">
                <span>Bags</span>
                <i className="icon icon-arrow_right">{/* icon */}</i>
              </span>
            </a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
            <a className="cat-teaser" href="http://www.americangolf.co.uk/balls-accessories/golf-balls">
              <span className="cat-teaser-image">
                <img src="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw6dc09cd3/2017/ag/content/homepage/row-2/ab-test-may/accs-balls.jpg" alt="Link to Balls Subcategory" />
              </span>
              <span className="cat-teaser-name">
                <span>Balls</span>
                <i className="icon icon-arrow_right">{/* icon */}</i>
              </span>
            </a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
            <a className="cat-teaser" href="http://www.americangolf.co.uk/clothing-shoes/shirts">
              <span className="cat-teaser-image">
                <img src="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw87ff0651/2017/ag/content/homepage/row-2/ab-test-may/clothing-shirts.jpg" alt="Link to Polos Subcategory" />
              </span>
              <span className="cat-teaser-name">
                <span>Shirts</span>
                <i className="icon icon-arrow_right">{/* icon */}</i>
              </span>
            </a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
            <a className="cat-teaser" href="http://www.americangolf.co.uk/clothing-shoes/shoes">
              <span className="cat-teaser-image">
                <img src="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwa37b1c44/2017/ag/content/homepage/row-2/ab-test-may/clothing-shoes.jpg" alt="Link to Shoes Subcategory" />
              </span>
              <span className="cat-teaser-name">
                <span>Shoes</span>
                <i className="icon icon-arrow_right">{/* icon */}</i>
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}