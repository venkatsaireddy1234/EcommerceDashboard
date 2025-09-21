import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTheme as useCustomTheme } from "../../../../context/ThemeContext";
import NavBarSearch from "./NavBarSearch";
import { leftIcons, rightIcons, notificationIcon } from "./NavBarIconsConfig";
import { getSidebarBorder, getIconStyle } from "./NavBarThemeUtils";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";

const NavBar = ({ currentPath, onNotificationClick }) => {
  const theme = useTheme();
  const { mode, toggleMode } = useCustomTheme();
  const iconStyle = getIconStyle(theme);
  const sidebarBorder = getSidebarBorder(theme);

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: theme.palette.background.paper,
        color: "text.primary",
        borderBottom: `${sidebarBorder.width} solid ${sidebarBorder.color}`,
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {leftIcons.map(({ key, icon: Icon }) => (
            <IconButton key={key}>
              <Icon sx={iconStyle} />
            </IconButton>
          ))}
          <Typography
            variant="h6"
            noWrap
            sx={{ color: theme.palette.text.primary }}
          >
            {currentPath || "Dashboard / Default"}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            marginLeft: "auto",
            gap: 2,
            alignItems: "center",
          }}
        >
          <NavBarSearch />

          <IconButton onClick={toggleMode}>
            {mode === "light" ? (
              <DarkMode sx={iconStyle} />
            ) : (
              <LightMode sx={iconStyle} />
            )}
          </IconButton>

          {rightIcons.map(({ key, icon: Icon }) => (
            <IconButton key={key}>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Icon sx={iconStyle} />
              </Stack>
            </IconButton>
          ))}

          <IconButton onClick={onNotificationClick}>
            {notificationIcon && <notificationIcon sx={iconStyle} />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
