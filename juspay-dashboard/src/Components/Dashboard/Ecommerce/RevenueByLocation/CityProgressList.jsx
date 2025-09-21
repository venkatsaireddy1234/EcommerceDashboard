import { Box, Typography, LinearProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CityProgressList = ({ cityData }) => {
  const theme = useTheme();
  const labelColor =
    theme.palette.mode === "dark" ? "var(--Primary-Light, #F7F9FB)" : "#1C1C1C";

  return (
    <Box sx={{ width: 154, mx: "auto" }}>
      {cityData.map((item) => (
        <Box key={item.city} sx={{ mb: 0.5 }}>
          <Box
            sx={{
              width: 154,
              height: 22,
              borderRadius: 1,
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
                color: labelColor,
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
                color: labelColor,
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
  );
};

export default CityProgressList;
