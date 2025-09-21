import { Paper, Typography, Box, Avatar, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Dummy user images for avatars
const userImages = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
];

const activities = [
  {
    user: "John Doe",
    image: userImages[0],
    message: "Payment received from John Doe for invoice #INV-1001.",
    time: new Date(Date.now() - 10 * 60 * 1000), // 10 minutes ago
  },
  {
    user: "Jane Smith",
    image: userImages[1],
    message: "Revenue increased by 15% this week due to new subscriptions.",
    time: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
  {
    user: "Alice Johnson",
    image: userImages[2],
    message: "New user Alice Johnson registered and completed onboarding.",
    time: new Date(Date.now() - 26 * 60 * 60 * 1000), // 26 hours ago
  },
  {
    user: "Emily Brown",
    image: userImages[3],
    message: "Order #C12346 placed by Emily Brown for 3 items.",
    time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
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

const Activities = () => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        width: 240,
        minHeight: 306,
        gap: 1,
        opacity: 1,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mb: 3,
        p: 2,
        boxSizing: "border-box",
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
        Activities
      </Typography>
      <Box sx={{ position: "relative", width: "100%" }}>
        {activities.map((activity, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              position: "relative",
              mb: idx !== activities.length - 1 ? 2 : 0,
              minHeight: 56,
            }}
          >
            {/* Vertical line */}
            {idx !== activities.length - 1 && (
              <Box
                sx={{
                  position: "absolute",
                  left: 18,
                  top: 40,
                  width: 2,
                  height: 32,
                  bgcolor: theme.palette.mode === "dark" ? "#333" : "#E0E0E0",
                  zIndex: 0,
                }}
              />
            )}
            {/* Avatar with user image */}
            <Avatar
              src={activity.image}
              alt={activity.user}
              sx={{
                width: 36,
                height: 36,
                borderRadius: 5, // Rounded corners, not fully round
                mr: 1.5,
                zIndex: 1,
              }}
              variant="rounded"
            />
            {/* Message and time */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Tooltip title={activity.message} arrow>
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: 160,
                    cursor: "pointer",
                  }}
                >
                  {activity.message}
                </Typography>
              </Tooltip>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontSize: 12 }}
              >
                {getRelativeTime(activity.time)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default Activities;
