import { Box, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TrendingUp from "@mui/icons-material/TrendingUp";
import TrendingDown from "@mui/icons-material/TrendingDown";
import { getCardColors } from "./cardUtils";

const StatsCard = ({
  title,
  value,
  percentage,
  isIncrease,
  onClick,
  bgcolor,
  textColor,
}) => {
  const theme = useTheme();
  const { cardBg, cardText } = getCardColors(theme, bgcolor, textColor);

  return (
    <Paper
      elevation={0}
      onClick={onClick}
      sx={{
        width: 202,
        height: 112,
        minWidth: 200,
        gap: 1,
        borderRadius: 2,
        p: 3,
        bgcolor: cardBg,
        border: `1px solid ${theme.palette.divider}`,
        opacity: 1,
        transform: "rotate(0deg)",
        cursor: onClick ? "pointer" : "default",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          width: 154,
          height: 20,
          gap: 1,
          opacity: 1,
          borderRadius: 1,
          display: "flex",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: 1,
            opacity: 1,
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: 0,
            color: cardText,
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          width: 154,
          height: 36,
          borderRadius: 1,
          opacity: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: cardText,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: 22,
            color: cardText,
          }}
        >
          {value}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: 500, fontSize: 16, color: cardText }}
        >
          {percentage}%
        </Typography>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          {isIncrease ? (
            <TrendingUp sx={{ color: cardText, fontSize: 15 }} />
          ) : (
            <TrendingDown sx={{ color: cardText, fontSize: 15 }} />
          )}
        </Stack>
      </Box>
    </Paper>
  );
};

export default StatsCard;
