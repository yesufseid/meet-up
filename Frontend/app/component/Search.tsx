"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  Autocomplete,
} from "@mui/material";

const campuses = [
  "Addis Ababa STU",
  "AAU Main Campus",
  "Adama Science",
  "Bahir Dar University",
  "Mekelle University",
];

const Search = () => {
  const [selectedCampus, setSelectedCampus] = useState<string | null>(
    "Addis Ababa STU"
  );

  return (
    
        <Box sx={{ width: 700 }}>
          <Autocomplete
            freeSolo
            options={campuses}
            value={selectedCampus}
            onChange={(event, newValue) => setSelectedCampus(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Search campus..." size="small" />
            )}
          />
        </Box>
  );
};

export default Search;
