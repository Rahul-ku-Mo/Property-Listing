
export type Property = {
  id: number;
  name: string;
  location: string;
  price: string;
  rating: number;
  thumbnailImageUrl: string;
  otherImageUrls: string[];
  position: {
    latitude: number;
    longitude: number;
  };
  views: number;
  dateRange: string;
  mostLiked?: boolean;
};
