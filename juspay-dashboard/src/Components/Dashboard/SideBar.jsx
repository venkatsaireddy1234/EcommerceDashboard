import { useState } from "react";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
  Collapse,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  Folder as FolderIcon,
  School as SchoolIcon,
  Portrait as PortraitIcon,
  RecentActors as RecentActorsIcon,
  Groups as GroupsIcon,
  InvertColors as InvertColorsIcon,
  ConnectWithoutContact as ConnectWithoutContactIcon,
  Star as StarIcon,
  History as HistoryIcon,
  ChevronRight as ChevronRightIcon,
  ExpandMore as ExpandMoreIcon,
  Description as DocumentsIcon,
  Campaign as CampaignIcon,
  People as FollowersIcon,
} from "@mui/icons-material";
import userImage from "/userImageforIcon.png";
import { useTheme as useMuiTheme } from "@mui/material/styles";

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

const getTypographyStyles = (theme) => ({
  sectionHeader: {
    fontFamily: "sans-serif",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "16px",
    letterSpacing: "0.5px",
    fontStyle: "normal",
    color: theme.palette.text.secondary,
  },

  menuItem: {
    fontFamily: "sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0%",
    fontStyle: "normal",
    color: theme.palette.text.primary,
  },

  nestedItem: {
    fontFamily: "sans-serif",
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "18px",
    letterSpacing: "0%",
    fontStyle: "normal",
    color: theme.palette.text.secondary,
  },

  userName: {
    fontFamily: "sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0%",
    fontStyle: "normal",
    color: theme.palette.text.primary,
  },

  tab: {
    fontFamily: "sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0%",
    fontStyle: "normal",
    color: theme.palette.text.primary,
  },
});

const commonIconStyles = (theme) => ({
  color: theme.palette.text.secondary,
  fontSize: 20,
  minWidth: "25px",
});
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

    // Set path
    if (parentText) {
      onPathChange(`${parentText} / ${item}`);
    } else {
      onPathChange(`Dashboard / ${item}`);
    }

    // Set page
    if (item === "Orders") {
      onPageChange("orders");
    } else if (item === "eCommerce" || item === "Default") {
      onPageChange("ecommerce");
    }
  };

  const menuItems = {
    dashboard: [
      {
        icon: <DashboardIcon sx={commonIconStyles(theme)} />,
        text: "Default",
        items: [],
      },
      {
        icon: <ShoppingCartIcon sx={commonIconStyles(theme)} />,
        text: "eCommerce",
        items: ["Products", "Orders", "Customers", "Analytics"],
      },
      {
        icon: <FolderIcon sx={commonIconStyles(theme)} />,
        text: "Projects",
        items: ["Active", "Archive", "Settings", "Reports"],
      },
      {
        icon: <SchoolIcon sx={commonIconStyles(theme)} />,
        text: "Online Courses",
        items: ["My Courses", "Enrolled", "Completed", "Settings"],
      },
    ],
    pages: [
      {
        icon: <PortraitIcon sx={commonIconStyles(theme)} />,
        text: "User Profile",
        items: ["Overview", "Project", "Campaigns", "Documents", "Followers"],
      },
      {
        icon: <RecentActorsIcon sx={commonIconStyles(theme)} />,
        text: "Account",
        items: ["Settings", "Billing", "Security", "Notifications"],
      },
      {
        icon: <GroupsIcon sx={commonIconStyles(theme)} />,
        text: "Corporate",
        items: ["About", "Team", "Project", "Resources"],
      },
      {
        icon: <InvertColorsIcon sx={commonIconStyles(theme)} />,
        text: "Blog",
        items: ["Posts", "Categories", "Tags", "Comments"],
      },
      {
        icon: <ConnectWithoutContactIcon sx={commonIconStyles(theme)} />,
        text: "Social",
        items: ["Feed", "Activity", "Connections", "Groups"],
      },
    ],
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

  const renderFavorites = () => (
    <List>
      <StyledListItem button onClick={() => handleItemClick(null, "Overview")}>
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
          primary="Overview"
          sx={{
            "& .MuiTypography-root": {
              ...typographyStyles.menuItem,
            },
          }}
        />
      </StyledListItem>
      <StyledListItem button onClick={() => handleItemClick(null, "Projects")}>
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
          primary="Projects"
          sx={{
            "& .MuiTypography-root": {
              ...typographyStyles.menuItem,
            },
          }}
        />
      </StyledListItem>
    </List>
  );

  const renderSection = (items, section) =>
    items.map((item) => (
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
          <ListItemIcon>{item.icon}</ListItemIcon>
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
    ));

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
        {renderFavorites()}
      </Box>

      <Typography sx={typographyStyles.sectionHeader}>Dashboard</Typography>
      <List>{renderSection(menuItems.dashboard, "dashboard")}</List>

      <Typography sx={typographyStyles.sectionHeader}>Pages</Typography>
      <List>{renderSection(menuItems.pages, "pages")}</List>
    </Box>
  );
};

export default SideBar;
