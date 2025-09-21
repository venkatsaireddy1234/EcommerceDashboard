import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
  XAxis,
  ReferenceLine,
  CartesianGrid,
} from "recharts";

const yLabels = ["30M", "20M", "10M", "0"];
const yTicks = [0, 40, 90, 135];
const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const data = [
  { name: "Jan", actuals: 34, projections: 68 },
  { name: "Feb", actuals: 38, projections: 80 },
  { name: "Mar", actuals: 30, projections: 60 },
  { name: "Apr", actuals: 40, projections: 80 },
  { name: "May", actuals: 22, projections: 44 },
  { name: "Jun", actuals: 40, projections: 100 },
];

const SalesBarChart = () => {
  const theme = useTheme();

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
        {/* Y Axis Labels */}
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
        {/* Graph */}
        <Box
          sx={{
            flex: 1,
            height: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              zIndex: 2,
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
                barCategoryGap={24}
              >
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  horizontal={false}
                />
                <YAxis
                  type="number"
                  domain={[0, 30]}
                  ticks={yTicks}
                  axisLine={false}
                  tick={false}
                  width={0}
                  interval={0}
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tick={false}
                  height={0}
                />
                {/* Dotted lines for all y axis ticks */}
                {yTicks.map((y) => (
                  <ReferenceLine
                    key={y}
                    y={y}
                    stroke="#bdbdbd"
                    strokeDasharray="3 3"
                  />
                ))}
                {/* Projections bar (background) */}
                <Bar
                  dataKey="projections"
                  fill="#A8C5DA"
                  barSize={28}
                  radius={[0, 0, 0, 0]}
                  isAnimationActive={false}
                  stackId="a"
                />
                {/* Actuals bar (foreground, on top of projections) */}
                <Bar
                  dataKey="actuals"
                  fill="#c5c5c5ff"
                  barSize={18}
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={false}
                  stackId="a"
                />
              </BarChart>
            </ResponsiveContainer>
            {/* X Axis Labels */}
            <Box
              sx={{
                position: "absolute",
                left: 0,
                bottom: -20,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                px: 1,
                zIndex: 2,
                pointerEvents: "none",
              }}
            >
              {xLabels.map((month) => (
                <Typography
                  key={month}
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontSize: 12,
                    minWidth: 24,
                    textAlign: "center",
                  }}
                >
                  {month}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SalesBarChart;
