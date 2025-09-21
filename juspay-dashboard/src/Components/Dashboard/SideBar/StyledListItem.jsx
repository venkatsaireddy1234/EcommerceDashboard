import { ListItem, styled } from "@mui/material";

const StyledListItem = styled(ListItem)(({ theme, active }) => ({
  borderRadius: 8,
  marginBottom: 2,
  padding: "4px 8px",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  ...(active && {
    backgroundColor: theme.palette.mode === "light" ? "#f0f0f0" : "#333",
    "&:hover": {
      backgroundColor: theme.palette.mode === "light" ? "#e0e0e0" : "#222",
    },
  }),
  "& .MuiListItemIcon-root": {
    minWidth: "25px",
  },
}));

export default StyledListItem;
