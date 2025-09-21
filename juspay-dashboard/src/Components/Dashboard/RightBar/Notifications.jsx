import { Paper, Typography, Box, Tooltip, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const notifications = [
  {
    icon: BugReportOutlinedIcon,
    message:
      "Critical bug reported in payment module. Please check immediately.",
    time: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
  {
    icon: PersonOutlineOutlinedIcon,
    message: "New user John Doe has signed up for your service.",
    time: new Date(Date.now() - 10 * 60 * 1000), // 10 minutes ago
  },
  {
    icon: InfoOutlinedIcon,
    message: "System maintenance scheduled for tomorrow at 2 AM.",
    time: new Date(Date.now() - 26 * 60 * 60 * 1000), // 26 hours ago
  },
  {
    icon: NotificationsNoneOutlinedIcon,
    message: "Your order #C12345 has been shipped.",
    time: new Date(Date.now() - 30 * 1000), // 30 seconds ago
  },
];

function getRelativeTime(date) {
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) return "Just now";
  if (diffMin < 60) return `${diffMin} minute${diffMin > 1 ? "s" : ""} ago`;
  if (diffHour < 24) return `${diffHour} hour${diffHour > 1 ? "s" : ""} ago`;
  if (diffDay === 1) return "Yesterday";
  return `${diffDay} days ago`;
}

const Notifications = () => {
  const theme = useTheme();
  const iconColor = theme.palette.mode === "dark" ? "#000" : "#000";
  const creamBg = "#E3F5FF";

  return (
    <Paper
      elevation={0}
      sx={{
        width: 240,
        minHeight: 252,
        gap: 1,
        opacity: 1,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mb: 3,
        boxSizing: "border-box",
        p: 2,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          fontSize: 16,
          mb: 1,
        }}
      >
        Notifications
      </Typography>
      {notifications.map((notif, idx) => {
        const Icon = notif.icon;
        return (
          <Box
            key={idx}
            sx={{
              width: 240,
              height: 48,
              borderRadius: 1,
              opacity: 1,
              display: "flex",
              alignItems: "center",
              mb: 1,
              px: 1,
              py: 0.5,
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                bgcolor: creamBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 1,
                border: "1px solid #f5e6c8",
              }}
            >
              <Icon sx={{ color: iconColor, width: 20, height: 20 }} />
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Tooltip title={notif.message} arrow>
                <Typography
                  variant="body2"
                  color="text.primary"
                  noWrap
                  sx={{
                    maxWidth: 170,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    fontSize: 14,
                  }}
                >
                  {notif.message}
                </Typography>
              </Tooltip>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontSize: 12 }}
              >
                {getRelativeTime(notif.time)}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Paper>
  );
};

export default Notifications;
