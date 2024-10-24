"use client";
import { useTheme } from "@mui/material/styles";
import { Container, Box } from "@mui/material";
import { CardForm } from "./components/CardForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: {xs: '100%', md: '880px'},
  bgcolor: "background.paper",
  p: 4,
  minHeight: { xs: '80vh', md: '600px' },
  overflow: 'hidden',
  display: "flex",                
  alignItems: "center",
  justifyContent: "center",                
};


export const Home = () => {
  const theme = useTheme()
  return (
    <Box component="main"
    sx={{
      backgroundColor: {xs: theme.palette.background.paper, md: theme.palette.background.default}, // Фон для основного стиля
      minHeight: '100vh',
      padding: { xs: 2, md: 4 },
    }}> 
      <Container>
        <Box sx={style}>
          <CardForm />
        </Box>
      </Container>
    </Box>
  );
}

export default Home;