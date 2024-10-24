"use client";
import { useState } from "react";
import { Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CardSubmitting } from './CardSubmitting';
import { CardRating } from './CardRating';
import useRating from "./hooks/useRating";

export const CardForm = () => {
  const theme = useTheme();
  const {selectedRating, isSubmitting, handleRatingClick, handleSubmitting } = useRating()
  
  const style = {
    width: { md: 400 },
    borderRadius: '12px',
    backgroundColor: theme.palette.background.card,
    padding: 4
  }

  return (
    <Card sx={style} >
      {!isSubmitting ? (
      <CardRating rating={selectedRating} handleOnClick={handleRatingClick} handleSubmitting={handleSubmitting}/>
    ) : (
      <CardSubmitting rating={selectedRating} />
    )}
    </Card>
  );
};