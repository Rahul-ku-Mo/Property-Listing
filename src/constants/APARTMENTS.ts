import apt1 from "/assets/images/apt-1.jpeg";
import apt2 from "/assets/images/apt-2.jpeg";
import apt3 from "/assets/images/apt-3.jpeg";
import apt4 from "/assets/images/apt-4.jpeg";

export const APARTMENTS = [
  {
    id: 1,
    name: "Sushant Lok 2",
    location: "Gurgaon",
    price: "1.5 Cr",
    rating: 4.1,
    thumbnailImageUrl: apt1,
    otherImageUrls: [apt1, apt2, apt3, apt4],
    views: 15400,
    dateRange: "Apr 5 - 10",
    address: "Sushant Lok 2, Gurgaon, Haryana 122018, India",
    position: {
      latitude: 28.4726,
      longitude: 77.0907,
    },
    amenities: ["2 BHK", "3 Bathrooms", "Parking"],
    nearby: {
      hospitals: 3, // Updated nearby locations
      gasStations: 5,
      schools: 4,
    },
  },
  {
    id: 2,
    name: "Rainbow Heights",
    location: "HSR",
    price: "2.0 Cr",
    rating: 1.2,
    thumbnailImageUrl: apt2,
    otherImageUrls: [apt2, apt1, apt3, apt4],

    views: 13100,
    dateRange: "Mar 5 - 10",
    address: "Rainbow Heights, HSR Layout, Bangalore 560102, India",
    position: {
      latitude: 12.9343,
      longitude: 77.6391,
    },
    amenities: ["3 BHK", "2 Bathrooms", "Parking"],
    nearby: {
      hospitals: 2,
      gasStations: 6,
      schools: 3,
    },
  },
  {
    id: 3,
    name: "Walden",
    location: "Columbia, US",
    price: "3.2 Cr",
    rating: 4.7,
    thumbnailImageUrl: apt3,
    otherImageUrls: [apt3, apt2, apt1, apt4],
    mostLiked: true,
    views: 10110,
    dateRange: "Oct 15 - 20",
    address: "Walden, Columbia, New York 10001, USA",
    position: {
      latitude: 40.7128,
      longitude: -74.006,
    },
    amenities: ["4 BHK", "3 Bathrooms", "Parking", "Pool"],
    nearby: {
      hospitals: 5,
      gasStations: 8,
      schools: 6,
    },
  },
  {
    id: 4,
    name: "PoggiRoma",
    location: "Italy",
    price: "5.0 Cr",
    rating: 5.0,
    thumbnailImageUrl: apt4,
    otherImageUrls: [apt4, apt2, apt3, apt1],

    views: 10230,
    dateRange: "Sep 15 - 20",
    address: "PoggiRoma, Via Roma 123, Rome 00184, Italy",
    position: {
      latitude: 41.9028,
      longitude: 12.4964,
    },
    amenities: ["5 BHK", "4 Bathrooms", "Parking", "Pool", "Garden"],
    nearby: {
      hospitals: 3,
      gasStations: 4,
      schools: 2,
    },
  },
];
