// components/PropertyCard.tsx
import { EyeIcon, Heart } from "lucide-react";
import { Property } from "../types";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { useWishList } from "../context/WishListContext";
// Import Swiper styles
import "swiper/css";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishList();

  const navigate = useNavigate();
  const getRatingColor = (rating: number) => {
    if (rating >= 5) return "rating-high";
    if (rating >= 3) return "rating-medium";
    return "rating-low";
  };

  return (
    <div
      className="property-card"
      onClick={() => navigate(`/property/${property.id}`)}
    >
      <div className="image-container">
        {property.mostLiked && (
          <div className="most-liked-badge">
            <span>Most Liked</span>
          </div>
        )}

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => {}}
          onSwiper={() => {}}
        >
          {property.otherImageUrls.map((url) => {
            return (
              <SwiperSlide key={url}>
                <img src={url} alt={property.name} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          className="like-button"
          onClick={(e) => {
            e.stopPropagation();

            if (isInWishlist(property.id)) {
              removeFromWishlist(property.id);
            } else {
              addToWishlist(property.id);
            }
          }}
        >
          {isInWishlist(property.id) ? (
            <Heart size={24} fill="red" stroke="red" />
          ) : (
            <Heart size={24} stroke="white" fill="grey" />
          )}
        </div>
        <div className="property-stats">
          <div className="views">
            <EyeIcon size={12} />
            {property.views.toLocaleString()}
          </div>
          <div className={`rating ${getRatingColor(property.rating)}`}>
            <span className="material-icons">star</span> {property.rating}
          </div>
        </div>
      </div>
      <div className="property-info">
        <h3>
          {property.name}, {property.location}
        </h3>
        <p className="date-range">{property.dateRange}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
