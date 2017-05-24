import React from 'react';
import { Carousel } from 'react-responsive-carousel';
require('react-responsive-carousel/lib/styles/carousel.css');

export default class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let positions = {
      position: 'absolute',
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px'
    }
    return (
      <Carousel axis="horizontal" showThumbs={false} showArrows={false} dynamicHeight emulateTouch>
          <div>
            <picture>
              <source media="(min-width: 1600px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw41fc1d1c/2017/ag/content/homepage/row-1/carousel-backgrounds/brands/2017/wilson-staff/home/xxl.jpg" />
              <source media="(min-width: 1170px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwe54c4904/2017/ag/content/homepage/row-1/carousel-backgrounds/brands/2017/wilson-staff/home/xl.jpg" />
              <source media="(min-width: 992px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw4c80a7ff/2017/ag/content/homepage/row-1/carousel-backgrounds/brands/2017/wilson-staff/home/lg.jpg" />
              <source media="(min-width: 768px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwa4ef4c0a/2017/ag/content/homepage/row-1/carousel-backgrounds/brands/2017/wilson-staff/home/md.jpg" />
              <source media="(min-width: 480px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwd845b0cf/2017/ag/content/homepage/row-1/carousel-backgrounds/brands/2017/wilson-staff/home/sm.jpg" />
              <img alt="New Clubs for 2017" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwf19b78a2/2017/ag/content/homepage/row-1/carousel-backgrounds/brands/2017/wilson-staff/home/xs.jpg" />
            </picture>
            <div className="banner banner-hero-large content-dark content content-bottom" style={positions}>
              <div className="content no-spacing-left no-spacing-right full-banner">
                <div className="banner-row">
                  <div className="col-sm-12 col-md-6 col-md-offset-6 no-spacing-top product-details">
                    <div className="brand-details-content">
                      <div className="banner-button">
                        <a className="button" href="http://www.americangolf.co.uk/agwsd300r">
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <picture>
              <source media="(min-width: 1600px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwcae1094c/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/maymegadeals/home/xxl.jpg" />
              <source media="(min-width: 1170px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwdbf5451c/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/maymegadeals/home/xl.jpg" />
              <source media="(min-width: 992px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwe0cb8f27/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/maymegadeals/home/lg.jpg" />
              <source media="(min-width: 768px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw05278071/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/maymegadeals/home/md.jpg" />
              <source media="(min-width: 480px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw880508b2/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/maymegadeals/home/sm.jpg" />
              <img alt="New Clubs for 2017" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw46b75577/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/maymegadeals/home/xs.jpg" />
            </picture>
            <div className="banner banner-hero-large content-bottom" style={positions}>
              <div className="content no-spacing-left no-spacing-right full-banner">
                <div className="banner-row">
                  <div className="col-sm-12 col-md-6 col-md-offset-6 no-spacing-top product-details">
                    <div className="brand-details-content">
                      <div className="banner-button">
                        <a onclick="_gaq.push(['_trackEvent', 'Banner', 'Click', 'HERO-1']);" className="button" href="http://www.americangolf.co.uk/maymegadeals">Shop now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <picture>
              <source media="(min-width: 1600px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw0f10de10/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/doubletradein/home/xxl.jpg" />
              <source media="(min-width: 1170px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw0942b483/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/doubletradein/home/xl.jpg" />
              <source media="(min-width: 992px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwf25ffbb5/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/doubletradein/home/lg.jpg" />
              <source media="(min-width: 768px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw918673a2/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/doubletradein/home/md.jpg" />
              <source media="(min-width: 480px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw581b56b7/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/doubletradein/home/sm.jpg" />
              <img alt="Double Trade-In" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw2c242cf2/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/doubletradein/home/xs.jpg" />
            </picture>
            <div className="banner banner-hero-large content" style={positions}>
              <div className="content no-spacing-left no-spacing-right no-spacing-top full-banner">
                <div className="banner-grid">
                  <div className="col-sm-12 col-md-6 product-image product-details">
                    {/*Banner Image*/}
                    <div className="banner-image"> <img src="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw0daa53f6/2017/ag/content/homepage/row-1/carousel-images/themes/2017/doubletradein/doublevaluetradein-march2017.png" alt="Double Trade-In Value" /> </div>
                    <div className="product-details-content">
                      {/*CTA*/}
                      <div className="banner-button">
                        <a onclick="_gaq.push(['_trackEvent', 'Banner', 'Click', 'HERO-3']);" className="button button-tertiary videolink" href="https://www.youtube.com/embed/NYRrJyaVgEI"><i className="icon icon-play-icon" style={{fontSize: 20, verticalAlign: 'top'}}>{/* icon */}</i></a>
                        <a onclick="_gaq.push(['_trackEvent', 'Banner', 'Click', 'HERO-3']);" className="button" href="http://www.americangolf.co.uk/best-value-trade-in/best-value-trade-in.html">More info</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <picture>
              <source media="(min-width: 1600px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw64b05fdd/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/greatvalue/home/xxl.jpg" />
              <source media="(min-width: 1170px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw992d034a/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/greatvalue/home/xl.jpg" />
              <source media="(min-width: 992px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwe7906013/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/greatvalue/home/lg.jpg" />
              <source media="(min-width: 768px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwf7d45ae2/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/greatvalue/home/md.jpg" />
              <source media="(min-width: 480px)" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwadcfeb10/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/greatvalue/home/sm.jpg" />
              <img alt="20% Off Your Second Pack Of Balls" srcSet="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dwd8ea0f66/2017/ag/content/homepage/row-1/carousel-backgrounds/themes/2017/greatvalue/home/xs.jpg" />
            </picture>
            <div className="banner banner-hero-large content-dark content" style={positions}>
              <div className="content no-spacing-left no-spacing-right no-spacing-bottom no-spacing-top full-banner">
                <div className="banner-grid row-reverse sm-no-reverse">
                  <div className="col-sm-12 col-md-6 no-spacing-top product-details">
                    {/*Banner Image*/}
                    <div className="banner-image"> <img src="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw604a24ea/2017/ag/content/homepage/row-1/carousel-images/themes/2017/greatvalue/ballspromotiontext.png" alt="20% Off Your Second Pack Of Balls" /> </div>
                    <div className="product-details-content">
                      {/*CTA*/}
                      <div className="banner-button"> <a onclick="_gaq.push(['_trackEvent', 'Banner', 'Click', 'HERO-2']);" className="button" href="http://www.americangolf.co.uk/golf-products?pmid=AGEQ231">More info</a> </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 no-spacing-bottom no-spacing-top product-image">
                    {/*Banner Image*/}
                    <div className="banner-image"> <img src="http://www.americangolf.co.uk/on/demandware.static/-/Sites/default/dw193984c0/2017/ag/content/homepage/row-1/carousel-images/themes/2017/greatvalue/ballspromotion-may.png" alt="20% Off Your Second Pack Of Balls" /> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Carousel>
    );
  }
}