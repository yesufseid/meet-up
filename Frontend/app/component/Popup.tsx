"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Input,
} from "@mui/material";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";

import { redirect } from "next/navigation";


const ActivityPopup = ({lat,lng}:{lat:number,lng:number}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {activiy,loading,error} = useSelector((state: RootState) => state.activity);
  const [formData, setFormData] = useState({
    category: "",
    title:"",
    description: "",
    phone: "",
    link: "",
    time:"",
    duration:2,
    place_name:"",
    images: [] 
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e:any) => {
    // if (e.target.files) {
    //   setFormData((prev) => ({
    //     ...prev,
    //     images: Array.from(e.target.files),
    //   }));
    // }
  };

  const handleSubmit =async() => {
      dispatch({ type: "activity/create",payload:{...formData,location_lat:lat,location_lng:lng}});
  };

  return (
    <Box
      sx={{
        padding: 2,
        width: 300,
        maxHeight: 400,
        overflowY: "auto",
        scrollbarWidth: "thin", // Firefox
        "&::-webkit-scrollbar": { width: "6px" }, // Chrome
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ccc",
          borderRadius: "4px",
        },
      }}
    >
      <Typography variant="h6">Post Activity</Typography>
      <TextField name="title" label="title**"  required={true} fullWidth onChange={handleChange} />
      <TextField name="category" label="category**"placeholder="sport,study,party,..."  required={true} fullWidth onChange={handleChange} />
      <TextField
        name="description"
        label="Description"
        multiline
        rows={3}
        fullWidth
        sx={{ mt: 2 }}
        onChange={handleChange}
      />
      <TextField
        name="phone"
        label="Phone"
        fullWidth
        sx={{ mt: 2 }}
        onChange={handleChange}
      />
      <TextField
        name="link"
        label="Link"
        fullWidth
        sx={{ mt: 2 }}
        onChange={handleChange}
      />
      <TextField
        name="time"
        type="datetime-local"
        label="Start Time **"
        required={true}
        fullWidth
        InputLabelProps={{ shrink: true }}
        sx={{ mt: 2 }}
        onChange={handleChange}
      />
      <TextField
        name="duration"
        label="Duration (hr)"
        required={true}
        type="number"
        fullWidth
        sx={{ mt: 2 }}
        onChange={handleChange}
      />
    <TextField name="place_name" label="place_name *"    sx={{ mt: 2 }} required={true} fullWidth onChange={handleChange} />
     
      <Input
        type="file"
        inputProps={{ multiple: true }}
        sx={{ mt: 2 }}
        onChange={handleImageChange}
      />

      {formData.images.length > 0 && (
        <Box sx={{ display: "flex", gap: 1, overflowX: "auto", mt: 2 }}>
          {formData.images.map((img, idx) => (
            <Image
              key={idx}
              src={URL.createObjectURL(img)}
              alt="Preview"
              width={80}
              height={80}
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
          ))}
        </Box>
      )}

      <Button disabled={formData.category==="" || formData.duration===2|| formData.time===""|| formData.place_name==="" || formData.title===""} 
      variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
        {loading?"posting...":error?"try-again":"save"}
      </Button>
    </Box>
  );
};

export default ActivityPopup;
