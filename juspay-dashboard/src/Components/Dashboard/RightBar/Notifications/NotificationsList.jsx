import { Box, Typography, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { getRelativeTime } from "./notificationsUtils";

const creamBg = "#E3F5FF";

const NotificationsList = ({ notifications }) => {
  const theme = useTheme();
  const iconColor = "#000";

  return (
    <>
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
    </>
  );
};

export default NotificationsList;
