import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { activities } from "./activitiesData";
import ActivitiesList from "./ActivitiesList";

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
      <ActivitiesList activities={activities} />
    </Paper>
  );
};

export default Activities;
