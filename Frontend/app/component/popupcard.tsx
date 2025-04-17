'use client';

import { Box, Typography, Chip, Link as MuiLink, Divider, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkIcon from '@mui/icons-material/Link';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';

type ActivityProps = {
  title: string;
  description: string;
  phone: string;
  link: string;
  startTime: string;
  duration: string;
  images:string[];
  category: string;
};

const PopupCard = ({
  title,
  description,
  phone,
  link,
  startTime,
  duration,
  images,
  category,
}: ActivityProps) => {
  console.log(images);
  
  return (
    <Box sx={{ width: 280, p: 2, borderRadius: 2, boxShadow: 3, bgcolor: 'background.paper' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

      <Chip label={category} color="primary" size="small" sx={{ mb: 1 }} />

      <Carousel
      navButtonsAlwaysVisible
      autoPlay={false}
      indicators={true}
      sx={{ mb: 2 }}
    >

      {images.map((img, i) => (
        <Box
          key={i}
          sx={{
            height: 200,
            width: '100%',
            position: 'relative',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Image
            src={img}
            alt={`activity-image-${i}`}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </Box>
      ))}
     
    </Carousel>

      <Typography variant="body2" sx={{ mb: 1 }}>
        {description}
      </Typography>

      <Divider sx={{ my: 1 }} />
      
      <Box  alignItems="center" gap={1}>
      <Typography variant="body2">
         startTime:{startTime}
        </Typography>
        <AccessTimeIcon fontSize="small" />
        <Typography variant="body2">
          {startTime} · {duration}
        </Typography>
      </Box>

      {phone && (
        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <PhoneIcon fontSize="small" />
          <MuiLink href={`tel:${phone}`} underline="hover">
            {phone}
          </MuiLink>
        </Box>
      )}

      {link && (
        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <LinkIcon fontSize="small" />
          <MuiLink href={link} target="_blank" rel="noopener" underline="hover">
            Visit Link: {link}
          </MuiLink>
        </Box>
      )}
    </Box>
  );
};

export default PopupCard;
