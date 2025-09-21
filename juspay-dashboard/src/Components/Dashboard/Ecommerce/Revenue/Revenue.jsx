import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import RevenueLineChart from "./RevenueLineChart";
import { revenueChartConfig } from "./revenueConfig";

export default function Revenue() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const labelColor = isDark ? "#8A8A8A" : "#1C1C1C";
  const graphBg = isDark ? "#1C1C1C" : "var(--Primary-Light, #F7F9FB)";
  const { yLabels, yTicks, data } = revenueChartConfig;

  return (
    <Box
      sx={{
        width: 500,
        height: 318,
        minWidth: 662,
        gap: 2,
        opacity: 1,
        p: 3,
        borderRadius: 2,
        background: "#fff",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        bgcolor: graphBg,
        marginTop: 3,
      }}
    >
      <Box
        sx={{
          width: 437,
          height: 22,
          gap: 2,
          borderRadius: 1,
          opacity: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
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
            color: isDark ? "#fff" : "#1C1C1C",
          }}
        >
          Revenue
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: 12,
            lineHeight: "18px",
            letterSpacing: 0,
            color: isDark ? "#fff" : "#1C1C1C",
            ml: 2,
          }}
        >
          Current Week{" "}
          <Box
            component="span"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontStyle: "normal",
              fontSize: 12,
              lineHeight: "18px",
              letterSpacing: 0,
              color: isDark ? "#fff" : "#1C1C1C",
            }}
          >
            $58,211
          </Box>
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: 12,
            lineHeight: "18px",
            letterSpacing: 0,
            color: isDark ? "#fff" : "#1C1C1C",
            ml: 2,
          }}
        >
          Previous Week{" "}
          <Box
            component="span"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontStyle: "normal",
              fontSize: 12,
              lineHeight: "18px",
              letterSpacing: 0,
              color: isDark ? "#fff" : "#1C1C1C",
            }}
          >
            $58,211
          </Box>
        </Typography>
      </Box>

      <Box
        sx={{
          width: 614,
          height: 232,
          gap: 2,
          opacity: 1,
          borderRadius: 2,
          background: graphBg,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          overflow: "hidden",
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
            py: 1,
            pointerEvents: "none",
          }}
        >
          {yLabels.map((label) => (
            <Typography
              key={label}
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                color: labelColor,
                opacity: 0.7,
                lineHeight: "18px",
              }}
            >
              {label}
            </Typography>
          ))}
        </Box>
        <RevenueLineChart
          yTicks={yTicks}
          data={data}
          labelColor={labelColor}
          graphBg={graphBg}
        />
      </Box>
    </Box>
  );
}
