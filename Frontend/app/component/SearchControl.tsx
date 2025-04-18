"use client"
import { useEffect } from 'react';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import 'leaflet-geosearch/dist/geosearch.css';
import L from 'leaflet'; // ✅ Import leaflet explicitly

const SearchControl = () => {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl =GeoSearchControl({
      provider,
      style: 'bar',
      showMarker: true,
      showPopup: true,
      marker: {
        icon: new L.Icon.Default(),
        draggable: false,
      },
    });

    // Add type assertion to avoid TS error
    map.addControl(searchControl as unknown as L.Control);
    
    return () => {
      map.removeControl(searchControl as unknown as L.Control);
    };
  }, [map]);

  return null;
};

export default SearchControl;
