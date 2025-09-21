import { Box, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
  XAxis,
  ReferenceLine,
  CartesianGrid,
} from "recharts";
const ProjectionsBarChart = ({ yTicks, data, xLabels }) => (
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
          <XAxis dataKey="name" axisLine={false} tick={false} height={0} />
          {yTicks.map((y) => (
            <ReferenceLine
              key={y}
              y={y}
              stroke="#bdbdbd"
              strokeDasharray="3 3"
            />
          ))}
          <Bar
            dataKey="projections"
            fill="#A8C5DA"
            barSize={28}
            radius={[0, 0, 0, 0]}
            isAnimationActive={false}
            stackId="a"
          />
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
);

export default ProjectionsBarChart;
