import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  Stack,
} from "@mui/material";
import {
  MenuBook,
  Search,
  Bookmark,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import RestoreIcon from "@mui/icons-material/Restore";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import { styled, useTheme } from "@mui/material/styles";
import { useTheme as useCustomTheme } from "../../../context/ThemeContext"; // Only for toggleMode

const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.mode === "dark" ? "#222" : "#E0E0E0", // Same as NavBar bottom border
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#222" : "#E0E0E0",
  },
  marginRight: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: { width: "auto" },
}));

const NavBar = ({ currentPath, onNotificationClick }) => {
  const theme = useTheme();
  const { mode, toggleMode } = useCustomTheme();

  const iconStyle = {
    color: theme.palette.text.secondary,
  };

  const sidebarBorderColor = theme.palette.mode === "dark" ? "#222" : "#E0E0E0";
  const sidebarBorderWidth = "2px";

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: theme.palette.background.paper,
        color: "text.primary",
        borderBottom: `${sidebarBorderWidth} solid ${sidebarBorderColor}`,
        boxShadow: "none",
        m: 0,
        p: 2,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: "0 !important",
          height: "100%",
          width: "100%",
          px: 0,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left Division */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <MenuBook sx={iconStyle} />
          </IconButton>
          <IconButton>
            <StarTwoToneIcon sx={iconStyle} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            sx={{ color: theme.palette.text.primary }}
          >
            {currentPath || "Dashboard / Default"}
          </Typography>
        </Box>

        {/* Right Division */}
        <Box
          sx={{
            display: "flex",
            marginLeft: "auto",
            gap: 2,
            alignItems: "center",
          }}
        >
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

          <IconButton onClick={toggleMode}>
            {mode === "light" ? (
              <DarkMode sx={iconStyle} />
            ) : (
              <LightMode sx={iconStyle} />
            )}
          </IconButton>

          <IconButton>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <RestoreIcon sx={iconStyle} />
            </Stack>
          </IconButton>

          <IconButton onClick={onNotificationClick}>
            <NotificationsNoneTwoToneIcon sx={iconStyle} />
          </IconButton>

          <IconButton>
            <Bookmark sx={iconStyle} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
