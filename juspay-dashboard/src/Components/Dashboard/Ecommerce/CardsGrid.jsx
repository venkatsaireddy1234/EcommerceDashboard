import { Box, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TrendingUp from "@mui/icons-material/TrendingUp";
import TrendingDown from "@mui/icons-material/TrendingDown";

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
        bgcolor: bgcolor
          ? bgcolor
          : theme.palette.mode === "light"
          ? "#f5f5f5"
          : "#232323",
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
            color:
              textColor ||
              (theme.palette.mode === "light" ? "#232323" : "#fff"),
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
          color:
            textColor || (theme.palette.mode === "light" ? "#232323" : "#fff"),
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: 22,
            color:
              textColor ||
              (theme.palette.mode === "light" ? "#232323" : "#fff"),
          }}
        >
          {value}
        </Typography>
        <Typography
          variant="body2"
          color={"dark"}
          sx={{ fontWeight: 500, fontSize: 16 }}
        >
          {percentage}%
        </Typography>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          {isIncrease ? (
            <TrendingUp sx={{ color: "dark", fontSize: 15 }} />
          ) : (
            <TrendingDown sx={{ color: "dark", fontSize: 15 }} />
          )}
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
      gap: 3.5,
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
      bgcolor="#E3F5FF"
      textColor="#232323"
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
      bgcolor="#E5ECF6"
      textColor="#232323"
    />
  </Box>
);

export default CardsGrid;
