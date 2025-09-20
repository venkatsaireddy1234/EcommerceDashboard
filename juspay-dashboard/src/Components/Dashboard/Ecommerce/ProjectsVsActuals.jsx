import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ProjectsVsActuals = () => {
  const theme = useTheme();
  const barGraphImg =
    theme.palette.mode === "light" ? "/VerticalBar.png" : "/BarGraph.png";

  // Y axis values (4 lines)
  const yLabels = ["30M", "20M", "10M", "0"];
  // X axis values (6 months)
  const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return (
    <Box
      sx={{
        width: 432,
        height: 252,
        minWidth: 400,
        gap: 2, // 16px
        borderRadius: 2, // 16px
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
        p: 3, // 24px
      }}
    >
      {/* Title */}
      <Box
        sx={{
          width: 384,
          height: 20,
          borderRadius: 1, // 8px
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
            color: "#1C1C1C",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          Projections vs Actuals
        </Typography>
      </Box>
      {/* Graph area with Y axis, bars, and X axis */}
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
        {/* Graph and lines */}
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
          {/* Horizontal Dotted Lines */}
          {[0, 1, 2, 3].map((idx) => (
            <Box
              key={idx}
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `calc(${(idx / 3) * 100}% - 1px)`,
                borderTop: "1px dotted",
                borderColor: "divider",
                zIndex: 1,
              }}
            />
          ))}
          {/* Bar Graph Image */}
          <img
            src={barGraphImg}
            alt="Bar Graph"
            style={{
              width: "100%",
              height: "100%",
              opacity: 1,
              transform: "rotate(0deg)",
              display: "block",
              objectFit: "contain",
              zIndex: 2,
            }}
          />
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
  );
};

export default ProjectsVsActuals;
