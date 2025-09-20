import { Paper, Typography, Box } from "@mui/material";

const Notifications = () => (
  <Paper
    elevation={0}
    sx={{
      width: 240,
      height: 252,
      gap: 1, // 8px
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
      Notifications
    </Typography>
    <Box
      sx={{
        width: 240,
        height: 36,
        borderRadius: 1, // 8px
        opacity: 1,
        pt: 1, // 8px
        pr: 0.5, // 4px
        pb: 1, // 8px
        pl: 0.5, // 4px
        bgcolor: "#F7F9FB",
        display: "flex",
        alignItems: "center",
        mb: 1,
      }}
    >
      <Typography variant="body2" color="text.primary">
        Your order #C12345 has been shipped.
      </Typography>
    </Box>
  </Paper>
);

export default Notifications;
