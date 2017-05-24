import React from 'react';
import Products from '../Products';

import Header from '../shared/Header';
import Filters from '../Filters';
import Carousel from './Carousel';
import TopCategories from './TopCategories';
import FreeSection from './FreeSection';
import NikeClothing from './NikeClothing';
import MegaDeals from './MegaDeals';
import GreatValueOffers from './GreatValueOffers';
import PopularBrands from './PopularBrands';
import LatestGreatestGear from './LatestGreatestGear';
import ImproveYourGame from './ImproveYourGame';
import ImproveYourGame2 from './ImproveYourGame2';
import GolfClubs from './GolfClubs';
import Footer from '../shared/Footer';

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
          <div className="row">
            <Carousel />
          </div>
          <div id="main" role="main" className="main no-spacing-top no-spacing-bottom">
            <div id="primary" className="primary-content">
              <div className="homepage">
                <div className="home-slot home-slot-2">
                  <div className="html-slot-container">
                    <TopCategories />
                    <FreeSection />
                    <NikeClothing />
                    <MegaDeals />
                    <GreatValueOffers />
                    <PopularBrands />
                    <LatestGreatestGear />
                    <ImproveYourGame />
                    <ImproveYourGame2 />
                    <GolfClubs />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="row">
          <Footer />
        </div>
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

