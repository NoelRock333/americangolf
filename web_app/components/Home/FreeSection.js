import React from 'react';

export default class FreeSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-section">
        <div className="blue-stripe-banner banner-benefits">
          <div className="blue-stripe-banner-inner banner-benefits-inner">
            <div className="carousel-container white-nav hide-disabled-nav-arrows loaded">
              <div className="carousel-container-inner" style={{overflow: 'hidden'}}>
                <ul className="carousel" style={{transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0s', touchAction: 'pan-y', userSelect: 'none', WebkitUserDrag: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', width: 1140}}>
                  <li className="carousel-tile col-sm-12 col-md-6 col-lg-3 full-height" style={{width: 285}}>
                    <a href="http://www.americangolf.co.uk/free-shows/free-shows.html">
                      <div className="banner-benefits-tile">
                        <i className="icon icon-club">{/* icon */}</i>
                        <div className="banner-benefits-tile-text">
                          Free Golf <br /> Shows
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="carousel-tile col-sm-12 col-md-6 col-lg-3 full-height" style={{width: 285}}>
                    <a href="http://www.americangolf.co.uk/free-tournaments/free-tournaments.html">
                      <div className="banner-benefits-tile">
                        <i className="icon icon-trophy-2">{/* icon */}</i>
                        <div className="banner-benefits-tile-text">
                          Free Golf <br /> Tournaments
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="carousel-tile col-sm-12 col-md-6 col-lg-3 full-height" style={{width: 285}}>
                    <a href="http://www.americangolf.co.uk/information/ag_customservices_demodays.html">
                      <div className="banner-benefits-tile">
                        <i className="icon icon-fitting">{/* icon */}</i>
                        <div className="banner-benefits-tile-text">
                          Free Fitting Days <br /> And Events
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="carousel-tile col-sm-12 col-md-6 col-lg-3 full-height" style={{width: 285}}>
                    <a href="http://www.americangolf.co.uk/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Page-Club">
                      <div className="banner-benefits-tile">
                        <i className="icon icon-loader">{/* icon */}</i>
                        <div className="banner-benefits-tile-text">
                          Free Members <br /> Benefits
                        </div>
                      </div>
                    </a>
                  </li>
                </ul><ul className="nav-bubbles"><li className="nav-bubble active" /><li className="nav-bubble" /><li className="nav-bubble" /><li className="nav-bubble" /></ul>
              </div>
              <div className="nav-arrows"><a href="#" className="nav-prev disabled" /> <a href="#" className="nav-next disabled" /></div></div>
          </div>
        </div>
      </div>
    );
  }
}