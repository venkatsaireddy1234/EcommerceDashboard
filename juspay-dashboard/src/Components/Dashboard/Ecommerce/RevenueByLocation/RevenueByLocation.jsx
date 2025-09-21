import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CityProgressList from "./CityProgressList";
import { getCityData } from "./revenueByLocationUtils";

const RevenueByLocation = ({ children }) => {
  const theme = useTheme();
  const cityData = getCityData();

  return (
    <Box
      sx={{
        width: 202,
        height: 318,
        minWidth: 200,
        maxWidth: 272,
        opacity: 1,
        p: 3,
        borderRadius: 2,
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
      <Box
        sx={{
          width: 154,
          height: 20,
          borderRadius: 1,
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
      <Box
        sx={{
          width: 154,
          height: 82,
          opacity: 1,
          mb: 1,
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
      <CityProgressList cityData={cityData} />
      {children}
    </Box>
  );
};

export default RevenueByLocation;
