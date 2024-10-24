"use client";
import { Box, CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const CardSubmitting = ({ rating }) => {
  const theme = useTheme();

  return (
    <Box >
      <CardContent sx={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 2
      }}>
        <img
          src="/illustration-thank-you.svg"
          alt="Illustration thank you"
          style={{
            width: 160,
            height: "auto",
            objectFit: "cover"
          }}/>
        <Typography variant="body1" component="p" sx={{ 
          borderRadius: 10,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.secondary,
          paddingX: 2,
          paddingY: 1
          }}>
          You selected {rating} out of 5
        </Typography>
        <Typography variant="h5" component="h5" sx={{color: theme.palette.text.title}}>Thank you!</Typography>
        <Typography variant="body1" component="p" sx={{ textAlign: 'center' }} >
          We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in.
        </Typography>
      </CardContent>
    </Box>
  );
};