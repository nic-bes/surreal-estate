import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import listingPlaceholder from "../styles/listing-placeholder.jpg";

import StyledPropertyCard from "../styles/styled-property-card";

const PropertyCard = (props) => {
  const { id, title, type, bathrooms, bedrooms, price, city, email } = props;
  const bathroomTitle = `${bathrooms} ${
    bathrooms === 1 ? "bathroom" : "bathrooms"
  }`;
  const bedroomTitle = `${bedrooms} ${bedrooms === 1 ? "bedroom" : "bedrooms"}`;

  return (
    <StyledPropertyCard key={id}>
      <img src={listingPlaceholder} alt="placeholder" />
      <span data-testid="listing-title-test">
        <b>{title}</b>
      </span>
      <br />
      <span data-testid="listing-type-test">
        <i>{type}</i>
      </span>{" "}
      -{" "}
      <span data-testid="listing-city-test">
        <i>{city}</i>
      </span>
      <br />
      <span data-testid="listing-bathrooms-test" title={bathroomTitle}>
        <FontAwesomeIcon icon={faBath} /> {bathrooms}
      </span>
      {"  "}
      <span data-testid="listing-bedrooms-test" title={bedroomTitle}>
        <FontAwesomeIcon icon={faBed} /> {bedrooms}
      </span>
      <br />
      <span data-testid="listing-price-test">£{price.toLocaleString()}</span>
      <br />
      <a href={`mailto:${email}`} data-testid="listing-email-test">
        <button type="button">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </button>
      </a>
    </StyledPropertyCard>
  );
};

PropertyCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;