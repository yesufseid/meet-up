"use client"
import L from "leaflet";
L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      });

const icons = {
    sport: L.icon({
      iconUrl: "https://chart.googleapis.com/chart?chst=d_map_pin_icon&chld=running|FF5722", // orange
      iconSize: [30, 42],
      iconAnchor: [15, 42],
    }),
    food: L.icon({
      iconUrl: "https://chart.googleapis.com/chart?chst=d_map_pin_icon&chld=restaurant|4CAF50", // green
      iconSize: [30, 42],
      iconAnchor: [15, 42],
    }),
    music: L.icon({
      iconUrl: "https://chart.googleapis.com/chart?chst=d_map_pin_icon&chld=music|3F51B5", // blue
      iconSize: [30, 42],
      iconAnchor: [15, 42],
    }),
    default: L.icon({
      iconUrl: "https://chart.googleapis.com/chart?chst=d_map_pin_icon&chld=activity|9E9E9E", // grey
      iconSize: [40, 52],
      iconAnchor: [25, 52],
    }),
  };

  
  const getIconByCategory = (category: string) => {
    return icons[category as keyof typeof icons] || icons.default;
  };
  

  export default getIconByCategory