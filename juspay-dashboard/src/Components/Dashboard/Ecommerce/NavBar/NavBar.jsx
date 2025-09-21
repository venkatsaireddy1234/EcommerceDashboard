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
import { leftIcons, rightIcons } from "./NavBarIconsConfig";
import { getSidebarBorder, getIconStyle } from "./NavBarThemeUtils";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";

const NavBar = ({ currentPath, onNotificationClick, notificationIcon }) => {
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
          {(() => {
            const path = (currentPath || "Dashboard / Default").split(" / ");
            return (
              <Box
                sx={{
                  width: 184,
                  height: 28,
                  borderRadius: 8,
                  bgcolor: "var(--black-40, #FFFFFF66)",
                  display: "flex",
                  alignItems: "center",
                  opacity: 1,
                }}
              >
                <Typography
                  sx={{
                    width: 98,
                    height: 28,
                    borderRadius: 8,
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "28px",
                    background: "transparent",
                    color: "grey",
                    opacity: 1,
                    px: 1,
                  }}
                >
                  {path[0]}
                </Typography>
                <Typography
                  sx={{
                    width: 98,
                    height: 28,
                    borderRadius: 8,
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "28px",
                    background: "transparent",
                    color: "grey",
                    opacity: 1,
                    px: 1,
                  }}
                >
                  /
                </Typography>
                <Typography
                  sx={{
                    width: 98,
                    height: 28,
                    borderRadius: 8,
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "28px",
                    background: "transparent",
                    color: "#000",
                    opacity: 1,
                    px: 1,
                  }}
                >
                  {path[1]}
                </Typography>
              </Box>
            );
          })()}
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
          <IconButton onClick={onNotificationClick}>
            {notificationIcon ? (
              <notificationIcon sx={iconStyle} />
            ) : (
              <NotificationsNoneTwoToneIcon sx={iconStyle} />
            )}
          </IconButton>
          {rightIcons.map(({ key, icon: Icon }) => (
            <IconButton key={key}>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Icon sx={iconStyle} />
              </Stack>
            </IconButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
