import React from "react";

import "./BusinessList.css";

// Function that returns information about each business individually
export const BusinessList = (props) => {
  return (
    <div className="Business">
      <div className="image-container">
        <a href={props.business.url}>
          <img src={props.business.imageSrc} alt="" />
        </a>
      </div>
      <h2>{props.business.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{props.business.address}</p>
          <p>{props.business.city}</p>
          <p>{`${props.business.state} ${props.business.zipCode}`}</p>
        </div>
        <div className="Business-reviews">
          <h3>{props.business.category}</h3>
          <h3 className="rating">{`${props.business.rating} stars`}</h3>
          <p>{`${props.business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};
