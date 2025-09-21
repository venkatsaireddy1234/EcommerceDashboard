import { styled } from "@mui/material/styles";
import { IconButton, InputBase } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import { getIconStyle } from "./NavBarThemeUtils";

const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.mode === "dark" ? "#222" : "#E0E0E0",
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#222" : "#E0E0E0",
  },
  marginRight: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: { width: "auto" },
}));

const NavBarSearch = () => {
  const theme = useTheme();
  const iconStyle = getIconStyle(theme);

  return (
    <SearchWrapper>
      <IconButton sx={{ padding: 1 }}>
        <Search sx={iconStyle} />
      </IconButton>
      <InputBase
        placeholder="Search..."
        sx={{
          ml: 1,
          color: theme.palette.text.primary,
          "& ::placeholder": {
            color: theme.palette.text.secondary,
          },
        }}
      />
    </SearchWrapper>
  );
};

export default NavBarSearch;
