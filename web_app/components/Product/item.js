import React from 'react';
import ProductColor from './color';

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.data
    };
  }

  render() {
    var product = this.state.product;
    var colors = product.colors.map(color => {
      return <ProductColor data={ color } />
    });

    return (
      <li id="liprod-0" className="grid-tile col-sm-12 col-md-4 col-lg-4">
        <div className="product-tile" id="265b367113127799a1b9a8fa70" data-itemid={307757}>
          <div className="product-image">
            {/* dwMarker="product" dwContentID="265b367113127799a1b9a8fa70" */}
            <a className="thumb-link productlink" href="http://www.americangolf.co.uk/clothing-shoes/windshirts/nike-golf-dri-fit-windshirt-307757.html?dwvar_307757_variantimage=black%2Fwhite" title="Nike Golf Dri-Fit Windshirt">
              <img src={product.image} alt="Nike Golf Dri-Fit Windshirt" title="Nike Golf Dri-Fit Windshirt" width={255} />
            </a>
            <div className="product-promo">
              <div className="promotional-message">
                { product.productPromo }
              </div>
            </div>
            <div className="badge badge-pricebuster">
              <div className="badge-inner">
                Great
                <br />
                Value
              </div>
            </div>
          </div>
          <h3 className="product-name">
            <a className="name-link productlink" href="http://www.americangolf.co.uk/clothing-shoes/windshirts/nike-golf-dri-fit-windshirt-307757.html?dwvar_307757_variantimage=black%2Fwhite" title="Nike Golf Dri-Fit Windshirt">
              { product.name }
            </a>
          </h3>
          <div className="product-reviews">
            <div className="pr_stars">
              <i className="icon icon-star first">
                {/* icon */}</i> <i className="icon icon-star">{/* icon */}</i>
              <i className="icon icon-star">
                {/* icon */}</i> <i className="icon icon-star">{/* icon */}</i>
              <i className="icon icon-star last">
                {/* icon */}</i> <span className="stars-inner" style={{width: '88%'}}><span className="stars-inner-content"><i className="icon icon-star first">
                    {/* icon */}</i> <i className="icon icon-star">{/* icon */}</i>
                  <i className="icon icon-star">
                    {/* icon */}</i> <i className="icon icon-star">{/* icon */}</i>
                  <i className="icon icon-star last">
                    {/* icon */}</i></span></span>
            </div>
          </div>
          <div className="product-pricing">
            <div className="product-price product-price-standard">
              <div className="save-mrrp">
                <span className="mrrp">{ product.mrrp }</span>
                <span className="save">Save £10.01</span>
              </div>
              <div className="product-sales-price" title="Sale Price">
                <span>{ product.price }</span>
              </div>
            </div>
          </div>
          <div className="product-compare" data-compareitemid={307757}>
            <div className="form-row form-row-checkbox">
              <div className="field">
                <input type="checkbox" className="compare-check" id="cc-265b367113127799a1b9a8fa70" />
                <label className="label" htmlFor="cc-265b367113127799a1b9a8fa70">Compare</label>
              </div>
            </div>
          </div>
          <div className="product-colorswatches">
            <ul className="product-colorswatches-list">
              { colors }
            </ul>
          </div>
        </div>
      </li>
    );
  }
}
