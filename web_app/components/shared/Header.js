import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="mob-menu">
          <div className="mob-menu-navigation-ctr">
            <ul className="menu-category ul-level-1">
              <li className="li-level-1 has-subcat">
                <a href="http://www.americangolf.co.uk/golf-clubs" className="a-level-1">Golf Clubs</a> <a href="#" className="flyout-trigger"><i className="icon icon-arrow_right">
                    {/* icon */}</i></a>
                <div className="level-2 flyout">
                  <div className="level-2-inner flyout-inner">
                    <a href="#" className="back-to-topcat"><i className="icon icon-arrow_left">{/* icon */}</i>
                      <span>Golf Clubs</span></a>
                    <ul className="category-groups">
                      <li className="category-group">
                        <div className="only-on-og only-on-lg category-nav-image">
                        </div>
                        <div className="category-group-name">
                          Woods
                        </div>
                        <ul className="category-group-block ul-level-2">
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/golf-clubs/drivers" className="a-level-2"><span className="name">Drivers</span> <span className="count">(64)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/golf-clubs/fairway-woods" className="a-level-2"><span className="name">Fairway woods</span> <span className="count">(48)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/golf-clubs/hybrids" className="a-level-2"><span className="name">Hybrids</span> <span className="count">(40)</span></a>
                          </li>
                        </ul>
                      </li>
                      <li className="category-group">
                        <div className="only-on-og only-on-lg category-nav-image">
                        </div>
                        <div className="category-group-name">
                          Irons &amp; Sets
                        </div>
                        <ul className="category-group-block ul-level-2">
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/golf-clubs/sets-of-irons" className="a-level-2"><span className="name">Sets
                                of Irons</span> <span className="count">(73)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/golf-clubs/wedges" className="a-level-2"><span className="name">Wedges</span> <span className="count">(35)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/golf-clubs/package-sets" className="a-level-2"><span className="name">Package sets</span> <span className="count">(36)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/golf-clubs/single-irons" className="a-level-2"><span className="name">Single Irons</span> <span className="count">(13)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/golf-clubs/chippers" className="a-level-2"><span className="name">Chippers</span> <span className="count">(6)</span></a>
                          </li>
                        </ul>
                      </li>
                      <li className="category-group">
                        <div className="only-on-og only-on-lg category-nav-image">
                        </div>
                        <div className="category-group-name">
                          Putters
                        </div>
                        <ul className="category-group-block ul-level-2">
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/golf-clubs/putters" className="a-level-2"><span className="name">Putters</span> <span className="count">(149)</span></a>
                          </li>
                        </ul>
                      </li>
                      <li className="category-group">
                        <div className="only-on-og only-on-lg category-nav-image">
                        </div>
                        <div className="category-group-name">
                          Ladies/Junior
                        </div>
                        <ul className="category-group-block ul-level-2">
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/golf-clubs/all-ladies-golf-clubs" className="a-level-2"><span className="name">Ladies Golf Clubs</span>
                              <span className="count">(71)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/golf-clubs/all-junior-golf-clubs" className="a-level-2"><span className="name">Junior Golf Clubs</span>
                              <span className="count">(38)</span></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="mob-menu-usermenu-ctr">
                    <ul className="header-usermenu">
                      <li className="only-on-ag">
                        <a href="http://www.americangolf.co.uk/find-stores" title="Store locator">Store locator</a>
                      </li>
                      <li className="only-on-ag">
                        <a href="http://www.americangolf.co.uk/booking/" title="Free custom fitting">Free custom
                          fitting</a>
                      </li>
                      <li className="only-on-ag">
                        <a href="http://www.americangolf.co.uk/inspiration-advice" title="Pros advice">Pros advice</a>
                      </li>
                      <li className="only-on-og">
                        <a href="http://www.americangolf.co.uk/inspiration-advice" title="hheader.nav.btn.buyingadvice">Buying
                          advice</a>
                      </li>
                      <li>
                        <a href="http://www.americangolf.co.uk/customerservice-show" title="Help & Info">Help &amp; Info</a>
                      </li>
                      <li>
                        <a href="https://www.americangolf.co.uk/account-edit" title="Account">Login/Register</a>
                      </li>
                      <li>
                        <a href="/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/CountryGateway-OpenOverlay" title="Please select your shipping country & language" className="country-select-link">£ UK</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="li-level-1 has-subcat">
                <a href="http://www.americangolf.co.uk/clothing-shoes" className="a-level-1">Clothing &amp; Shoes</a> <a href="#" className="flyout-trigger"><i className="icon icon-arrow_right">
                    {/* icon */}</i></a>
                <div className="level-2 flyout">
                  <div className="level-2-inner flyout-inner">
                    <a href="#" className="back-to-topcat"><i className="icon icon-arrow_left">{/* icon */}</i>
                      <span>Clothing &amp; Shoes</span></a>
                    <ul className="category-groups">
                      <li className="category-group">
                        <div className="only-on-og only-on-lg category-nav-image">
                        </div>
                        <div className="category-group-name">
                          Layering
                        </div>
                        <ul className="category-group-block ul-level-2">
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/clothing-shoes/shirts" className="a-level-2"><span className="name">Shirts</span> <span className="count">(191)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/clothing-shoes/sweaters" className="a-level-2"><span className="name">Sweaters</span> <span className="count">(152)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/clothing-shoes/windshirts" className="a-level-2"><span className="name">Windshirts</span> <span className="count">(116)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/clothing-shoes/base-layers" className="a-level-2"><span className="name">Base
                                Layers</span> <span className="count">(18)</span></a>
                          </li>
                        </ul>
                      </li>
                      <li className="category-group">
                        <div className="only-on-og only-on-lg category-nav-image">
                        </div>
                        <div className="category-group-name">
                          Outerwear
                        </div>
                        <ul className="category-group-block ul-level-2">
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/clothing-shoes/trousers" className="a-level-2"><span className="name">Trousers</span> <span className="count">(112)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/clothing-shoes/shorts" className="a-level-2"><span className="name">Shorts</span> <span className="count">(78)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/clothing-shoes/waterproofs" className="a-level-2"><span className="name">Waterproofs</span> <span className="count">(115)</span></a>
                          </li>
                        </ul>
                      </li>
                      <li className="category-group">
                        <div className="only-on-og only-on-lg category-nav-image">
                        </div>
                        <div className="category-group-name">
                          Footwear
                        </div>
                        <ul className="category-group-block ul-level-2">
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/clothing-shoes/shoes" className="a-level-2"><span className="name">Shoes</span> <span className="count">(236)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/clothing-shoes/socks" className="a-level-2"><span className="name">Socks</span> <span className="count">(29)</span></a>
                          </li>
                        </ul>
                      </li>
                      <li className="category-group">
                        <div className="only-on-og only-on-lg category-nav-image">
                        </div>
                        <div className="category-group-name">
                          Accessories &amp; Ranges
                        </div>
                        <ul className="category-group-block ul-level-2">
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/clothing-shoes/caps-visors" className="a-level-2"><span className="name">Caps, Hats &amp; Visors</span>
                              <span className="count">(59)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/clothing-shoes/winter-hats-mitts" className="a-level-2"><span className="name">Winter Hats, Gloves &amp; Mitts</span>
                              <span className="count">(21)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/clothing-shoes/sunglasses" className="a-level-2"><span className="name">Sunglasses</span> <span className="count">(24)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/clothing-shoes/shoe-bags-accessories" className="a-level-2"><span className="name">Shoe
                                bags &amp; accessories</span> <span className="count">(31)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/clothing-shoes/belts-accessories" className="a-level-2"><span className="name">Belts &amp; Accessories</span>
                              <span className="count">(19)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/clothing-shoes/ladies" className="a-level-2"><span className="name">Ladies Clothing &amp; Shoes</span>
                              <span className="count">(363)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/clothing-shoes/junior-clothing" className="a-level-2"><span className="name">Junior Clothing &amp; Shoes</span>
                              <span className="count">(20)</span></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="mob-menu-usermenu-ctr">
                    <ul className="header-usermenu">
                      <li className="only-on-ag">
                        <a href="http://www.americangolf.co.uk/find-stores" title="Store locator">Store locator</a>
                      </li>
                      <li className="only-on-ag">
                        <a href="http://www.americangolf.co.uk/booking/" title="Free custom fitting">Free custom
                          fitting</a>
                      </li>
                      <li className="only-on-ag">
                        <a href="http://www.americangolf.co.uk/inspiration-advice" title="Pros advice">Pros advice</a>
                      </li>
                      <li className="only-on-og">
                        <a href="http://www.americangolf.co.uk/inspiration-advice" title="hheader.nav.btn.buyingadvice">Buying
                          advice</a>
                      </li>
                      <li>
                        <a href="http://www.americangolf.co.uk/customerservice-show" title="Help & Info">Help &amp; Info</a>
                      </li>
                      <li>
                        <a href="https://www.americangolf.co.uk/account-edit" title="Account">Login/Register</a>
                      </li>
                      <li>
                        <a href="/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/CountryGateway-OpenOverlay" title="Please select your shipping country & language" className="country-select-link">£ UK</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="li-level-1 has-subcat">
                <a href="http://www.americangolf.co.uk/balls-accessories" className="a-level-1">Balls &amp; Accessories</a> <a href="#" className="flyout-trigger"><i className="icon icon-arrow_right">{/* icon */}</i></a>
                <div className="level-2 flyout">
                  <div className="level-2-inner flyout-inner">
                    <a href="#" className="back-to-topcat"><i className="icon icon-arrow_left">{/* icon */}</i>
                      <span>Balls &amp; Accessories</span></a>
                    <ul className="category-groups">
                      <li className="category-group">
                        <div className="only-on-og only-on-lg category-nav-image">
                        </div>
                        <div className="category-group-name">
                          Golf Balls &amp; Gloves
                        </div>
                        <ul className="category-group-block ul-level-2">
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/golf-balls" className="a-level-2"><span className="name">Golf
                                balls</span> <span className="count">(63)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/practice-bags-balls" className="a-level-2"><span className="name">Practice bags &amp; balls</span>
                              <span className="count">(18)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/golf-gloves" className="a-level-2"><span className="name">Golf
                                gloves</span> <span className="count">(72)</span></a>
                          </li>
                        </ul>
                      </li>
                      <li className="category-group">
                        <div className="only-on-og only-on-lg category-nav-image">
                        </div>
                        <div className="category-group-name">
                          Tees &amp; Accessories
                        </div>
                        <ul className="category-group-block ul-level-2">
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/tees" className="a-level-2"><span className="name">Tees</span> <span className="count">(20)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/umbrellas" className="a-level-2"><span className="name">Umbrellas</span> <span className="count">(30)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/ball-retrievers" className="a-level-2"><span className="name">Ball
                                retrievers</span> <span className="count">(18)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/ball-markers" className="a-level-2"><span className="name">Ball
                                markers</span> <span className="count">(13)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/health" className="a-level-2"><span className="name">Health</span> <span className="count">(11)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/score-trackers" className="a-level-2"><span className="name">Score trackers</span> <span className="count">(9)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/gifts" className="a-level-2"><span className="name">Gifts</span> <span className="count">(62)</span></a>
                          </li>
                        </ul>
                      </li>
                      <li className="category-group">
                        <div className="only-on-og only-on-lg category-nav-image">
                        </div>
                        <div className="category-group-name">
                          Training
                        </div>
                        <ul className="category-group-block ul-level-2">
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/mats-nets" className="a-level-2"><span className="name">Mats
                                &amp; nets</span> <span className="count">(12)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/training-aids" className="a-level-2"><span className="name">Training aids</span> <span className="count">(42)</span></a>
                          </li>
                        </ul>
                      </li>
                      <li className="category-group">
                        <div className="only-on-og only-on-lg category-nav-image">
                        </div>
                        <div className="category-group-name">
                          Maintenance
                        </div>
                        <ul className="category-group-block ul-level-2">
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/towels" className="a-level-2"><span className="name">Towels</span> <span className="count">(22)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/grips" className="a-level-2"><span className="name">Grips</span> <span className="count">(35)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/head-covers" className="a-level-2"><span className="name">Head
                                covers</span> <span className="count">(44)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/cleaning-products" className="a-level-2"><span className="name">Cleaning products</span>
                              <span className="count">(8)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/balls-accessories/pitchmark-repairers" className="a-level-2"><span className="name">Pitchmark repairers</span>
                              <span className="count">(17)</span></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="mob-menu-usermenu-ctr">
                    <ul className="header-usermenu">
                      <li className="only-on-ag">
                        <a href="http://www.americangolf.co.uk/find-stores" title="Store locator">Store locator</a>
                      </li>
                      <li className="only-on-ag">
                        <a href="http://www.americangolf.co.uk/booking/" title="Free custom fitting">Free custom
                          fitting</a>
                      </li>
                      <li className="only-on-ag">
                        <a href="http://www.americangolf.co.uk/inspiration-advice" title="Pros advice">Pros advice</a>
                      </li>
                      <li className="only-on-og">
                        <a href="http://www.americangolf.co.uk/inspiration-advice" title="hheader.nav.btn.buyingadvice">Buying
                          advice</a>
                      </li>
                      <li>
                        <a href="http://www.americangolf.co.uk/customerservice-show" title="Help & Info">Help &amp; Info</a>
                      </li>
                      <li>
                        <a href="https://www.americangolf.co.uk/account-edit" title="Account">Login/Register</a>
                      </li>
                      <li>
                        <a href="/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/CountryGateway-OpenOverlay" title="Please select your shipping country & language" className="country-select-link">£ UK</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="li-level-1 has-subcat">
                <a href="http://www.americangolf.co.uk/gps-bags-equipment" className="a-level-1">GPS, Bags &amp; Equipment</a> <a href="#" className="flyout-trigger"><i className="icon icon-arrow_right">{/* icon */}</i></a>
                <div className="level-2 flyout">
                  <div className="level-2-inner flyout-inner">
                    <a href="#" className="back-to-topcat"><i className="icon icon-arrow_left">{/* icon */}</i>
                      <span>GPS, Bags &amp; Equipment</span></a>
                    <ul className="category-groups">
                      <li className="category-group">
                        <div className="only-on-og only-on-lg category-nav-image">
                        </div>
                        <div className="category-group-name">
                          Golf GPS
                        </div>
                        <ul className="category-group-block ul-level-2">
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/all-golf-gps" className="a-level-2"><span className="name">All
                                Golf GPS</span> <span className="count">(50)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/gps-watches" className="a-level-2"><span className="name">GPS
                                watches</span> <span className="count">(26)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/gps" className="a-level-2"><span className="name">GPS</span> <span className="count">(19)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/optical-rangefinder" className="a-level-2"><span className="name">Rangefinders</span> <span className="count">(11)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/gps-accessories" className="a-level-2"><span className="name">GPS
                                Accessories</span> <span className="count">(12)</span></a>
                          </li>
                        </ul>
                      </li>
                      <li className="category-group">
                        <div className="only-on-og only-on-lg category-nav-image">
                        </div>
                        <div className="category-group-name">
                          Golf Bags
                        </div>
                        <ul className="category-group-block ul-level-2">
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/all-golf-bags" className="a-level-2"><span className="name">All
                                Golf Bags</span> <span className="count">(230)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/carry-bags" className="a-level-2"><span className="name">Carry/Stand Bags</span>
                              <span className="count">(93)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/trolley-cart-bags" className="a-level-2"><span className="name">Trolley/Cart bags</span>
                              <span className="count">(103)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/pencil-bags" className="a-level-2"><span className="name">Pencil bags</span> <span className="count">(4)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/travel-bags" className="a-level-2"><span className="name">Travel bags</span> <span className="count">(23)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/golf-luggage" className="a-level-2"><span className="name">Golf
                                luggage</span> <span className="count">(15)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/bag-accessories" className="a-level-2"><span className="name">Bag
                                accessories</span> <span className="count">(13)</span></a>
                          </li>
                        </ul>
                      </li>
                      <li className="category-group">
                        <div className="only-on-og only-on-lg category-nav-image">
                        </div>
                        <div className="category-group-name">
                          Golf Trolleys
                        </div>
                        <ul className="category-group-block ul-level-2">
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/all-golf-trolleys" className="a-level-2"><span className="name">All
                                Golf Trolleys</span> <span className="count">(76)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/electric-trolleys" className="a-level-2"><span className="name">Electric trolleys</span>
                              <span className="count">(34)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/push-pull-trolleys" className="a-level-2"><span className="name">Push/pull trolleys</span>
                              <span className="count">(42)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/batteries-and-chargers" className="a-level-2"><span className="name">Batteries and chargers</span>
                              <span className="count">(13)</span></a>
                          </li>
                          <li className="li-level-2">
                            <a href="http://www.americangolf.co.uk/gps-bags-equipment/trolley-accessories" className="a-level-2"><span className="name">Trolley accessories</span>
                              <span className="count">(68)</span></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="mob-menu-usermenu-ctr">
                    <ul className="header-usermenu">
                      <li className="only-on-ag">
                        <a href="http://www.americangolf.co.uk/find-stores" title="Store locator">Store locator</a>
                      </li>
                      <li className="only-on-ag">
                        <a href="http://www.americangolf.co.uk/booking/" title="Free custom fitting">Free custom
                          fitting</a>
                      </li>
                      <li className="only-on-ag">
                        <a href="http://www.americangolf.co.uk/inspiration-advice" title="Pros advice">Pros advice</a>
                      </li>
                      <li className="only-on-og">
                        <a href="http://www.americangolf.co.uk/inspiration-advice" title="hheader.nav.btn.buyingadvice">Buying
                          advice</a>
                      </li>
                      <li>
                        <a href="http://www.americangolf.co.uk/customerservice-show" title="Help & Info">Help &amp; Info</a>
                      </li>
                      <li>
                        <a href="https://www.americangolf.co.uk/account-edit" title="Account">Login/Register</a>
                      </li>
                      <li>
                        <a href="/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/CountryGateway-OpenOverlay" title="Please select your shipping country & language" className="country-select-link">£ UK</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="li-level-1">
                <a href="http://www.americangolf.co.uk/greatvalue" className="a-level-1">Great Value</a>
              </li>
              <li className="li-level-1">
                <a href="http://www.americangolf.co.uk/golf-brands" className="a-level-1">Brands</a>
              </li>
              <li className="li-level-1 highlighted agclub">
                <a href="http://www.americangolf.co.uk/club-page" className="level-1 club-link a-level-1">AG Club</a>
                <div className="level-2 flyout flyout-clubhouse">
                  <div className="level-2-inner flyout-inner">
                    <div className="level-2-content flyout-content grid-row">
                      <div className="html-slot-container">
                        <style dangerouslySetInnerHTML={{__html: "\n                    .top-clubs .top-brand {\n                    display: block!important;\n                    }\n                    .top-clubs .top-brand a:not(.button) {\n                    height: 0;\n                    padding-bottom: 64.6387833%;\n                    background-image: url('http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwd5fae73a/2017/ag/content/header/navigation/flyouts/club/club-sprite.jpg');\n                    display:block;\n                    background-size: 400% auto;\n                    }\n                    }\n                    .top-clubs .top-brand-1 a { background-position: 0 0; }\n                    .top-clubs .top-brand-2 a { background-position: 33.3333333% 0; }\n                    .top-clubs .top-brand-3 a { background-position: 66.6666666% 0; }\n                    .top-clubs .top-brand-4 a { background-position: 99.9999999% 0; }\n                    .competition-flyout-tile {\n                    background-color: #121c26;\n                    padding: 15px;\n                    }\n                    .competition-flyout-tile .tile-heading {\n                    color: #fff;\n                    margin-bottom: 0;\n                    }\n                    " }} />
                        <div className="top-clubs">
                          <div className="grid-row">
                            <div className="col-sm-3 full-height top-brand top-brand-1">
                              <div className="banner clubhouse-flyout-item">
                                <a href="http://www.americangolf.co.uk/free-shows/free-shows.html">
                                  <div className="clubhouse-flyout-item-overlay">
                                  </div>
                                  <div className="content">
                                    <div className="tile-heading heading-2">
                                      Free shows
                                    </div>
                                  </div></a>
                              </div>
                            </div>
                            <div className="col-sm-3 full-height top-brand top-brand-2">
                              <div className="banner clubhouse-flyout-item">
                                <a href="http://www.americangolf.co.uk/free-tournaments/free-tournaments.html">
                                  <div className="clubhouse-flyout-item-overlay">
                                  </div>
                                  <div className="content">
                                    <div className="tile-heading heading-2">
                                      Free tournaments
                                    </div>
                                  </div></a>
                              </div>
                            </div>
                            <div className="col-sm-3 full-height top-brand top-brand-3">
                              <div className="banner clubhouse-flyout-item">
                                <a href="https://community.americangolf.co.uk/" target="_blank">
                                  <div className="clubhouse-flyout-item-overlay">
                                  </div>
                                  <div className="content">
                                    <div className="tile-heading heading-2">
                                      Community
                                    </div>
                                  </div></a>
                              </div>
                            </div>
                            <div className="col-sm-3 full-height top-brand top-brand-4">
                              <div className="banner clubhouse-flyout-item">
                                <a href="http://www.americangolf.co.uk/club-page">
                                  <div className="clubhouse-flyout-item-overlay">
                                  </div>
                                  <div className="content">
                                    <div className="tile-heading heading-2">
                                      AG Club
                                    </div>
                                  </div></a>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="competition-flyout-tile banner">
                                <a className="fullsize-bannerlink" href="http://www.americangolf.co.uk/golf-competitions/CompetitionHub.html">
                                </a>
                                <div className="grid-row">
                                  <div className="col-sm-9 full-height">
                                    <div className="tile-heading heading-2">
                                      <i className="icon icon-trophy-2">
                                        {/* icon */}</i>
                                      <span>Competitions</span>
                                    </div>
                                  </div>
                                  <div className="col-sm-3 full-height">
                                    <a className="button" href="http://www.americangolf.co.uk/golf-competitions/CompetitionHub.html">
                                      View all</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-level-1 wishlist only-on-sm">
                <a href="https://www.americangolf.co.uk/wishlist" className="level-1 wishlist-link a-level-1"><i className="icon icon-heart">{/* icon */}</i> Wish list</a>
              </li>
            </ul>
          </div>
          <div className="mob-menu-usermenu-ctr">
            <ul className="header-usermenu">
              <li className="only-on-ag">
                <a href="http://www.americangolf.co.uk/find-stores" title="Store locator">Store locator</a>
              </li>
              <li className="only-on-ag">
                <a href="http://www.americangolf.co.uk/booking/" title="Free custom fitting">Free custom fitting</a>
              </li>
              <li className="only-on-ag">
                <a href="http://www.americangolf.co.uk/inspiration-advice" title="Pros advice">Pros advice</a>
              </li>
              <li className="only-on-og">
                <a href="http://www.americangolf.co.uk/inspiration-advice" title="hheader.nav.btn.buyingadvice">Buying
                  advice</a>
              </li>
              <li>
                <a href="http://www.americangolf.co.uk/customerservice-show" title="Help & Info">Help &amp; Info</a>
              </li>
              <li>
                <a href="https://www.americangolf.co.uk/account-edit" title="Account">Login/Register</a>
              </li>
              <li>
                <a href="/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/CountryGateway-OpenOverlay" title="Please select your shipping country & language" className="country-select-link">£ UK</a>
              </li>
            </ul>
          </div>
        </div>
        <header id="header-wrapper" className="header-wrapper">
          <div id="header-top-wrapper" className="header-top-wrapper">
            <div className="header-top">
              <div className="header-top-left hide-on-lg">
                <div className="header-mobile-menu-trigger-ctr">
                  <a className="header-mobile-menu-trigger" href="#"><span className="hamburger-line">
                      {/* Hamburger Line*/}</span></a>
                </div>
              </div>
              <div className="header-top-middle">
                <div className="header-store-logo-ctr">
                  <a className="header-store-logo" href="http://www.americangolf.co.uk">
                    <div className="html-slot-container">
                      {/*Temporary*/}
                      <link href="http://www.americangolf.co.uk/on/demandware.static/-/Sites/en_GB/v1495347914494/pj_resp/temp/agonly.min.css" rel="stylesheet" type="text/css" />
                      <div>
                        <img alt src="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwd4812014/americangolf/header/logo_default.png" title />
                      </div>
                    </div><span className="storename">American Golf</span></a>
                </div>
              </div>
              <div className="header-top-right">
                <div className="line-top only-on-lg">
                  <div className="header-usermenu-ctr">
                    <ul className="header-usermenu">
                      <li className="only-on-ag">
                        <a href="http://www.americangolf.co.uk/find-stores" title="Store locator">Store locator</a>
                      </li>
                      <li className="only-on-ag">
                        <a href="http://www.americangolf.co.uk/booking/" title="Free custom fitting">Free custom
                          fitting</a>
                      </li>
                      <li className="only-on-ag">
                        <a href="http://www.americangolf.co.uk/inspiration-advice" title="Pros advice">Pros advice</a>
                      </li>
                      <li className="only-on-og">
                        <a href="http://www.americangolf.co.uk/inspiration-advice" title="hheader.nav.btn.buyingadvice">Buying
                          advice</a>
                      </li>
                      <li>
                        <a href="http://www.americangolf.co.uk/customerservice-show" title="Help & Info">Help &amp; Info</a>
                      </li>
                      <li>
                        <a href="https://www.americangolf.co.uk/account-edit" title="Account">Login/Register</a>
                      </li>
                      <li>
                        <a href="/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/CountryGateway-OpenOverlay" title="Please select your shipping country & language" className="country-select-link">£ UK</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="line-bottom">
                  <div className="header-mobile-search-trigger-ctr only-on-sm">
                    <a className="header-mobile-search-trigger" href="#"><i className="icon icon-search">
                        {/* Icon */}</i> <i className="icon icon-cross">
                        {/* Icon */}</i></a>
                  </div>
                  <div className="header-search-ctr header-search-ctr-desktop-tab hide-on-sm">
                    <form role="search" action="/search-results" method="get" name="simpleSearch" className="simplesearch-form suppress" id="simpleSearch">
                      <fieldset>
                        <label className="visually-hidden" htmlFor="q">Search</label> <input type="text" id="q" name="q" defaultValue className="input-search" placeholder="Search American Golf ..." data-searchsuggest="{&quot;suggestURL&quot;:&quot;/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Search-GetSuggestions&quot;,&quot;viewMoreURL&quot;:&quot;/search-results?q=xxx&quot;,&quot;viewMoreCaption&quot;:&quot;View more results&quot;}" autoComplete="off" /> <button className="button button-search submit" type="submit"><i className="icon icon-search">
                            {/* Icon */}</i></button>
                      </fieldset>
                    </form>
                  </div>
                  <div className="header-wishlist-trigger-ctr ag-only-on-md og-hide-on-sm">
                    <a href="https://www.americangolf.co.uk/wishlist" className="header-wishlist-trigger"><i className="icon icon-heart">{/* Icon */}</i>
                      <span className="only-on-lg">Wish list</span></a>
                  </div>
                  <div className="header-minicart-ctr header-minicart-slave ag-hide-on-lg">
                    <div className="header-minicart minicart" data-minicart="{&quot;addURL&quot;:&quot;/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Cart-AddProduct&quot;,&quot;removeLineItemURL&quot;:&quot;/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Cart-RemoveLineItem&quot;,&quot;updateQtyURL&quot;:&quot;/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Cart-MiniUpdateQty&quot;,&quot;reloadURL&quot;:&quot;/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Cart-MiniCart&quot;}">
                      <div className="cartstatus" data-status="{}">
                        {/* empty */}
                      </div>
                      <div className="mini-cart-total">
                        <a className="header-minicart-link" href="https://www.americangolf.co.uk/shopping-cart" title="View shopping cart"><i className="icon icon-basket"><span className="mini-cart-basket only-on-lg only-on-og">Basket</span>
                            <span className="mini-cart-qty">0</span></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav id="header-navigation-wrapper" className="header-navigation-wrapper only-on-lg">
            <div id="header-navigation" className="header-navigation" role="navigation">
              <div className="header-navigation-left">
                <div className="header-navigation-logo-ctr">
                  <a className="header-navigation-logo" href="http://www.americangolf.co.uk">
                    <div className="html-slot-container">
                      <div>
                        <img alt src="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw6f7b0e73/americangolf/header/logo_white.png" title />
                      </div>
                    </div></a>
                </div>
                <ul className="menu-category ul-level-1">
                  <li className="li-level-1">
                    <a href="http://www.americangolf.co.uk/golf-clubs" className="a-level-1">Golf Clubs</a>
                    <div className="level-2 flyout">
                      <div className="level-2-inner flyout-inner">
                        <div className="level-2-content flyout-content">
                          <div id="CLUBS_1" className="flyout-left">
                            <ul className="category-groups">
                              <li className="category-group">
                                <div className="only-on-og only-on-lg category-nav-image">
                                </div>
                                <div className="category-group-name">
                                  Woods
                                </div>
                                <ul className="category-group-block ul-level-2">
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/golf-clubs/drivers" className="a-level-2"><span className="name">Drivers</span>
                                      <span className="count">(64)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/golf-clubs/fairway-woods" className="a-level-2"><span className="name">Fairway woods</span>
                                      <span className="count">(48)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/golf-clubs/hybrids" className="a-level-2"><span className="name">Hybrids</span>
                                      <span className="count">(40)</span></a>
                                  </li>
                                </ul>
                              </li>
                              <li className="category-group">
                                <div className="only-on-og only-on-lg category-nav-image">
                                </div>
                                <div className="category-group-name">
                                  Irons &amp; Sets
                                </div>
                                <ul className="category-group-block ul-level-2">
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/golf-clubs/sets-of-irons" className="a-level-2"><span className="name">Sets of Irons</span>
                                      <span className="count">(73)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/golf-clubs/wedges" className="a-level-2"><span className="name">Wedges</span>
                                      <span className="count">(35)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/golf-clubs/package-sets" className="a-level-2"><span className="name">Package sets</span>
                                      <span className="count">(36)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/golf-clubs/single-irons" className="a-level-2"><span className="name">Single Irons</span>
                                      <span className="count">(13)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/golf-clubs/chippers" className="a-level-2"><span className="name">Chippers</span>
                                      <span className="count">(6)</span></a>
                                  </li>
                                </ul>
                              </li>
                              <li className="category-group">
                                <div className="only-on-og only-on-lg category-nav-image">
                                </div>
                                <div className="category-group-name">
                                  Putters
                                </div>
                                <ul className="category-group-block ul-level-2">
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/golf-clubs/putters" className="a-level-2"><span className="name">Putters</span>
                                      <span className="count">(149)</span></a>
                                  </li>
                                </ul>
                              </li>
                              <li className="category-group">
                                <div className="only-on-og only-on-lg category-nav-image">
                                </div>
                                <div className="category-group-name">
                                  Ladies/Junior
                                </div>
                                <ul className="category-group-block ul-level-2">
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/golf-clubs/all-ladies-golf-clubs" className="a-level-2"><span className="name">Ladies Golf Clubs</span>
                                      <span className="count">(71)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/golf-clubs/all-junior-golf-clubs" className="a-level-2"><span className="name">Junior Golf Clubs</span>
                                      <span className="count">(38)</span></a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="flyout-right">
                            <div className="html-slot-container">
                              <div className="single-product-tile">
                                <div className="product-tile" id="80b7b8d2d273807d11f876da9a" data-itemid={311213}>
                                  <div className="product-image">
                                    {/* dwMarker="product" dwContentID="80b7b8d2d273807d11f876da9a" */}
                                    <a className="thumb-link productlink" href="http://www.americangolf.co.uk/golf-clubs/drivers/taylormade-m2-2017-driver-311213.html" title="TaylorMade M2 2017 Driver"><img src="http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcea84ed1/zoom/driverM2a.jpg?sw=255" alt="TaylorMade M2 2017 Driver" title="TaylorMade M2 2017 Driver" width={255} /></a>
                                  </div>
                                  <h3 className="product-name">
                                    <a className="name-link productlink" href="http://www.americangolf.co.uk/golf-clubs/drivers/taylormade-m2-2017-driver-311213.html" title="TaylorMade M2 2017 Driver">TaylorMade
                                      M2 2017 Driver</a>
                                  </h3>
                                  <div className="product-reviews">
                                    <div className="pr_stars">
                                      <i className="icon icon-star first">
                                        {/* icon */}</i> <i className="icon icon-star">
                                        {/* icon */}</i> <i className="icon icon-star">
                                        {/* icon */}</i> <i className="icon icon-star">
                                        {/* icon */}</i> <i className="icon icon-star last">
                                        {/* icon */}</i>
                                      <span className="stars-inner" style={{width: '94%'}}><span className="stars-inner-content"><i className="icon icon-star first">
                                            {/* icon */}</i> <i className="icon icon-star">
                                            {/* icon */}</i> <i className="icon icon-star">
                                            {/* icon */}</i> <i className="icon icon-star">
                                            {/* icon */}</i> <i className="icon icon-star last">
                                            {/* icon */}</i></span></span>
                                    </div>
                                  </div>
                                  <div className="product-pricing">
                                    <div className="product-price product-price-standard">
                                      <div className="save-mrrp">
                                        <span className="mrrp">MRRP
                                          £369.00</span> <span className="save">Save £39.01</span>
                                      </div>
                                      <div className="product-sales-price" title="Sale Price">
                                        <span>£329.99</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="product-colorswatches" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flyout-bottom">
                        <div className="flyout-bottom-inner">
                          {/* dwMarker="content" dwContentID="33f750321aa6847676dcd5f427" */}
                          <div className="content-asset">
                            <ul className="benefits">
                              <li>
                                <i className="icon icon-check">
                                  {/* icon */}</i> Free Custom
                                Fitting
                              </li>
                              <li>
                                <i className="icon icon-check">
                                  {/* icon */}</i> Free UK Delivery
                                Over £50
                              </li>
                              <li>
                                <i className="icon icon-check">
                                  {/* icon */}</i> Over 100 Stores
                                Nationwide
                              </li>
                              <li>
                                <i className="icon icon-check">
                                  {/* icon */}</i> Price Match
                                Guarantee
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="li-level-1">
                    <a href="http://www.americangolf.co.uk/clothing-shoes" className="a-level-1">Clothing &amp; Shoes</a>
                    <div className="level-2 flyout">
                      <div className="level-2-inner flyout-inner">
                        <div className="level-2-content flyout-content">
                          <div id="CLOTHFOOTW_1" className="flyout-left">
                            <ul className="category-groups">
                              <li className="category-group">
                                <div className="only-on-og only-on-lg category-nav-image">
                                </div>
                                <div className="category-group-name">
                                  Layering
                                </div>
                                <ul className="category-group-block ul-level-2">
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/clothing-shoes/shirts" className="a-level-2"><span className="name">Shirts</span>
                                      <span className="count">(191)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/clothing-shoes/sweaters" className="a-level-2"><span className="name">Sweaters</span>
                                      <span className="count">(152)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/clothing-shoes/windshirts" className="a-level-2"><span className="name">Windshirts</span>
                                      <span className="count">(116)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/clothing-shoes/base-layers" className="a-level-2"><span className="name">Base Layers</span>
                                      <span className="count">(18)</span></a>
                                  </li>
                                </ul>
                              </li>
                              <li className="category-group">
                                <div className="only-on-og only-on-lg category-nav-image">
                                </div>
                                <div className="category-group-name">
                                  Outerwear
                                </div>
                                <ul className="category-group-block ul-level-2">
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/clothing-shoes/trousers" className="a-level-2"><span className="name">Trousers</span>
                                      <span className="count">(112)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/clothing-shoes/shorts" className="a-level-2"><span className="name">Shorts</span>
                                      <span className="count">(78)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/clothing-shoes/waterproofs" className="a-level-2"><span className="name">Waterproofs</span>
                                      <span className="count">(115)</span></a>
                                  </li>
                                </ul>
                              </li>
                              <li className="category-group">
                                <div className="only-on-og only-on-lg category-nav-image">
                                </div>
                                <div className="category-group-name">
                                  Footwear
                                </div>
                                <ul className="category-group-block ul-level-2">
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/clothing-shoes/shoes" className="a-level-2"><span className="name">Shoes</span>
                                      <span className="count">(236)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/clothing-shoes/socks" className="a-level-2"><span className="name">Socks</span>
                                      <span className="count">(29)</span></a>
                                  </li>
                                </ul>
                              </li>
                              <li className="category-group">
                                <div className="only-on-og only-on-lg category-nav-image">
                                </div>
                                <div className="category-group-name">
                                  Accessories &amp; Ranges
                                </div>
                                <ul className="category-group-block ul-level-2">
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/clothing-shoes/caps-visors" className="a-level-2"><span className="name">Caps, Hats &amp;
                                        Visors</span> <span className="count">(59)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/clothing-shoes/winter-hats-mitts" className="a-level-2"><span className="name">Winter Hats, Gloves &amp;
                                        Mitts</span> <span className="count">(21)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/clothing-shoes/sunglasses" className="a-level-2"><span className="name">Sunglasses</span>
                                      <span className="count">(24)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/clothing-shoes/shoe-bags-accessories" className="a-level-2"><span className="name">Shoe bags &amp;
                                        accessories</span> <span className="count">(31)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/clothing-shoes/belts-accessories" className="a-level-2"><span className="name">Belts &amp;
                                        Accessories</span> <span className="count">(19)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/clothing-shoes/ladies" className="a-level-2"><span className="name">Ladies Clothing &amp;
                                        Shoes</span> <span className="count">(363)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/clothing-shoes/junior-clothing" className="a-level-2"><span className="name">Junior Clothing &amp;
                                        Shoes</span> <span className="count">(20)</span></a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="flyout-right">
                            <div className="html-slot-container">
                              <div className="single-product-tile">
                                <div className="product-tile" id="961c444031a2f1cdc241576de6" data-itemid={312193}>
                                  <div className="product-image">
                                    {/* dwMarker="product" dwContentID="961c444031a2f1cdc241576de6" */}
                                    <a className="thumb-link productlink" href="http://www.americangolf.co.uk/clothing-shoes/shirts/ping-drake-polo-shirt-301397.html?dwvar_301397_variantimage=ocean%2Fnavy" title="PING Drake Polo Shirt"><img src="http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3fa1ab12/zoom/301397-ocean.jpg?sw=255" alt="PING Drake Polo Shirt" title="PING Drake Polo Shirt" width={255} /></a>
                                    <div className="product-promo">
                                      <div className="promotional-message">
                                        Save £5
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
                                    <a className="name-link productlink" href="http://www.americangolf.co.uk/clothing-shoes/shirts/ping-drake-polo-shirt-301397.html?dwvar_301397_variantimage=ocean%2Fnavy" title="PING Drake Polo Shirt">PING
                                      Drake Polo Shirt</a>
                                  </h3>
                                  <div className="product-reviews">
                                    <div className="pr_stars">
                                      <i className="icon icon-star first">
                                        {/* icon */}</i> <i className="icon icon-star">
                                        {/* icon */}</i> <i className="icon icon-star">
                                        {/* icon */}</i> <i className="icon icon-star">
                                        {/* icon */}</i> <i className="icon icon-star last">
                                        {/* icon */}</i>
                                      <span className="stars-inner" style={{width: '96%'}}><span className="stars-inner-content"><i className="icon icon-star first">
                                            {/* icon */}</i> <i className="icon icon-star">
                                            {/* icon */}</i> <i className="icon icon-star">
                                            {/* icon */}</i> <i className="icon icon-star">
                                            {/* icon */}</i> <i className="icon icon-star last">
                                            {/* icon */}</i></span></span>
                                    </div>
                                  </div>
                                  <div className="product-pricing">
                                    <div className="product-price product-price-standard">
                                      <div className="save-mrrp">
                                        <span className="mrrp">MRRP
                                          £35.00</span> <span className="save">Save £5.01</span>
                                      </div>
                                      <div className="product-sales-price" title="Sale Price">
                                        <span>£29.99</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="product-colorswatches">
                                    <ul className="product-colorswatches-list">
                                      <li>
                                        <a className="swatch productlink" href="http://www.americangolf.co.uk/clothing-shoes/shirts/ping-drake-polo-shirt-301397.html?dwvar_301397_variantimage=black%2Frich%20red" title="Black/Rich Red"><span className="swatch-inner" style={{backgroundImage: 'url(http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw07f80be3/zoom/301397-blackred.jpg?cx=900&cy=700&cw=26&ch=26)'}} data-mediumimage="http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw07f80be3/zoom/301397-blackred.jpg?sw=255">
                                            {/* empty */}</span></a>
                                      </li>
                                      <li>
                                        <a className="swatch productlink" href="http://www.americangolf.co.uk/clothing-shoes/shirts/ping-drake-polo-shirt-301397.html?dwvar_301397_variantimage=grey%2Fwhite" title="Grey/White"><span className="swatch-inner" style={{backgroundImage: 'url(http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwade7c77b/zoom/301397_silv.jpg?cx=900&cy=700&cw=26&ch=26)'}} data-mediumimage="http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwade7c77b/zoom/301397_silv.jpg?sw=255">
                                            {/* empty */}</span></a>
                                      </li>
                                      <li>
                                        <a className="swatch productlink" href="http://www.americangolf.co.uk/clothing-shoes/shirts/ping-drake-polo-shirt-301397.html?dwvar_301397_variantimage=ocean%2Fnavy" title="Ocean/Navy"><span className="swatch-inner" style={{backgroundImage: 'url(http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3fa1ab12/zoom/301397-ocean.jpg?cx=900&cy=700&cw=26&ch=26)'}} data-mediumimage="http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3fa1ab12/zoom/301397-ocean.jpg?sw=255">
                                            {/* empty */}</span></a>
                                      </li>
                                      <li>
                                        <a className="swatch productlink" href="http://www.americangolf.co.uk/clothing-shoes/shirts/ping-drake-polo-shirt-301397.html?dwvar_301397_variantimage=white%2Fnavy%20blue" title="White/Navy Blue"><span className="swatch-inner" style={{backgroundImage: 'url(http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw837c70fa/zoom/301397_whynvy.jpg?cx=900&cy=700&cw=26&ch=26)'}} data-mediumimage="http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw837c70fa/zoom/301397_whynvy.jpg?sw=255">
                                            {/* empty */}</span></a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flyout-bottom">
                        <div className="flyout-bottom-inner">
                          {/* dwMarker="content" dwContentID="33f750321aa6847676dcd5f427" */}
                          <div className="content-asset">
                            <ul className="benefits">
                              <li>
                                <i className="icon icon-check">
                                  {/* icon */}</i> Free Custom
                                Fitting
                              </li>
                              <li>
                                <i className="icon icon-check">
                                  {/* icon */}</i> Free UK Delivery
                                Over £50
                              </li>
                              <li>
                                <i className="icon icon-check">
                                  {/* icon */}</i> Over 100 Stores
                                Nationwide
                              </li>
                              <li>
                                <i className="icon icon-check">
                                  {/* icon */}</i> Price Match
                                Guarantee
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="li-level-1">
                    <a href="http://www.americangolf.co.uk/balls-accessories" className="a-level-1">Balls &amp; Accessories</a>
                    <div className="level-2 flyout">
                      <div className="level-2-inner flyout-inner">
                        <div className="level-2-content flyout-content">
                          <div id="ACCS_1" className="flyout-left">
                            <ul className="category-groups">
                              <li className="category-group">
                                <div className="only-on-og only-on-lg category-nav-image">
                                </div>
                                <div className="category-group-name">
                                  Golf Balls &amp; Gloves
                                </div>
                                <ul className="category-group-block ul-level-2">
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/golf-balls" className="a-level-2"><span className="name">Golf balls</span>
                                      <span className="count">(63)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/practice-bags-balls" className="a-level-2"><span className="name">Practice bags &amp;
                                        balls</span> <span className="count">(18)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/golf-gloves" className="a-level-2"><span className="name">Golf gloves</span>
                                      <span className="count">(72)</span></a>
                                  </li>
                                </ul>
                              </li>
                              <li className="category-group">
                                <div className="only-on-og only-on-lg category-nav-image">
                                </div>
                                <div className="category-group-name">
                                  Tees &amp; Accessories
                                </div>
                                <ul className="category-group-block ul-level-2">
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/tees" className="a-level-2"><span className="name">Tees</span> <span className="count">(20)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/umbrellas" className="a-level-2"><span className="name">Umbrellas</span>
                                      <span className="count">(30)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/ball-retrievers" className="a-level-2"><span className="name">Ball retrievers</span>
                                      <span className="count">(18)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/ball-markers" className="a-level-2"><span className="name">Ball markers</span>
                                      <span className="count">(13)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/health" className="a-level-2"><span className="name">Health</span>
                                      <span className="count">(11)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/score-trackers" className="a-level-2"><span className="name">Score trackers</span>
                                      <span className="count">(9)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/gifts" className="a-level-2"><span className="name">Gifts</span>
                                      <span className="count">(62)</span></a>
                                  </li>
                                </ul>
                              </li>
                              <li className="category-group">
                                <div className="only-on-og only-on-lg category-nav-image">
                                </div>
                                <div className="category-group-name">
                                  Training
                                </div>
                                <ul className="category-group-block ul-level-2">
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/mats-nets" className="a-level-2"><span className="name">Mats &amp; nets</span>
                                      <span className="count">(12)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/training-aids" className="a-level-2"><span className="name">Training aids</span>
                                      <span className="count">(42)</span></a>
                                  </li>
                                </ul>
                              </li>
                              <li className="category-group">
                                <div className="only-on-og only-on-lg category-nav-image">
                                </div>
                                <div className="category-group-name">
                                  Maintenance
                                </div>
                                <ul className="category-group-block ul-level-2">
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/towels" className="a-level-2"><span className="name">Towels</span>
                                      <span className="count">(22)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/grips" className="a-level-2"><span className="name">Grips</span>
                                      <span className="count">(35)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/head-covers" className="a-level-2"><span className="name">Head covers</span>
                                      <span className="count">(44)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/cleaning-products" className="a-level-2"><span className="name">Cleaning products</span>
                                      <span className="count">(8)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/balls-accessories/pitchmark-repairers" className="a-level-2"><span className="name">Pitchmark
                                        repairers</span> <span className="count">(17)</span></a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="flyout-right">
                            <div className="html-slot-container">
                              <div className="single-product-tile">
                                <div className="product-tile" id="bcHUEiaaguyXAaaadoBPNSLNix" data-itemid={293031}>
                                  <div className="product-image">
                                    {/* dwMarker="product" dwContentID="bcHUEiaaguyXAaaadoBPNSLNix" */}
                                    <a className="thumb-link productlink" href="http://www.americangolf.co.uk/balls-accessories/golf-balls/srixon-distance-12-ball-pack-293030.html?dwvar_293030_variantimage=white" title="Srixon Distance 12 Ball Pack"><img src="http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6562af4f/zoom/293030_1.jpg?sw=255" alt="Srixon Distance 12 Ball Pack" title="Srixon Distance 12 Ball Pack" width={255} /></a>
                                    <div className="product-promo">
                                      <div className="promotional-message">
                                        20% off Second Pack
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
                                    <a className="name-link productlink" href="http://www.americangolf.co.uk/balls-accessories/golf-balls/srixon-distance-12-ball-pack-293030.html?dwvar_293030_variantimage=white" title="Srixon Distance 12 Ball Pack">Srixon
                                      Distance 12 Ball Pack</a>
                                  </h3>
                                  <div className="product-reviews">
                                    <div className="pr_stars">
                                      <i className="icon icon-star first">
                                        {/* icon */}</i> <i className="icon icon-star">
                                        {/* icon */}</i> <i className="icon icon-star">
                                        {/* icon */}</i> <i className="icon icon-star">
                                        {/* icon */}</i> <i className="icon icon-star last">
                                        {/* icon */}</i>
                                      <span className="stars-inner" style={{width: '87%'}}><span className="stars-inner-content"><i className="icon icon-star first">
                                            {/* icon */}</i> <i className="icon icon-star">
                                            {/* icon */}</i> <i className="icon icon-star">
                                            {/* icon */}</i> <i className="icon icon-star">
                                            {/* icon */}</i> <i className="icon icon-star last">
                                            {/* icon */}</i></span></span>
                                    </div>
                                  </div>
                                  <div className="product-pricing">
                                    <div className="product-price product-price-standard">
                                      <div className="save-mrrp">
                                        <span className="mrrp">MRRP
                                          £20.99</span> <span className="save">Save £11.00</span>
                                      </div>
                                      <div className="product-sales-price" title="Sale Price">
                                        <span>£9.99</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="product-colorswatches" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flyout-bottom">
                        <div className="flyout-bottom-inner">
                          {/* dwMarker="content" dwContentID="33f750321aa6847676dcd5f427" */}
                          <div className="content-asset">
                            <ul className="benefits">
                              <li>
                                <i className="icon icon-check">
                                  {/* icon */}</i> Free Custom
                                Fitting
                              </li>
                              <li>
                                <i className="icon icon-check">
                                  {/* icon */}</i> Free UK Delivery
                                Over £50
                              </li>
                              <li>
                                <i className="icon icon-check">
                                  {/* icon */}</i> Over 100 Stores
                                Nationwide
                              </li>
                              <li>
                                <i className="icon icon-check">
                                  {/* icon */}</i> Price Match
                                Guarantee
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="li-level-1">
                    <a href="http://www.americangolf.co.uk/gps-bags-equipment" className="a-level-1">GPS, Bags &amp; Equipment</a>
                    <div className="level-2 flyout">
                      <div className="level-2-inner flyout-inner">
                        <div className="level-2-content flyout-content">
                          <div id="EQUIPMENT_1" className="flyout-left">
                            <ul className="category-groups">
                              <li className="category-group">
                                <div className="only-on-og only-on-lg category-nav-image">
                                </div>
                                <div className="category-group-name">
                                  Golf GPS
                                </div>
                                <ul className="category-group-block ul-level-2">
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/all-golf-gps" className="a-level-2"><span className="name">All Golf GPS</span>
                                      <span className="count">(50)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/gps-watches" className="a-level-2"><span className="name">GPS watches</span>
                                      <span className="count">(26)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/gps" className="a-level-2"><span className="name">GPS</span> <span className="count">(19)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/optical-rangefinder" className="a-level-2"><span className="name">Rangefinders</span>
                                      <span className="count">(11)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/gps-accessories" className="a-level-2"><span className="name">GPS Accessories</span>
                                      <span className="count">(12)</span></a>
                                  </li>
                                </ul>
                              </li>
                              <li className="category-group">
                                <div className="only-on-og only-on-lg category-nav-image">
                                </div>
                                <div className="category-group-name">
                                  Golf Bags
                                </div>
                                <ul className="category-group-block ul-level-2">
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/all-golf-bags" className="a-level-2"><span className="name">All Golf Bags</span>
                                      <span className="count">(230)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/carry-bags" className="a-level-2"><span className="name">Carry/Stand Bags</span>
                                      <span className="count">(93)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/trolley-cart-bags" className="a-level-2"><span className="name">Trolley/Cart bags</span>
                                      <span className="count">(103)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/pencil-bags" className="a-level-2"><span className="name">Pencil bags</span>
                                      <span className="count">(4)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/travel-bags" className="a-level-2"><span className="name">Travel bags</span>
                                      <span className="count">(23)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/golf-luggage" className="a-level-2"><span className="name">Golf luggage</span>
                                      <span className="count">(15)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/bag-accessories" className="a-level-2"><span className="name">Bag accessories</span>
                                      <span className="count">(13)</span></a>
                                  </li>
                                </ul>
                              </li>
                              <li className="category-group">
                                <div className="only-on-og only-on-lg category-nav-image">
                                </div>
                                <div className="category-group-name">
                                  Golf Trolleys
                                </div>
                                <ul className="category-group-block ul-level-2">
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/all-golf-trolleys" className="a-level-2"><span className="name">All Golf Trolleys</span>
                                      <span className="count">(76)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/electric-trolleys" className="a-level-2"><span className="name">Electric trolleys</span>
                                      <span className="count">(34)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/push-pull-trolleys" className="a-level-2"><span className="name">Push/pull
                                        trolleys</span> <span className="count">(42)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/batteries-and-chargers" className="a-level-2"><span className="name">Batteries and
                                        chargers</span> <span className="count">(13)</span></a>
                                  </li>
                                  <li className="li-level-2">
                                    <a href="http://www.americangolf.co.uk/gps-bags-equipment/trolley-accessories" className="a-level-2"><span className="name">Trolley
                                        accessories</span> <span className="count">(68)</span></a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="flyout-right">
                            <div className="html-slot-container">
                              <div className="single-product-tile">
                                <div className="product-tile" id="35198ec585b634e6bc2d69646e" data-itemid={304673}>
                                  <div className="product-image">
                                    {/* dwMarker="product" dwContentID="35198ec585b634e6bc2d69646e" */}
                                    <a className="thumb-link productlink" href="http://www.americangolf.co.uk/gps-bags-equipment/gps-watches/tomtom-golfer-limited-edition-gps-watch-304673.html" title="TomTom Golfer Limited Edition GPS Watch">
                                      <img src="http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwebade435/zoom/304673-1.jpg?sw=255" alt="TomTom Golfer Limited Edition GPS Watch" title="TomTom Golfer Limited Edition GPS Watch" width={255} /></a>
                                    <div className="badge badge-pricebuster">
                                      <div className="badge-inner">
                                        Great
                                        <br />
                                        Value
                                      </div>
                                    </div>
                                  </div>
                                  <h3 className="product-name">
                                    <a className="name-link productlink" href="http://www.americangolf.co.uk/gps-bags-equipment/gps-watches/tomtom-golfer-limited-edition-gps-watch-304673.html" title="TomTom Golfer Limited Edition GPS Watch">
                                      TomTom Golfer Limited Edition
                                      GPS Watch</a>
                                  </h3>
                                  <div className="product-reviews">
                                    <div className="pr_stars">
                                      <i className="icon icon-star first">
                                        {/* icon */}</i> <i className="icon icon-star">
                                        {/* icon */}</i> <i className="icon icon-star">
                                        {/* icon */}</i> <i className="icon icon-star">
                                        {/* icon */}</i> <i className="icon icon-star last">
                                        {/* icon */}</i>
                                      <span className="stars-inner" style={{width: '83%'}}><span className="stars-inner-content"><i className="icon icon-star first">
                                            {/* icon */}</i> <i className="icon icon-star">
                                            {/* icon */}</i> <i className="icon icon-star">
                                            {/* icon */}</i> <i className="icon icon-star">
                                            {/* icon */}</i> <i className="icon icon-star last">
                                            {/* icon */}</i></span></span>
                                    </div>
                                  </div>
                                  <div className="product-pricing">
                                    <div className="product-price product-price-standard">
                                      <div className="save-mrrp" />
                                      <div className="product-sales-price" title="Sale Price">
                                        <span>£139.99</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="product-colorswatches">
                                    <ul className="product-colorswatches-list">
                                      <li>
                                        <a className="swatch productlink" href="http://www.americangolf.co.uk/gps-bags-equipment/gps-watches/tomtom-golfer-limited-edition-gps-watch-304673.html?dwvar_304673_variantimage=black%2Fgreen" title="Black/Green"><span className="swatch-inner" style={{backgroundImage: 'url(http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwebade435/zoom/304673-1.jpg?cx=884&cy=1032&cw=26&ch=26)'}} data-mediumimage="http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dwebade435/zoom/304673-1.jpg?sw=255">
                                            {/* empty */}</span></a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flyout-bottom">
                        <div className="flyout-bottom-inner">
                          {/* dwMarker="content" dwContentID="33f750321aa6847676dcd5f427" */}
                          <div className="content-asset">
                            <ul className="benefits">
                              <li>
                                <i className="icon icon-check">
                                  {/* icon */}</i> Free Custom
                                Fitting
                              </li>
                              <li>
                                <i className="icon icon-check">
                                  {/* icon */}</i> Free UK Delivery
                                Over £50
                              </li>
                              <li>
                                <i className="icon icon-check">
                                  {/* icon */}</i> Over 100 Stores
                                Nationwide
                              </li>
                              <li>
                                <i className="icon icon-check">
                                  {/* icon */}</i> Price Match
                                Guarantee
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="li-level-1">
                    <a href="http://www.americangolf.co.uk/greatvalue" className="a-level-1">Great Value</a>
                  </li>
                  <li className="li-level-1">
                    <a href="http://www.americangolf.co.uk/golf-brands" className="a-level-1">Brands</a>
                    <div className="level-2 flyout flyout-brands">
                      <div className="level-2-inner flyout-inner">
                        <div className="level-2-content flyout-content grid-row">
                          <div className="flyout-left col-lg-9 full-height">
                            <div className="html-slot-container">
                              <style dangerouslySetInnerHTML={{__html: "\n                        .top-brands .top-brand {\n                        display: block!important;\n                        }\n                        .top-brands .top-brand a:not(.button) {\n                        height: 0;\n                        padding-bottom: 33.3333333%;\n                        background-image: url('http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw209ffcfe/2017/ag/content/header/navigation/flyouts/brands/brands-flyout-sprite.png');\n                        display:block;\n                        background-size: 1100% auto;\n                        opacity: 0.6;\n                        -webkit-transition: opacity 200ms;\n                        -moz-transition: opacity 200ms;\n                        -o-transition: opacity 200ms;\n                        transition: opacity 200ms;\n                        }\n                        .top-brands .top-brand a:not(.button):hover {\n                        opacity: 1;\n                        }\n                        .top-brands .top-brand-1 a { background-position: 0 0; }\n                        .top-brands .top-brand-2 a { background-position: 10% 0; }\n                        .top-brands .top-brand-3 a { background-position: 20% 0; }\n                        .top-brands .top-brand-4 a { background-position: 30% 0; }\n                        .top-brands .top-brand-5 a { background-position: 40% 0; }\n                        .top-brands .top-brand-6 a { background-position: 50% 0; }\n                        .top-brands .top-brand-7 a { background-position: 60% 0; }\n                        .top-brands .top-brand-8 a { background-position: 70% 0; }\n                        .top-brands .top-brand-9 a { background-position: 80% 0; }\n                        .top-brands .top-brand-10 a { background-position: 90% 0; }\n                        .top-brands .top-brand-11 a { background-position: 100% 0; }\n                        " }} />
                              <div className="top-brands">
                                <div className="top-brands-row grid-row">
                                  <div className="col-sm-3 full-height top-brand top-brand-1">
                                    <a href="http://www.americangolf.co.uk/taylormade">
                                      <div className="hoverlay">
                                      </div></a>
                                  </div>
                                  <div className="col-sm-3 full-height top-brand top-brand-2">
                                    <a href="http://www.americangolf.co.uk/nike-golf">
                                      <div className="hoverlay">
                                      </div></a>
                                  </div>
                                  <div className="col-sm-3 full-height top-brand top-brand-3">
                                    <a href="http://www.americangolf.co.uk/garmin">
                                      <div className="hoverlay">
                                      </div></a>
                                  </div>
                                  <div className="col-sm-3 full-height top-brand top-brand-4">
                                    <a href="http://www.americangolf.co.uk/adidas-golf">
                                      <div className="hoverlay">
                                      </div></a>
                                  </div>
                                </div>
                                <div className="top-brands-row grid-row">
                                  <div className="col-sm-3 full-height top-brand top-brand-5">
                                    <a href="http://www.americangolf.co.uk/cobra-golf">
                                      <div className="hoverlay">
                                      </div></a>
                                  </div>
                                  <div className="col-sm-3 full-height top-brand top-brand-6">
                                    <a href="http://www.americangolf.co.uk/callaway-golf">
                                      <div className="hoverlay">
                                      </div></a>
                                  </div>
                                  <div className="col-sm-3 full-height top-brand top-brand-7">
                                    <a href="http://www.americangolf.co.uk/wilson-staff">
                                      <div className="hoverlay">
                                      </div></a>
                                  </div>
                                  <div className="col-sm-3 full-height top-brand top-brand-8">
                                    <a href="http://www.americangolf.co.uk/srixon">
                                      <div className="hoverlay">
                                      </div></a>
                                  </div>
                                </div>
                                <div className="top-brands-row grid-row">
                                  <div className="col-sm-3 full-height top-brand top-brand-9">
                                    <a href="http://www.americangolf.co.uk/puma-golf">
                                      <div className="hoverlay">
                                      </div></a>
                                  </div>
                                  <div className="col-sm-3 full-height top-brand top-brand-10">
                                    <a href="http://www.americangolf.co.uk/ping">
                                      <div className="hoverlay">
                                      </div></a>
                                  </div>
                                  <div className="col-sm-3 full-height top-brand top-brand-11">
                                    <a href="http://www.americangolf.co.uk/footjoy">
                                      <div className="hoverlay">
                                      </div></a>
                                  </div>
                                  <div className="col-sm-3 full-height top-brand top-brand-4">
                                    <a className="button" href="http://www.americangolf.co.uk/golf-brands">
                                      View all</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flyout-right col-lg-3 full-height only-on-lg">
                            <div className="html-slot-container">
                              <div className="single-product-tile">
                                <div className="product-tile" id="a458c5f107a2685d8f054a573c" data-itemid={311340}>
                                  <div className="product-image">
                                    {/* dwMarker="product" dwContentID="a458c5f107a2685d8f054a573c" */}
                                    <a className="thumb-link productlink" href="http://www.americangolf.co.uk/golf-clubs/drivers/callaway-golf-gbb-epic-driver-311340.html" title="Callaway Golf GBB Epic Driver">
                                      <img src="http://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw37dd30cc/zoom/311340_1.jpg?sw=255" alt="Callaway Golf GBB Epic Driver" title="Callaway Golf GBB Epic Driver" width={255} /></a>
                                  </div>
                                  <h3 className="product-name">
                                    <a className="name-link productlink" href="http://www.americangolf.co.uk/golf-clubs/drivers/callaway-golf-gbb-epic-driver-311340.html" title="Callaway Golf GBB Epic Driver">
                                      Callaway Golf GBB Epic
                                      Driver</a>
                                  </h3>
                                  <div className="product-reviews">
                                  </div>
                                  <div className="product-pricing">
                                    <div className="product-price product-price-standard">
                                      <div className="save-mrrp">
                                        <span className="mrrp">MRRP
                                          £469.00</span> <span className="save">Save £40.00</span>
                                      </div>
                                      <div className="product-sales-price" title="Sale Price">
                                        <span>£429.00</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="product-colorswatches" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flyout-bottom">
                        {/* dwMarker="content" dwContentID="33f750321aa6847676dcd5f427" */}
                        <div className="content-asset">
                          <ul className="benefits">
                            <li>
                              <i className="icon icon-check">
                                {/* icon */}</i> Free Custom Fitting
                            </li>
                            <li>
                              <i className="icon icon-check">
                                {/* icon */}</i> Free UK Delivery
                              Over £50
                            </li>
                            <li>
                              <i className="icon icon-check">
                                {/* icon */}</i> Over 100 Stores
                              Nationwide
                            </li>
                            <li>
                              <i className="icon icon-check">
                                {/* icon */}</i> Price Match
                              Guarantee
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="li-level-1 highlighted agclub">
                    <a href="http://www.americangolf.co.uk/club-page" className="level-1 club-link a-level-1">AG Club</a>
                    <div className="level-2 flyout flyout-clubhouse">
                      <div className="level-2-inner flyout-inner">
                        <div className="level-2-content flyout-content grid-row">
                          <div className="html-slot-container">
                            <style dangerouslySetInnerHTML={{__html: "\n                    .top-clubs .top-brand {\n                    display: block!important;\n                    }\n                    .top-clubs .top-brand a:not(.button) {\n                    height: 0;\n                    padding-bottom: 64.6387833%;\n                    background-image: url('http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwd5fae73a/2017/ag/content/header/navigation/flyouts/club/club-sprite.jpg');\n                    display:block;\n                    background-size: 400% auto;\n                    }\n                    }\n                    .top-clubs .top-brand-1 a { background-position: 0 0; }\n                    .top-clubs .top-brand-2 a { background-position: 33.3333333% 0; }\n                    .top-clubs .top-brand-3 a { background-position: 66.6666666% 0; }\n                    .top-clubs .top-brand-4 a { background-position: 99.9999999% 0; }\n                    .competition-flyout-tile {\n                    background-color: #121c26;\n                    padding: 15px;\n                    }\n                    .competition-flyout-tile .tile-heading {\n                    color: #fff;\n                    margin-bottom: 0;\n                    }\n                    " }} />
                            <div className="top-clubs">
                              <div className="grid-row">
                                <div className="col-sm-3 full-height top-brand top-brand-1">
                                  <div className="banner clubhouse-flyout-item">
                                    <a href="http://www.americangolf.co.uk/free-shows/free-shows.html">
                                      <div className="clubhouse-flyout-item-overlay">
                                      </div>
                                      <div className="content">
                                        <div className="tile-heading heading-2">
                                          Free shows
                                        </div>
                                      </div></a>
                                  </div>
                                </div>
                                <div className="col-sm-3 full-height top-brand top-brand-2">
                                  <div className="banner clubhouse-flyout-item">
                                    <a href="http://www.americangolf.co.uk/free-tournaments/free-tournaments.html">
                                      <div className="clubhouse-flyout-item-overlay">
                                      </div>
                                      <div className="content">
                                        <div className="tile-heading heading-2">
                                          Free tournaments
                                        </div>
                                      </div></a>
                                  </div>
                                </div>
                                <div className="col-sm-3 full-height top-brand top-brand-3">
                                  <div className="banner clubhouse-flyout-item">
                                    <a href="https://community.americangolf.co.uk/" target="_blank">
                                      <div className="clubhouse-flyout-item-overlay">
                                      </div>
                                      <div className="content">
                                        <div className="tile-heading heading-2">
                                          Community
                                        </div>
                                      </div></a>
                                  </div>
                                </div>
                                <div className="col-sm-3 full-height top-brand top-brand-4">
                                  <div className="banner clubhouse-flyout-item">
                                    <a href="http://www.americangolf.co.uk/club-page">
                                      <div className="clubhouse-flyout-item-overlay">
                                      </div>
                                      <div className="content">
                                        <div className="tile-heading heading-2">
                                          AG Club
                                        </div>
                                      </div></a>
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="competition-flyout-tile banner">
                                    <a className="fullsize-bannerlink" href="http://www.americangolf.co.uk/golf-competitions/CompetitionHub.html">
                                    </a>
                                    <div className="grid-row">
                                      <div className="col-sm-9 full-height">
                                        <div className="tile-heading heading-2">
                                          <i className="icon icon-trophy-2">
                                            {/* icon */}</i>
                                          <span>Competitions</span>
                                        </div>
                                      </div>
                                      <div className="col-sm-3 full-height">
                                        <a className="button" href="http://www.americangolf.co.uk/golf-competitions/CompetitionHub.html">
                                          View all</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="header-navigation-right">
                <div className="header-search-ctr header-search-ctr-desktop">
                  <form role="search" action="/search-results" method="get" name="simpleSearch2" className="simplesearch-form suppress" id="simpleSearch2">
                    <fieldset>
                      <label className="visually-hidden" htmlFor="q2">Search</label>
                      <input type="text" id="q2" name="q" value="" className="input-search" placeholder="Search American Golf ..." data-searchsuggest="{&quot;suggestURL&quot;:&quot;/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Search-GetSuggestions&quot;,&quot;viewMoreURL&quot;:&quot;/search-results?q=xxx&quot;,&quot;viewMoreCaption&quot;:&quot;View more results&quot;}" autoComplete="off" />
                      <button className="button button-search submit" type="submit">
                        <i className="icon icon-search"></i>
                      </button>
                    </fieldset>
                  </form>
                </div>
                <div className="header-search-trigger-ctr only-on-lg">
                  <a href="#" className="header-search-trigger"><i className="icon icon-search">{/* Icon */}</i></a>
                </div>
                <div className="header-wishlist-trigger-ctr only-on-lg">
                  <a href="https://www.americangolf.co.uk/wishlist" className="header-wishlist-trigger"><i className="icon icon-heart">{/* Icon */}</i></a>
                </div>
                <div className="header-minicart-ctr header-minicart-master nav-minicart only-on-lg">
                  <div className="header-minicart minicart" data-minicart="{&quot;addURL&quot;:&quot;/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Cart-AddProduct&quot;,&quot;removeLineItemURL&quot;:&quot;/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Cart-RemoveLineItem&quot;,&quot;updateQtyURL&quot;:&quot;/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Cart-MiniUpdateQty&quot;,&quot;reloadURL&quot;:&quot;/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Cart-MiniCart&quot;}">
                    <div className="cartstatus" data-status="{}">
                      {/* empty */}
                    </div>
                    <div className="mini-cart-total">
                      <a className="header-minicart-link" href="https://www.americangolf.co.uk/shopping-cart" title="View shopping cart"><i className="icon icon-basket"><span className="mini-cart-basket only-on-lg only-on-og">Basket</span>
                          <span className="mini-cart-qty">0</span></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="header-mobile-search only-on-sm">
            <div className="header-search-ctr header-search-ctr-mobile">
              <form role="search" action="/search-results" method="get" name="simpleSearch3" className="simplesearch-form suppress" id="simpleSearch3">
                <fieldset>
                  <label className="visually-hidden" htmlFor="q3">Search</label> <input type="text" id="q3" name="q" defaultValue className="input-search" placeholder="Search American Golf ..." data-searchsuggest="{&quot;suggestURL&quot;:&quot;/on/demandware.store/Sites-AmericanGolf-GB-Site/en_GB/Search-GetSuggestions&quot;,&quot;viewMoreURL&quot;:&quot;/search-results?q=xxx&quot;,&quot;viewMoreCaption&quot;:&quot;View more results&quot;}" autoComplete="off" /> <button className="button button-search submit" type="submit"><i className="icon icon-search">
                      {/* Icon */}</i></button>
                </fieldset>
              </form>
            </div>
          </div>
        </header>
        <div id="header-banner-wrapper" className="header-banner-wrapper">
          <div className="html-slot-container">
            {/* <div class="header-banner">- In store only till the end of this month: Double value on clubs trade-in. <a href="#">(TODO) Read more</a> -</div> */}
            <div className="header-banner grid-row">
              <div className="col-sm-12 full-height" />
              <div className="col-sm-7 col-md-4 col-lg-3 full-height">
                <a onclick="_gaq.push(['_trackEvent', 'Banner', 'Click', 'SITEWIDE-1']);" href="http://www.americangolf.co.uk/maymegadeals">May
                  Mega Deals</a>
              </div>
              <div className="col-sm-5 col-md-4 col-lg-3 full-height">
                <a onclick="_gaq.push(['_trackEvent', 'Banner', 'Click', 'SITEWIDE-2']);" href="http://www.americangolf.co.uk/content/pricematch-guarantee.html">
                  Price Match Guarantee</a>
              </div>
              <div className="col-md-4 col-lg-3 full-height hide-on-sm">
                <a onclick="_gaq.push(['_trackEvent', 'Banner', 'Click', 'SITEWIDE-3']);" href="http://www.americangolf.co.uk/shop-online-collect-in-store/store-delivery-options.html">
                  Shop Online Collect in Store</a>
              </div>
              <div className="col-md-4 col-lg-3 full-height hide-on-md hide-on-sm">
                Free UK Delivery Over £50
                <div className="tooltip tooltip-inline tooltip-reverse" style={{display: 'inline-block'}}>
                  <i className="icon icon-info">{/* icon */}</i>
                  <div className="tooltip-content">
                    <div className="tooltip-content-arrow">
                      {/* arrow */}
                    </div>
                    <div className="tooltip-content-inner">
                      Free Delivery on all orders over £50, when
                      standard delivery is selected in the
                      checkout.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
