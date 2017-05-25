import React from 'react';

export default class ImproveYourGame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-section">
        <h2 className="heading-1">
          We exist to improve your game
        </h2>
        <div className="grid-row banner-grid">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="banner banner-blue">
              <div className="content">
                <div className="storefinder">
                  <div className="storefinder-map-icon">
                    <i className="icon icon-location">
                      {/* icon */}</i>
                  </div>
                  <div className="storefinder-headline">
                    Find your local store
                  </div>
                  <div className="storefinder-subheadline">
                    Search our 113 stores
                  </div>
                  <form action="/find-stores" method="get" noValidate="novalidate" className="storefinder-form">
                    <div className="field">
                      <input type="text" name="zipcity" placeholder="Town or postcode" className="input-text" />
                    </div><input type="submit" defaultValue="Find" className="button" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="banner content-bottom">
              <picture><source media="(min-width: 992px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw78856ce6/2017/ag/content/homepage/row-9/banner-backgrounds/club/lg.jpg" />
                <source media="(min-width: 768px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwd954df1e/2017/ag/content/homepage/row-9/banner-backgrounds/club/md.jpg" />
                <source media="(min-width: 480px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwb0d7fcc9/2017/ag/content/homepage/row-9/banner-backgrounds/club/sm.jpg" />
                <img alt srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw54076226/2017/ag/content/homepage/row-9/banner-backgrounds/club/xs.jpg" />
              </picture> <a href="http://www.americangolf.co.uk/club-page" className="fullsize-bannerlink" />
              <div className="content">
                <div className="banner-logo">
                  &nbsp;
                </div>
                <h3 className="banner-heading">
                  {/*- Empty =*/}
                </h3>
                <div>
                  {/*- Empty =*/}
                </div>
                <div className="banner-button">
                  <a className="button" href="http://www.americangolf.co.uk/club-page">
                    More info</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 only-on-lg">
            <div className="banner banner-blue">
              <div className="content">
                <h3 className="banner-heading" style={{fontSize: '32px', lineHeight: '32px'}}>
                  Pre – Owned Golf Clubs
                </h3>
                <div>
                  Great Range
                  <br />
                  Fantastic Prices!
                  <br />
                  Visit your Nearest Store Today
                </div>
                <div className="banner-button">
                  <a className="button" href="http://www.americangolf.co.uk/pre-owned-clubs/pre-owned-clubs.html">
                    More info</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}