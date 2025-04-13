"use client";
import "leaflet/dist/leaflet.css";
import React, { useState,

} from "react";
import { SelectChangeEvent } from "@mui/material";
import ActivityPopup from "./Popup";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import {
  Box,
} from "@mui/material";
import L from "leaflet";

export default function PollutionMap(){
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [popupData, setPopupData] = useState({
    type: "",
    description: "",
  });

  // Fix Leaflet marker icon issue

      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      });
    
  const MapClickHandler = () => {
    useMapEvents({
      click: (event) => {
        const { lat, lng } = event.latlng;
        setSelectedLocation({ lat, lng });
      },
    });
    return null;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPopupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setPopupData((prev) => ({
      ...prev,
      [name || "type"]: value,
    }));
  };

 

  // const handleSubmit = () => {
  //   if (popupData.type && popupData.description && selectedLocation) {
  //     const draft = generateRandomString();
  //       window.localStorage.setItem(
  //         draft,
  //         JSON.stringify({
  //           ...popupData,
  //           ...selectedLocation,
  //         })
  //       );
  //       redirect(`/createReport/${draft}`);
  //     }
  
  // };


  return (
    <Box sx={{ width: "100%", height: "600px" }}>
      <MapContainer
        center={[9.03, 38.75]} // Default center (e.g., Addis Ababa)
        zoom={12}
        style={{ height: "100%", width: "100%", zIndex: 1 }}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="GPS Map">
            <TileLayer
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              attribution="Map data: &copy; OpenTopoMap & contributors"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Satellite">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="&copy; Esri, DigitalGlobe, GeoEye, Earthstar Geographics, and the GIS User Community"
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        <MapClickHandler />

        {selectedLocation && (
          <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
            <div className="h-[500px] overflow-auto">
            <Popup>
            <ActivityPopup lat={selectedLocation.lat} lng={selectedLocation.lng}   />
            </Popup>
            </div>
          </Marker>
        )}
      </MapContainer>
    </Box>
  );
};


