import { useState } from "react";
import {
  Avatar,
  Box,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
} from "@mui/material";
import {
  ChevronRight as ChevronRightIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import userImage from "/userImageforIcon.png";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { menuItems } from "./sidebarMenuConfig";
import { getTypographyStyles, commonIconStyles } from "./sidebarStyles";
import StyledListItem from "./StyledListItem";
import SidebarFavorites from "./SidebarFavorites";

const SideBar = ({ onPathChange, onPageChange }) => {
  const theme = useMuiTheme();
  const typographyStyles = getTypographyStyles(theme);

  const [activeItem, setActiveItem] = useState("Default");
  const [openSections, setOpenSections] = useState({});

  const handleSectionClick = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleItemClick = (parentText, item) => {
    setActiveItem(item);

    if (parentText) {
      onPathChange(`${parentText} / ${item}`);
    } else {
      onPathChange(`Dashboard / ${item}`);
    }

    if (item === "Orders") {
      onPageChange("orders");
    } else if (item === "eCommerce" || item === "Default") {
      onPageChange("ecommerce");
    }
  };

  const renderNestedList = (items, parentText) => (
    <Collapse in={openSections[parentText]} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {items.map((item) => (
          <StyledListItem
            key={item}
            button
            sx={{ pl: 4 }}
            active={activeItem === item}
            onClick={() => handleItemClick(parentText, item)}
          >
            <ListItemText
              primary={item}
              sx={{
                "& .MuiTypography-root": {
                  ...typographyStyles.nestedItem,
                },
              }}
            />
          </StyledListItem>
        ))}
      </List>
    </Collapse>
  );

  const renderSection = (items, section) =>
    items.map((item) => {
      const Icon = item.icon;
      return (
        <div key={item.text}>
          <StyledListItem
            button
            active={activeItem === item.text}
            onClick={() => {
              handleSectionClick(item.text);
              handleItemClick(section, item.text);
            }}
          >
            <ListItemIcon>
              {openSections[item.text] ? (
                <ExpandMoreIcon sx={commonIconStyles(theme)} />
              ) : (
                <ChevronRightIcon sx={commonIconStyles(theme)} />
              )}
            </ListItemIcon>
            <ListItemIcon>
              <Icon sx={commonIconStyles(theme)} />
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                "& .MuiTypography-root": {
                  ...typographyStyles.menuItem,
                },
              }}
            />
          </StyledListItem>
          {renderNestedList(item.items, item.text)}
        </div>
      );
    });

  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        borderRight: `1px solid ${theme.palette.divider}`,
        padding: "20px 16px",
        display: "flex",
        flexDirection: "column",
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
        <Avatar src={userImage} sx={{ width: 32, height: 32 }} />
        <Typography sx={typographyStyles.userName}>Venkat</Typography>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
          <Typography
            sx={{
              ...typographyStyles.tab,
              cursor: "pointer",
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: -4,
                left: 0,
                width: "100%",
                height: 2,
                bgcolor: theme.palette.text.primary,
              },
            }}
          >
            Favorites
          </Typography>
          <Typography
            sx={{
              ...typographyStyles.tab,
              color: theme.palette.text.secondary,
              cursor: "pointer",
            }}
          >
            Recents
          </Typography>
        </Box>
        <SidebarFavorites
          handleItemClick={handleItemClick}
          typographyStyles={typographyStyles}
          theme={theme}
        />
      </Box>

      <Typography sx={typographyStyles.sectionHeader}>Dashboard</Typography>
      <List>{renderSection(menuItems.dashboard, "dashboard")}</List>

      <Typography sx={typographyStyles.sectionHeader}>Pages</Typography>
      <List>{renderSection(menuItems.pages, "pages")}</List>
    </Box>
  );
};

export default SideBar;
