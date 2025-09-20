import { Box, Typography, LinearProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const cityData = [
  { city: "New York", value: "72k", progress: 80 },
  { city: "London", value: "65k", progress: 65 },
  { city: "Tokyo", value: "54k", progress: 40 },
  { city: "Sydney", value: "38k", progress: 30 },
];

const RevenueByLocation = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 202,
        height: 318,
        minWidth: 200,
        maxWidth: 272,
        opacity: 1,
        p: 3, // 24px
        borderRadius: 2, // 16px
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        bgcolor:
          theme.palette.mode === "dark"
            ? "#1C1C1C"
            : "var(--Primary-Light, #F7F9FB)",
        mt: 3,
        gap: 2,
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <Box
        sx={{
          width: 154,
          height: 20,
          borderRadius: 1, // 8px
          opacity: 1,
          display: "flex",
          alignItems: "center",
          mb: 2,
          px: 2,
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
          Revenue by Location
        </Typography>
      </Box>
      {/* WorldMap Image */}
      <Box
        sx={{
          width: 154,
          height: 82,
          opacity: 1,
          mb: 1, // Reduced gap here
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
        }}
      >
        <img
          src={"/WorldMap.png"}
          alt="World Map"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </Box>
      {/* City Values with Progress Bars */}
      <Box sx={{ width: 154, mx: "auto" }}>
        {cityData.map((item, idx) => (
          <Box key={item.city} sx={{ mb: 0.5 }}>
            <Box
              sx={{
                width: 154,
                height: 22,
                borderRadius: 1, // 8px
                opacity: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 1,
                background: "transparent",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: 12,
                  lineHeight: "18px",
                  letterSpacing: 0,
                  color:
                    theme.palette.mode === "dark"
                      ? "var(--Primary-Light, #F7F9FB)"
                      : "#1C1C1C",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: 80,
                }}
              >
                {item.city}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: 12,
                  lineHeight: "18px",
                  letterSpacing: 0,
                  color:
                    theme.palette.mode === "dark"
                      ? "var(--Primary-Light, #F7F9FB)"
                      : "#1C1C1C",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: 50,
                  textAlign: "right",
                }}
              >
                {item.value}
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={item.progress}
              sx={{
                width: 154,
                height: 3,
                borderRadius: 3,
                background: "#E0E0E0",
                "& .MuiLinearProgress-bar": {
                  background: "#A8C5DA",
                  borderRadius: 3,
                },
                mt: 0.2,
              }}
            />
          </Box>
        ))}
      </Box>
      {children}
    </Box>
  );
};

export default RevenueByLocation;
