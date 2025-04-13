"use client";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

type SimpleActivityCardProps = {
  title: string;
  description: string;
  time: string; // ISO string
  duration: number; // in minutes
};

const SimpleActivityCard: React.FC<SimpleActivityCardProps> = ({
  title,
  description,
  time,
  duration,
}) => {
  const startTime = new Date(time);
  const endTime = new Date(startTime.getTime() + duration * 60000);

  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: 2, // same as 'md'
        boxShadow: 3,     // subtle elevation
        transition: "all 0.3s",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {description}
        </Typography>

        <Box>
          <Typography variant="caption" color="text.secondary">
            Start: {startTime.toLocaleString()}
          </Typography>
          <br />
          <Typography variant="caption" color="text.secondary">
            End: {endTime.toLocaleString()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SimpleActivityCard;
