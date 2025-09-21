import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const TotalSalesList = ({ salesData }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 154,
        height: 124,
        borderRadius: 2,
        opacity: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        alignItems: "center",
        justifyContent: "space-between",
        p: 1,
      }}
    >
      {salesData.map((item) => {
        const Icon = item.icon;
        return (
          <Box
            key={item.label}
            sx={{
              width: 154,
              height: 22,
              borderRadius: 1,
              opacity: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 6,
              px: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: 53,
                height: 22,
                borderRadius: 1,
                opacity: 1,
                pt: "2px",
                pr: 1,
                pb: "2px",
                pl: 0.5,
                background: "transparent",
                gap: 0.5,
              }}
            >
              <Icon fontSize="small" sx={{ color: item.iconColor, mr: 1 }} />
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
                  ml: 0.5,
                }}
              >
                {item.label}
              </Typography>
            </Box>
            <Box
              sx={{
                width: 53,
                height: 18,
                borderRadius: 1,
                opacity: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
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
                }}
              >
                {item.value}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default TotalSalesList;
