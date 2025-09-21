import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { getBarChartConfig } from "./projectionsUtils";
import ProjectionsBarChart from "./ProjectionsBarChart";

const ProjectionsVsActuals = () => {
  const theme = useTheme();
  const { yLabels, xLabels, yTicks, data } = getBarChartConfig();

  return (
    <Box
      sx={{
        width: 432,
        height: 252,
        minWidth: 400,
        gap: 2,
        borderRadius: 2,
        opacity: 1,
        bgcolor:
          theme.palette.mode === "dark"
            ? "#1C1C1C"
            : "var(--Primary-Light, #F7F9FB)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        p: 3,
      }}
    >
      <Box
        sx={{
          width: 384,
          height: 20,
          borderRadius: 1,
          opacity: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontStyle: "normal",
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: 0,
            color:
              theme.palette.mode === "dark"
                ? "#F7F9FB"
                : "var(--Primary-Light, #1C1C1C)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          Projections vs Actuals
        </Typography>
      </Box>
      <Box
        sx={{
          width: 384,
          height: 168,
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: 32,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
            zIndex: 2,
            pt: 0.5,
            pb: 0.5,
            pointerEvents: "none",
          }}
        >
          {yLabels.map((label) => (
            <Typography
              key={label}
              variant="caption"
              sx={{
                color: "text.secondary",
                fontSize: 12,
                lineHeight: "20px",
                height: 20,
              }}
            >
              {label}
            </Typography>
          ))}
        </Box>
        <ProjectionsBarChart yTicks={yTicks} data={data} xLabels={xLabels} />
      </Box>
    </Box>
  );
};

export default ProjectionsVsActuals;
