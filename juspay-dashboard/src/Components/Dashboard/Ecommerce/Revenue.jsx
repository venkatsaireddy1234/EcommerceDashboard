import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const yLabels = ["30M", "20M", "10M", "0M"];

const Revenue = ({ children }) => {
  const theme = useTheme();
  const graphImg =
    theme.palette.mode === "dark"
      ? "RevenueLightMode.svg"
      : "RevenueLightMode.svg";

  return (
    <Box
      sx={{
        width: 662,
        height: 318,
        minWidth: 662,
        gap: 2, // 16px
        opacity: 1,
        p: 3, // 24px
        borderRadius: 2, // 16px
        background: "#fff",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        bgcolor:
          theme.palette.mode === "dark"
            ? "#1C1C1C"
            : "var(--Primary-Light, #F7F9FB)",
        marginTop: 3,
      }}
    >
      {/* Title Row */}
      <Box
        sx={{
          width: 437,
          height: 22,
          gap: 2, // 16px
          borderRadius: 1, // 8px
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
            color: theme.palette.mode === "dark" ? "#fff" : "#1C1C1C",
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
            color: theme.palette.mode === "dark" ? "#fff" : "#1C1C1C",
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
              color: theme.palette.mode === "dark" ? "#fff" : "#1C1C1C",
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
            color: theme.palette.mode === "dark" ? "#fff" : "#1C1C1C",
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
              color: theme.palette.mode === "dark" ? "#fff" : "#1C1C1C",
            }}
          >
            $58,211
          </Box>
        </Typography>
      </Box>

      {/* Revenue Graph Image with Y Axis Labels */}
      <Box
        sx={{
          width: 614,
          height: 232,
          gap: 2, // 16px
          opacity: 1,
          borderRadius: 2,
          background: "#fff",
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
                color: theme.palette.mode === "dark" ? "#fff" : "#1C1C1C",
                opacity: 0.7,
                lineHeight: "18px",
              }}
            >
              {label}
            </Typography>
          ))}
        </Box>
        {/* Revenue Graph Image */}
        <Box sx={{ width: "100%", height: "100%", pl: "0px" }}>
          <img
            src={graphImg}
            alt="Revenue Graph"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default Revenue;
