import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

interface PropertyLocationOnMapProps {
  longitude: number;
  latitude: number;
  name: string;
  thumbnailImageUrl: string;
}
export const PropertyLocationOnMap = ({
  longitude,
  latitude,
  name,
  thumbnailImageUrl,
}: PropertyLocationOnMapProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        center: [longitude, latitude],
        zoom: 9,
      });

      new mapboxgl.Marker({ color: "#252b5c" })
        .setLngLat([longitude, latitude])
        .addTo(mapRef.current);
    }
  }, [latitude, longitude, thumbnailImageUrl, name]);

  return (
    <>
      <div
        style={{
          minHeight: "256px",
          minWidth: "350px",
          width: "100%",
          height: "100%",
        }}
        ref={mapContainerRef}
        className="map-container"
      />
    </>
  );
};
