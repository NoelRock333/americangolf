import React from 'react';

export default class ImproveYourGame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-section">
        <div className="blue-stripe-banner banner-tips">
          <div className="blue-stripe-banner-inner banner-tips-inner">
            <div className="banner-tips-text">
              Improve your game with tips from our pros
            </div>
            <div className="banner-tips-button">
              <a className="button" href="http://www.americangolf.co.uk/pro-golf-advice">Read more</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}