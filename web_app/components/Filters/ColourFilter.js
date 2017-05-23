import React from 'react';

const Color = ({id, img}) => (
  <li className="swatch swatch-beige">
    <a id={id} href={img} title="Beige" className="listingchange swatchanchor"><span className="swatchanchor-inner">Beige</span></a>
  </li>
);

const ColourFilter = () => (
  <div className="refinement refinementColour">
    <h3 className="toggle refinementhead expanded">
      Colour
    </h3>
    <div className="toggle-content refinementvalues expanded">
      <ul className="swatches swatches-color Colour">

        <li className="swatch swatch-black">
          <a id="swatch-black" href="http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Black" title="Black" className="listingchange swatchanchor"><span className="swatchanchor-inner">Black</span></a>
        </li>
        <li className="swatch swatch-blue">
          <a id="swatch-blue" href="http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Blue" title="Blue" className="listingchange swatchanchor"><span className="swatchanchor-inner">Blue</span></a>
        </li>
        <li className="swatch swatch-brown">
          <a id="swatch-brown" href="http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Brown" title="Brown" className="listingchange swatchanchor"><span className="swatchanchor-inner">Brown</span></a>
        </li>
        <li className="swatch swatch-gold">
          <a id="swatch-gold" href="http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Gold" title="Gold" className="listingchange swatchanchor"><span className="swatchanchor-inner">Gold</span></a>
        </li>
        <li className="swatch swatch-green">
          <a id="swatch-green" href="http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Green" title="Green" className="listingchange swatchanchor"><span className="swatchanchor-inner">Green</span></a>
        </li>
        <li className="swatch swatch-grey">
          <a id="swatch-grey" href="http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Grey" title="Grey" className="listingchange swatchanchor"><span className="swatchanchor-inner">Grey</span></a>
        </li>
        <li className="swatch swatch-multi">
          <a id="swatch-multi" href="http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Multi" title="Multi" className="listingchange swatchanchor"><span className="swatchanchor-inner">Multi</span></a>
        </li>
        <li className="swatch swatch-navy">
          <a id="swatch-navy" href="http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Navy" title="Navy" className="listingchange swatchanchor"><span className="swatchanchor-inner">Navy</span></a>
        </li>
        <li className="swatch swatch-orange">
          <a id="swatch-orange" href="http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Orange" title="Orange" className="listingchange swatchanchor"><span className="swatchanchor-inner">Orange</span></a>
        </li>
        <li className="swatch swatch-pink">
          <a id="swatch-pink" href="http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Pink" title="Pink" className="listingchange swatchanchor"><span className="swatchanchor-inner">Pink</span></a>
        </li>
        <li className="swatch swatch-purple">
          <a id="swatch-purple" href="http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Purple" title="Purple" className="listingchange swatchanchor"><span className="swatchanchor-inner">Purple</span></a>
        </li>
        <li className="swatch swatch-red">
          <a id="swatch-red" href="http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Red" title="Red" className="listingchange swatchanchor"><span className="swatchanchor-inner">Red</span></a>
        </li>
        <li className="swatch swatch-silver">
          <a id="swatch-silver" href="http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Silver" title="Silver" className="listingchange swatchanchor"><span className="swatchanchor-inner">Silver</span></a>
        </li>
        <li className="swatch swatch-white">
          <a id="swatch-white" href="http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=White" title="White" className="listingchange swatchanchor"><span className="swatchanchor-inner">White</span></a>
        </li>
        <li className="swatch swatch-yellow">
          <a id="swatch-yellow" href="http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Yellow" title="Yellow" className="listingchange swatchanchor"><span className="swatchanchor-inner">Yellow</span></a>
        </li>
        <li className="swatch swatch-cream">
          <a id="swatch-cream" href="http://www.americangolf.co.uk/golf-products?prefn1=refinementColour&prefv1=Cream" title="Cream" className="listingchange swatchanchor"><span className="swatchanchor-inner">Cream</span></a>
        </li>
      </ul>
    </div>
  </div>
);

export default ColourFilter;
