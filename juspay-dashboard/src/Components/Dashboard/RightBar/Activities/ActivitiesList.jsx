import { Box, Avatar, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { getRelativeTime } from "./activitiesUtils";

const ActivitiesList = ({ activities }) => {
  const theme = useTheme();

  return (
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
          <Avatar
            src={activity.image}
            alt={activity.user}
            sx={{
              width: 36,
              height: 36,
              borderRadius: 5,
              mr: 1.5,
              zIndex: 1,
            }}
            variant="rounded"
          />
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
  );
};

export default ActivitiesList;
