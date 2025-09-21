import { Box, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const RevenueLineChart = ({ yTicks, data, labelColor, graphBg }) => (
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
        <Line
          type="monotone"
          dataKey="actuals"
          stroke="#90caf9"
          strokeWidth={3}
          dot={false}
          isAnimationActive={false}
        />
        <Line
          type="monotone"
          dataKey="projections"
          stroke={graphBg === "#1C1C1C" ? "#C6C7F8" : "#1C1C1C"}
          strokeWidth={3}
          dot={(props) =>
            props.index === data.length - 1 ? (
              <circle
                cx={props.cx}
                cy={props.cy}
                r={5}
                fill={graphBg === "#1C1C1C" ? "#C6C7F8" : "#1C1C1C"}
              />
            ) : null
          }
          isAnimationActive={false}
          strokeDasharray="0 0"
        />
      </LineChart>
    </ResponsiveContainer>
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
      {xLabels.map((month) => (
        <Typography
          key={month}
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
          {month}
        </Typography>
      ))}
    </Box>
  </Box>
);

export default RevenueLineChart;
