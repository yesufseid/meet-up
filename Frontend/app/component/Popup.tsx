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



const ActivityPopup = ({lat,lng}:{lat:number,lng:number}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    phone: "",
    link: "",
    startTime: "",
    duration: "",
    expireTime: "",
    images: [] as File[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e:any) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        images: Array.from(e.target.files),
      }));
    }
  };
  const generateRandomString = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 20; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };
  const handleSubmit = () => {
    const draft = generateRandomString();
             window.localStorage.setItem(
               draft,
               JSON.stringify({
                 ...formData,
                 lng,
                 lat
               })
             );
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
      <TextField name="title" label="Title" fullWidth onChange={handleChange} />
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
        name="startTime"
        type="datetime-local"
        label="Start Time"
        fullWidth
        InputLabelProps={{ shrink: true }}
        sx={{ mt: 2 }}
        onChange={handleChange}
      />
      <TextField
        name="duration"
        label="Duration (min)"
        type="number"
        fullWidth
        sx={{ mt: 2 }}
        onChange={handleChange}
      />
      <TextField
        name="expireTime"
        type="datetime-local"
        label="Expire Time"
        fullWidth
        InputLabelProps={{ shrink: true }}
        sx={{ mt: 2 }}
        onChange={handleChange}
      />
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

      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
        Save
      </Button>
    </Box>
  );
};

export default ActivityPopup;
