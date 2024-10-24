"use client"
import { useState } from "react";

const useRating = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitting, setSubmitting] = useState(false);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmitting = () => {
    if (selectedRating !== null) {
      setSubmitting(true);
    }
  };

  return {
    selectedRating,
    isSubmitting,
    handleRatingClick,
    handleSubmitting,
  };
};

export default useRating;