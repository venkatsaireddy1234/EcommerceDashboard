import { List, ListItemText, Box } from "@mui/material";
import StyledListItem from "./StyledListItem";

const SidebarFavorites = ({ handleItemClick, typographyStyles, theme }) => (
  <List>
    {["Overview", "Projects"].map((fav) => (
      <StyledListItem
        button
        key={fav}
        onClick={() => handleItemClick(null, fav)}
      >
        <Box
          sx={{
            width: 4,
            height: 4,
            bgcolor: theme.palette.text.secondary,
            borderRadius: "50%",
            mr: 2,
          }}
        />
        <ListItemText
          primary={fav}
          sx={{
            "& .MuiTypography-root": {
              ...typographyStyles.menuItem,
            },
          }}
        />
      </StyledListItem>
    ))}
  </List>
);

export default SidebarFavorites;
