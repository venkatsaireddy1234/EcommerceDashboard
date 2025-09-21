import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const yLabels = ["30M", "20M", "10M", "0M"];
const yTicks = [30, 20, 10, 0];
const data = [
  { name: "Jan", actuals: 10, projections: 28 },
  { name: "Feb", actuals: 22, projections: 20 },
  { name: "Mar", actuals: 28, projections: 10 },
  { name: "Apr", actuals: 22, projections: 20 },
  { name: "May", actuals: 10, projections: 28 },
  { name: "Jun", actuals: 18, projections: 24 },
];

export default function LineGraph() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const labelColor = isDark ? "#8A8A8A" : "#1C1C1C";
  const graphBg = isDark ? "#1C1C1C" : "var(--Primary-Light, #F7F9FB)";

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
      {/* Title Row */}
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

      {/* Revenue Graph with Y Axis Labels */}
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
        {/* Revenue Line Graph */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            pl: "0px",
            position: "relative",
            bgcolor: graphBg,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 0, left: 0, bottom: 30 }}
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
              <XAxis dataKey="name" axisLine={false} tick={false} height={0} />
              {/* Actuals line (blue, smooth) */}
              <Line
                type="monotone"
                dataKey="actuals"
                stroke="#90caf9"
                strokeWidth={3}
                dot={false}
                isAnimationActive={false}
              />
              {/* Projections line (black, smooth, dots at end) */}
              <Line
                type="monotone"
                dataKey="projections"
                stroke={isDark ? "#C6C7F8" : "#1C1C1C"}
                strokeWidth={3}
                dot={(props) =>
                  props.index === data.length - 1 ? (
                    <circle
                      cx={props.cx}
                      cy={props.cy}
                      r={5}
                      fill={isDark ? "#C6C7F8" : "#1C1C1C"}
                    />
                  ) : null
                }
                isAnimationActive={false}
                strokeDasharray="0 0"
              />
            </LineChart>
          </ResponsiveContainer>
          {/* X Axis Labels */}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              bottom: 8,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              px: 1,
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            {data.map((d) => (
              <Typography
                key={d.name}
                variant="caption"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  color: labelColor,
                  minWidth: 24,
                  textAlign: "center",
                }}
              >
                {d.name}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
