import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

export const notifications = [
  {
    icon: BugReportOutlinedIcon,
    message: "Critical bug reported in payment module. Please check immediately.",
    time: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    icon: PersonOutlineOutlinedIcon,
    message: "New user John Doe has signed up for your service.",
    time: new Date(Date.now() - 10 * 60 * 1000),
  },
  {
    icon: InfoOutlinedIcon,
    message: "System maintenance scheduled for tomorrow at 2 AM.",
    time: new Date(Date.now() - 26 * 60 * 60 * 1000),
  },
  {
    icon: NotificationsNoneOutlinedIcon,
    message: "Your order #C12345 has been shipped.",
    time: new Date(Date.now() - 30 * 1000),
  },
];