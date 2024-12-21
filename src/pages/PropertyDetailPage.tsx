import { useParams, Link } from "react-router";

import { MapPin } from "lucide-react";

import { PropertyLocationOnMap } from "../components/PropertyLocationOnMap";

import { APARTMENTS } from "../constants/APARTMENTS";

import styles from "../components/ui/PropertyDetail.module.css";
import { useRef } from "react";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const apartment = APARTMENTS.find((apt) => apt.id === Number(id));
  const mapRef = useRef<HTMLDivElement>(null);

  if (!apartment) {
    return <div>Property not found</div>;
  }

  return (
    <div className={styles.container}>
      <img
        src={apartment.thumbnailImageUrl}
        alt={`${apartment.name} exterior view`}
        className={styles.propertyImage}
      />
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1 className={styles.propertyName}>{apartment.name}</h1>
          <div className={styles.propertyLocation}>
            <MapPin size={16} />
            <span>{apartment.location}</span>
          </div>
        </div>
        <div className={styles.priceSection}>
          <div className={styles.price}>{apartment.price}</div>
          <div className={styles.emiText}>EMI Available</div>
        </div>
      </div>

      <div className={styles.locationSection}>
        <h2 className={styles.locationTitle}>Location</h2>
        <div className={styles.locationDetail}>
          <div
            className={styles.locationIconWrapper}
            onClick={() => {
              if (mapRef.current) {
                mapRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <MapPin size={24} />
          </div>
          <p className={styles.address}>{apartment.address}</p>
        </div>
      </div>

      <div className={styles.mapSection}>
        <div className={styles.mapContainer} ref={mapRef}>
          <PropertyLocationOnMap
            longitude={apartment.position.longitude}
            latitude={apartment.position.latitude}
            name={apartment.name}
            thumbnailImageUrl={apartment.thumbnailImageUrl}
          />
        </div>
        <Link
          to={`https://www.google.com/maps/search/?api=1&query=${apartment.position.latitude},${apartment.position.longitude}`}
          className={styles.viewMapButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Map
        </Link>
      </div>

      <div className={styles.nearbyInfo}>
        {Object.entries(apartment.nearby).map(([key, value]) => (
          <div className={styles.nearbyItem} key={key}>
            <span className={styles.nearbyValue}>{value}</span>
            <span className={styles.nearbyIcon}>{key}</span>
          </div>
        ))}
      </div>

      <div className={styles.propertyAmenities}>
        <h2 className={styles.amenitiesTitle}>Property Ammenties</h2>
        <div className={styles.amenitiesTags}>
          <span className={`${styles.amenityTag} ${styles.activeTag}`}>
            House
          </span>
          <span className={`${styles.amenityTag} ${styles.inactiveTag}`}>
            Apartment
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
