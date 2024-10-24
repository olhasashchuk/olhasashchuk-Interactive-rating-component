"use client";
import { Button} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/material/styles';

export const ColorButton = ({title, onClick, disabled}) => {
  const theme = useTheme();
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.button,
    borderRadius: '26px',
    backgroundColor: theme.palette.background.button,
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
    letterSpacing: '4px',
    fontWeight: 600,
    padding: { xs: '8px', md: '12px' },
    fontSize: { xs: '0.875rem', md: '1rem' }
  }));

  return (
    <ColorButton variant="contained" fullWidth onClick={onClick} disabled={disabled}>
      {title}
    </ColorButton>
  )
}