"use client";
import "leaflet/dist/leaflet.css";
import React, { useState,

} from "react";
import { SelectChangeEvent } from "@mui/material";
import ActivityPopup from "./Popup";
import PopupCard from "./popupcard";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";

type activityProps={
  id:string
  title:string
  description:string
  phone:string,
  link:string,
  startTime:string,
  duration:string,
  expireTime:string,
  location_lat:number,
  location_lng:number
  images:[] 

}
export default function PollutionMap(){
   const dispatch = useDispatch<AppDispatch>();
  const {activity,loading,error} = useSelector((state: RootState) => state.activity);
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
      const icons ={
          sport:  L.divIcon({
            html: `<div style="font-size: 24px;">🏃‍♂️</div>`,
            className: '',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
          }),
          food:L.divIcon({
            html: `<div style="font-size: 24px;">🏃‍♂️</div>`,
            className: '',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
          }),
          music:L.divIcon({
            html: `<div style="font-size: 24px;">🏃‍♂️</div>`,
            className: '',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
          }),
          default:L.divIcon({
            html: `<div style="font-size: 24px;">🏃‍♂️</div>`,
            className: '',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
          }),
        };
        const getIconByCategory = (category: string) => {
          return icons[category as keyof typeof icons] || icons.default;
        }; 
  const MapClickHandler = () => {
    const map=useMapEvents({
      click: (event) => {
        const { lat, lng } = event.latlng;
        setSelectedLocation({ lat, lng });
      },
      moveend: () => {
        const zoom = map.getZoom();
        if (zoom === 16) {
          const bounds = map.getBounds();
          const sw = bounds.getSouthWest(); // bottom left
          const ne = bounds.getNorthEast(); // top right
          dispatch({ type: "activity/fetchActivity",payload:{nelat:ne.lat,nelng:ne.lng,swlat:sw.lat,swlng:sw.lng}});
        }
      },
      zoomend: () => {
        const zoom = map.getZoom();
        if (zoom === 16) {
          const bounds = map.getBounds();
          const sw = bounds.getSouthWest();
          const ne = bounds.getNorthEast();
          dispatch({ type: "activity/fetchActivity",payload:{nelat:ne.lat,nelng:ne.lng,swlat:sw.lat,swlng:sw.lng}});
        }
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



  return (
    <Box sx={{ width: "100%", height: "610px" }}>
      <MapContainer
        center={[9.03, 38.75]} // Default center (e.g., Addis Ababa)
        zoom={15}
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
        {activity&& activity.map((ac)=>{
          return  (
            <Marker key={ac.id} position={[ac.location_lat, ac.location_lng]}   icon={getIconByCategory(ac.category)}  >
              <div className="h-[500px] overflow-auto">
              <Popup>
              <PopupCard  title={ac.title} description={ac.description}
                phone={ac.phone}
                link={ac.link}
                startTime={ac.time}
                duration={ac.duration}
                images={ac.images}
                category={ac.category} />
              </Popup>
              </div>
            </Marker>
          )
        })}
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


