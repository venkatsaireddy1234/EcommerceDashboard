import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  Stack,
} from "@mui/material";
import { MenuBook, Search, Bookmark } from "@mui/icons-material";
import RestoreIcon from "@mui/icons-material/Restore";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import { styled } from "@mui/material/styles";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "../../../context/ThemeContext";

const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgba(0,0,0,0.05)",
  "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
  marginRight: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: { width: "auto" },
}));

const NavBar = ({ currentPath }) => {
  const theme = useMuiTheme();
  const { mode, toggleMode } = useTheme();

  const iconStyle = {
    color: theme.palette.text.secondary,
  };

  return (
    <AppBar
      color="inherit"
      elevation={0}
      sx={{
        width: 948,
        height: 68,
        minWidth: 1050,
        right: "385px",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: 0,
        bgcolor: theme.palette.background.paper,
        display: "flex",
        justifyContent: "space-between",
        px: "28px",
        pt: "20px",
        pb: "20px",
        opacity: 1,
        boxSizing: "border-box",
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

          <IconButton>
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
