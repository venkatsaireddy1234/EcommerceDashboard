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
} from "@mui/icons-material";

export const menuItems = {
  dashboard: [
    {
      icon: DashboardIcon,
      text: "Default",
      items: [],
    },
    {
      icon: ShoppingCartIcon,
      text: "eCommerce",
      items: ["Products", "Orders", "Customers", "Analytics"],
    },
    {
      icon: FolderIcon,
      text: "Projects",
      items: ["Active", "Archive", "Settings", "Reports"],
    },
    {
      icon: SchoolIcon,
      text: "Online Courses",
      items: ["My Courses", "Enrolled", "Completed", "Settings"],
    },
  ],
  pages: [
    {
      icon: PortraitIcon,
      text: "User Profile",
      items: ["Overview", "Project", "Campaigns", "Documents", "Followers"],
    },
    {
      icon: RecentActorsIcon,
      text: "Account",
      items: ["Settings", "Billing", "Security", "Notifications"],
    },
    {
      icon: GroupsIcon,
      text: "Corporate",
      items: ["About", "Team", "Project", "Resources"],
    },
    {
      icon: InvertColorsIcon,
      text: "Blog",
      items: ["Posts", "Categories", "Tags", "Comments"],
    },
    {
      icon: ConnectWithoutContactIcon,
      text: "Social",
      items: ["Feed", "Activity", "Connections", "Groups"],
    },
  ],
};