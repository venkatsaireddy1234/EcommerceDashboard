import { Box, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TrendingUp from "@mui/icons-material/TrendingUp";
import TrendingDown from "@mui/icons-material/TrendingDown";

const StatsCard = ({ title, value, percentage, isIncrease, onClick }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      onClick={onClick}
      sx={{
        width: 202,
        height: 112,
        minWidth: 200,
        gap: 1, // 8px
        borderRadius: 2, // 16px
        p: 3, // 24px
        bgcolor: theme.palette.mode === "light" ? "#f5f5f5" : "#232323",
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
      {/* Title */}
      <Box
        sx={{
          width: 154,
          height: 20,
          gap: 1, // 8px
          opacity: 1,
          borderRadius: 1, // 8px
          display: "flex",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: 1,
            opacity: 1,
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: 0,
            // Type="Single"
            // Hover=False
          }}
        >
          {title}
        </Typography>
      </Box>
      {/* Value & Percentage */}
      <Box
        sx={{
          width: 154,
          height: 36,
          borderRadius: 1, // 8px
          opacity: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1, // 8px
          // Type="Right & Left"
          // Hover=False
        }}
      >
        <Typography variant="h4" color="text.primary" sx={{ fontSize: 22 }}>
          {value}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          {isIncrease ? (
            <TrendingUp sx={{ color: "success.main", fontSize: 20 }} />
          ) : (
            <TrendingDown sx={{ color: "error.main", fontSize: 20 }} />
          )}
          <Typography
            variant="body2"
            color={isIncrease ? "success.main" : "error.main"}
            sx={{ fontWeight: 500, fontSize: 16 }}
          >
            {percentage}%
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
};

const CardsGrid = ({ onOrdersClick }) => (
  <Box
    sx={{
      width: 432,
      height: 252,
      gap: 3.5, // 28px
      opacity: 1,
      borderRadius: 2,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      background: "none",
      p: 0,
    }}
  >
    <StatsCard
      title="Customers"
      value="2,420"
      percentage={12.5}
      isIncrease={true}
    />
    <StatsCard
      title="Orders"
      value="1,210"
      percentage={8.1}
      isIncrease={false}
      onClick={onOrdersClick}
    />
    <StatsCard
      title="Revenue"
      value="$8,120"
      percentage={15.3}
      isIncrease={true}
    />
    <StatsCard
      title="Growth"
      value="21.8%"
      percentage={32.7}
      isIncrease={true}
    />
  </Box>
);

export default CardsGrid;
