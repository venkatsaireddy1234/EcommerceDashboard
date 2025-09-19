import { Box, Paper, Typography, Stack } from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

// Stats Card Component
const StatsCard = ({ title, value, percentage, isIncrease }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 2,
        bgcolor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        flex: 1,
        minWidth: "200px",
      }}
    >
      <Stack spacing={1}>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h4" color="text.primary">
          {value}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          {isIncrease ? (
            <TrendingUp sx={{ color: "success.main" }} />
          ) : (
            <TrendingDown sx={{ color: "error.main" }} />
          )}
          <Typography
            variant="body2"
            color={isIncrease ? "success.main" : "error.main"}
          >
            {percentage}%
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

const Ecommerce = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Main Container */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Half - Stats Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              flex: 1,
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
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              flex: 1,
            }}
          >
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
        </Box>

        {/* Right Half - Projects Graph */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 2,
            border: (theme) => `1px solid ${theme.palette.divider}`,
            display: "flex",
            flexDirection: "column",
            flex: 1,
            minHeight: "300px",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Projects vs Annuals
          </Typography>
          {/* Add your graph component here */}
        </Paper>
      </Box>
    </Box>
  );
};

export default Ecommerce;
