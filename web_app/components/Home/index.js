import React from 'react';

import Header from '../shared/Header';
import Filters from '../Filters'

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <a href="#wrapper" className=
        "back-to-top smooth-scrolling"><i className=
        "icon icon-arrow_up"></i><span className=
        "back-to-top-text">Back to top</span></a>
        <Header />
        <main id="main-wrapper" className="main-wrapper">
          <div className="cat-page-slot cat-page-slot-herobanner">
          </div>
          <div id="main" role="main" className="main" data-searchurl="/search-results">
            <div className="search-top grid-row">
              <div className=
              "col-sm-12 col-md-12 col-lg-3 full-height only-on-lg">
                <ul className="breadcrumb">
                  <li className="breadcrumb-element">
                    <a href="/home" className=
                    "breadcrumb-element-inner" title=
                    "Home">Home</a>
                  </li>
                  <li style={{ listStyle: 'none', display: 'inline' }}>
                  </li>
                </ul>
              </div>
              <div className=
              "col-sm-12 col-md-12 col-lg-9 full-height">
                <div className="search-result-top">
                  <h1 className="search-result-title heading-1">
                    Golf Products <span className=
                    "only-on-og search-result-count">(2508)</span>
                  </h1>
                  {/* include filter_and_sort */}
                </div>
              </div>
            </div>
            <div className="grid-row">
              <Filters />
              {/* include sidebar */}
              {/* include products */}
              <div className="content-slot slot-grid-footer"></div>
            </div>
            <span style={{ display:'none' }}>
              <img className="redeyepixel" width="1" height="1" alt="AG RedEye Pixel" src="https://reporting.americangolf.co.uk/cgi-bin/rr/blank.gif?nourl=sub-sub-category-view&amp;view_cat_event=view_cat_event&amp;view_cat_name=Golf%20Products&amp;view_cat_code1=307757&amp;view_cat_prod_domain1=AmericanGolf-GB&amp;view_cat_code2=C005&amp;view_cat_prod_domain2=AmericanGolf-GB&amp;view_cat_code3=307574&amp;view_cat_prod_domain3=AmericanGolf-GB&amp;view_cat_code4=297340&amp;view_cat_prod_domain4=AmericanGolf-GB&amp;view_cat_code5=C002&amp;view_cat_prod_domain5=AmericanGolf-GB&amp;view_cat_code6=311213&amp;view_cat_prod_domain6=AmericanGolf-GB&amp;view_cat_code7=311313&amp;view_cat_prod_domain7=AmericanGolf-GB&amp;view_cat_code8=231716&amp;view_cat_prod_domain8=AmericanGolf-GB&amp;view_cat_url=www.americangolf.co.uk/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Search-Show&amp;view_cat_domain=AmericanGolf-GB&amp;view_cat_currency=GBP&amp;domain=AmericanGolf-GB&amp;currency=GBP" />
            </span>
          </div>
        </main>
        {/* include footer */}
        <div id="modal" className="modal">
          <div className="modal-button close-modal">
            <span className="text">Close</span> <i className=
            "icon icon-cross"></i>
          </div>
          <div className="modal-special-content">
          </div>
        </div>
        <div className="modal-background-overlay">
        </div>
        <iframe src="https://americangolfclub.onserro.com/global/refreshsession" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        <div className="cookiewarning" style={{ display:'none' }}>
          <div className="cookiewarning-inner">
            <div className="cookiewarning-content grid-row">
              <div className=
              "cookiewarning-message col-md-9 col-lg-10">
                <div className="content-asset">
                  By continuing to browse the site you are agreeing
                  to our use of cookies or find out more <a href=
                  "http://www.americangolf.co.uk/cookie-policy/cookie-policy.html"
                  className="dialoglink">here</a>.
                </div>
              </div>
              <div className="cookiewarning-button col-md-3 col-lg-2">
                <a className="button">Accept</a>
              </div>
            </div>
          </div>
        </div>
        <div id="ajaxloader" className="ajaxloader loading-indicator full-screen" style={{ display: 'none' }}>
          <div className="loader only-on-ag">
            <div className="loader-rect1">
            </div>
            <div className="loader-rect2">
            </div>
            <div className="loader-rect3">
            </div>
            <div className="loader-rect4">
            </div>
            <div className="loader-rect5">
            </div>
          </div>
          <div className="loader-text">
            Loading
          </div>
          <div className="loader-container only-on-og">
            <div className="progress">
              <div className="progress-item"></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

