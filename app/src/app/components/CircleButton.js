"use client";
import { ListItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/material/styles';

export const CircleButton = ({ children, onClick, selected }) => {
  const theme = useTheme();
  const CircleButton = styled(ListItem)(({ theme, selected }) => ({
    borderRadius: '50%',
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: selected ? theme.palette.background.default : theme.palette.background.paper,
    color: selected ? theme.palette.text.button : theme.palette.text.primary,
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: theme.palette.background.button,
      color: theme.palette.text.button,
    },
  }));  

  return (
    <CircleButton onClick={onClick} selected={selected}>
      {children}
    </CircleButton>
  )
}