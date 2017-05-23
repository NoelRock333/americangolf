import React from 'react';

const GenderFilter = () => (
  <div className="refinement gender">
    <h3 className="toggle refinementhead">
      Gender
    </h3>
    <div className="toggle-content refinementvalues">
      <ul>
        <li>
          <a href="http://www.americangolf.co.uk/golf-products?prefn1=gender&prefv1=Male" title="Refine by: Male" className="listingchange"><span className="refinement-name">Male</span>
            <span className="refinement-count">(1,221)</span></a>
        </li>
        <li>
          <a href="http://www.americangolf.co.uk/golf-products?prefn1=gender&prefv1=Female" title="Refine by: Female" className="listingchange"><span className="refinement-name">Female</span>
            <span className="refinement-count">(461)</span></a>
        </li>
        <li>
          <a href="http://www.americangolf.co.uk/golf-products?prefn1=gender&prefv1=Junior" title="Refine by: Junior" className="listingchange"><span className="refinement-name">Junior</span>
            <span className="refinement-count">(92)</span></a>
        </li>
        <li>
          <a href="http://www.americangolf.co.uk/golf-products?prefn1=gender&prefv1=Unisex" title="Refine by: Unisex" className="listingchange"><span className="refinement-name">Unisex</span>
            <span className="refinement-count">(758)</span></a>
        </li>
        <li>
          <a href="http://www.americangolf.co.uk/golf-products?prefn1=gender&prefv1=Not%20Applicable" title="Refine by: Not Applicable" className="listingchange"><span className="refinement-name">Not Applicable</span>
            <span className="refinement-count">(3)</span></a>
        </li>
      </ul>
    </div>
  </div>
);

export default GenderFilter;
