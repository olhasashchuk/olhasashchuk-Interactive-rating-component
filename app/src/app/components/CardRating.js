"use client";
import { CardContent, Typography, List, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ColorButton } from './ColorButton';
import { CircleButton } from './CircleButton';

const ratingArray = [1, 2, 3, 4, 5];

export const CardRating = ({ rating, handleOnClick, handleSubmitting }) => {
  const theme = useTheme();
  
  return (
    <>
      <Box sx={{
        borderRadius: '50%',
        width: 40,
        height: 40,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        marginBottom: 4 
      }}>
      <img
          src="/icon-star.svg"
          alt="Icon Star"
          style={{
            width: { xs: 20, md: 40 },
            height: "auto",
            objectFit: "cover",
            position: 'absolute',
            top: 10,
            left: 10
          }}/>
      </Box>
      <CardContent sx={{ padding: 0 }}>
        <Typography variant="h5" component="h5" sx={{color: theme.palette.text.title, paddingBottom: 2 }}>How did we do?</Typography>
        <Typography variant="body1" component="p">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </Typography>
      </CardContent>
      <List sx={{
          display: "flex",
          flexDirection: "row",                
          alignItems: "center",
          justifyContent: "center",
          paddingY: 4,
          gap: { xs: 2, md: 4 }
        }}>
          {ratingArray.map((item, index) => (
              <CircleButton
                key={`rating-${index}`} 
                onClick={()=>handleOnClick(item)}
                selected={rating === item}
              >
                <Typography variant="body2">
                  {item}
                </Typography>
              </CircleButton>
          )
        )}
      </List>
      <ColorButton title ="Submit" onClick={handleSubmitting} disabled={!rating} />
    </>
  );
};