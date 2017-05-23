import React from 'react';
import ProductItem from '../Product/item';
import ProductsStore from '../../stores/ProductsStore';

export default class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    ProductsStore.fetch().then(products => {
      this.setState({
        products: products.map(product => {
          return <ProductItem data={product} key={product._id}/>
        })
      });
    });
  }

  render() {
    return (
      <div id="primary" className="col-sm-12 col-md-12 col-lg-9 full-height primary-content">
          <div id="compare-controls">
              <div data-compare="{&quot;add&quot;:&quot;/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Compare-AddProduct&quot;,&quot;remove&quot;:&quot;http://www.americangolf.co.uk/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Compare-RemoveProduct&quot;,&quot;removeAll&quot;:&quot;http://www.americangolf.co.uk/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Compare-RemoveAllProducts&quot;,&quot;category&quot;:&quot;navigation&quot;,&quot;productUUIDs&quot;:[],&quot;limitReachedMsg&quot;:&quot;Sorry, you can only compare a maximum of 4 items&quot;}" id="compare-items" className="compareitems" style={{display: 'none'}}>
              <div className="comparebar content-inner clearfix">
                  <div className="compare-label">
                  <div className="compare-label-inner">
                      <i className="icon icon-compare">
                      {/* icon */}</i> <span>Compare
                      (0)</span>
                  </div>
                  </div>
                  <div id="compare-widget" className="compare-widget">
                  <div id="compare-items-panel" className="compare-items-panel">
                      <div className=" col-sm-12 col-md-3 full-height compare-item compare-item-0">
                      <div className="empty-item">
                          <div className="content">
                          <span className="count">1</span>
                          <span className="select-another">Select</span>
                          another product for comparison
                          </div>
                      </div>
                      </div>
                      <div className=" col-sm-12 col-md-3 full-height compare-item compare-item-1">
                      <div className="empty-item">
                          <div className="content">
                          <span className="count">2</span>
                          <span className="select-another">Select</span>
                          another product for comparison
                          </div>
                      </div>
                      </div>
                      <div className=" col-sm-12 col-md-3 full-height compare-item compare-item-2">
                      <div className="empty-item">
                          <div className="content">
                          <span className="count">3</span>
                          <span className="select-another">Select</span>
                          another product for comparison
                          </div>
                      </div>
                      </div>
                      <div className=" col-sm-12 col-md-3 full-height compare-item compare-item-3">
                      <div className="empty-item">
                          <div className="content">
                          <span className="count">4</span>
                          <span className="select-another">Select</span>
                          another product for comparison
                          </div>
                      </div>
                      </div>
                  </div>
                  <div className="compare-buttons">
                      <div className="compare-buttons-inner clearfix">
                      <button className="button button-text delete-item clear-compared-items" id="clear-compared-items">Close</button>
                      <form action="http://www.americangolf.co.uk/compare" className="compare-form">
                          <input type="hidden" name="category" defaultValue="navigation" />
                          <div className="col-sm-12 compare-button-row">
                          <button id="compare-items-button" className="disabled" disabled="disabled"><span>Compare
                              <span className="og-small">now</span></span></button>
                          </div>
                      </form>
                      </div>
                  </div>
                  </div>
              </div>
              </div>
          </div>
          <div className="search-result-content">
              <ul id="search-result-items" className="search-result-items tiles-container grid-row" data-infinitescroll="{&quot;pageCount&quot;:208,&quot;pageSize&quot;:12,&quot;loadedPage&quot;:0,&quot;pagingURL&quot;:&quot;http://www.americangolf.co.uk/golf-products?sz=12&start=0&format=infinite&quot;,&quot;browsingURL&quot;:&quot;http://www.americangolf.co.uk/golf-products?sz=12&start=0&quot;,&quot;preloadImg&quot;:&quot;http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/Sites-AmericanGolf-GB-Site/-/default/dw447a2483/images/spacer.png?sw=255&sh=170&sfrm=png&quot;,&quot;productCount&quot;:2508}">
              {/* Products */}
              { this.state.products }
              </ul>
              <div className="inline-loading-indicator loading-indicator" style={{display: 'none'}}>
              <div className="loader only-on-ag">
                  <div className="loader-rect1">
                  {/* empty */}
                  </div>
                  <div className="loader-rect2">
                  {/* empty */}
                  </div>
                  <div className="loader-rect3">
                  {/* empty */}
                  </div>
                  <div className="loader-rect4">
                  {/* empty */}
                  </div>
                  <div className="loader-rect5">
                  {/* empty */}
                  </div>
              </div>
              <div className="loader-container only-on-og">
                  <div className="progress">
                  <div className="progress-item" />
                  </div>
              </div>
              </div>
              <div className="ajaxloader">
              {/* empty */}
              </div>
          </div>
          <div className="search-promo" /><span style={{display: 'none'}}><img className="redeyepixel" width={1} height={1} alt="AG RedEye Pixel" src="https://reporting.americangolf.co.uk/cgi-bin/rr/blank.gif?nourl=sub-sub-category-view&view_cat_event=view_cat_event&view_cat_name=Golf%20Products&view_cat_code1=307757&view_cat_prod_domain1=AmericanGolf-GB&view_cat_code2=C005&view_cat_prod_domain2=AmericanGolf-GB&view_cat_code3=307574&view_cat_prod_domain3=AmericanGolf-GB&view_cat_code4=297340&view_cat_prod_domain4=AmericanGolf-GB&view_cat_code5=C002&view_cat_prod_domain5=AmericanGolf-GB&view_cat_code6=311213&view_cat_prod_domain6=AmericanGolf-GB&view_cat_code7=311313&view_cat_prod_domain7=AmericanGolf-GB&view_cat_code8=231716&view_cat_prod_domain8=AmericanGolf-GB&view_cat_url=www.americangolf.co.uk/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Search-Show&view_cat_domain=AmericanGolf-GB&view_cat_currency=GBP&domain=AmericanGolf-GB&currency=GBP" /></span>
      </div>
    );
  }
}

