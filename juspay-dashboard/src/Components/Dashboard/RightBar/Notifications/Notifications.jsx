import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { notifications } from "./notificationsData";
import NotificationsList from "./NotificationsList";

const Notifications = () => {
  const theme = useTheme();

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
      <NotificationsList notifications={notifications} />
    </Paper>
  );
};

export default Notifications;
