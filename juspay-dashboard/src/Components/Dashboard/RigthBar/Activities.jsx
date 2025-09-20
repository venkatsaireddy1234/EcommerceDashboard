import { Paper, Typography, Box } from "@mui/material";

const Activities = () => (
  <Paper
    elevation={0}
    sx={{
      width: 240,
      height: 306,
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
      Activities
    </Typography>
    <Box
      sx={{
        width: 240,
        height: 36,
        borderRadius: 1,
        opacity: 1,
        pt: 1,
        pr: 0.5,
        pb: 1,
        pl: 0.5,
        bgcolor: "#F7F9FB",
        display: "flex",
        alignItems: "center",
        mb: 1,
      }}
    >
      <Typography variant="body2" color="text.primary">
        Payment received from John Doe.
      </Typography>
    </Box>
  </Paper>
);
export default Activities;
