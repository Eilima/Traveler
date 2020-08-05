import React from "react";
import { BusinessList } from "../BusinessList/BusinessList";

export class YelpResults extends React.Component {
  render() {
    return (
      <div>
        <p>Yelp Results</p>
        <div>
          {/* Map trough the businesses array from the api call and pass them to BusinessList */}
          {this.props.businesses.map((business) => {
            return <BusinessList business={business} key={business.id} />;
          })}
        </div>
      </div>
    );
  }
}
