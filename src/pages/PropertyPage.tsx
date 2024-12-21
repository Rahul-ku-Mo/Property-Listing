import PropertyCard from "../components/PropertyCard";
import { useState } from "react";
import { APARTMENTS } from "../constants/APARTMENTS";
import { Property } from "../types";

const PropertyPage = () => {
  const [properties] = useState<Property[]>(APARTMENTS);

  return (
    <div className="app">
      <div className="property-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <nav className="bottom-nav">
        <button className="nav-button active">
          <span className="material-icons">search</span>
          Explore
        </button>
        <button className="nav-button">
          <span className="material-icons">favorite_border</span>
          Wishlist
        </button>
        <button className="nav-button">
          <span className="material-icons">place</span>
          Near me
        </button>
        <button className="nav-button">
          <span className="material-icons">person_outline</span>
          Profile
        </button>
      </nav>
    </div>
  );
};

export default PropertyPage;
