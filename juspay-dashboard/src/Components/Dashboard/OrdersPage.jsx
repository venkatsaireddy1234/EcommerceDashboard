import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Avatar,
  Stack,
  Checkbox,
  InputBase,
  IconButton,
  CircularProgress,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

const statusStyles = {
  Approved: { color: "#fbc02d", dot: "#fbc02d", label: "Approved" },
  Completed: { color: "#43a047", dot: "#43a047", label: "Completed" },
  "In Progress": { color: "#8e24aa", dot: "#8e24aa", label: "In Progress" },
  Pending: { color: "#1976d2", dot: "#1976d2", label: "Pending" },
};

// Helper for date formatting
function getRelativeDate(dateString) {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) return "Just now";
  if (diffMin < 60) return `${diffMin} minute${diffMin > 1 ? "s" : ""} ago`;
  if (diffHour < 24) return `${diffHour} hour${diffHour > 1 ? "s" : ""} ago`;
  if (diffDay === 1) return "Yesterday";
  if (diffDay < 7) return `${diffDay} days ago`;
  return date.toLocaleDateString();
}

// Capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Statuses for random assignment
const statuses = ["approved", "completed", "in progress", "pending"];

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [checked, setChecked] = useState({});
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const checkboxColor = theme.palette.mode === "light" ? "#111" : "#F7F9FB";
  const toolbarBg = theme.palette.mode === "light" ? "#F7F9FB" : "#222";
  const headerBg = theme.palette.mode === "light" ? "#F7F9FB" : "#333";
  const searchBg = theme.palette.mode === "light" ? "#F7F9FB" : "#333";
  const paginationBg = theme.palette.mode === "light" ? "#F7F9FB" : "#333";
  const textColor = theme.palette.mode === "light" ? "#111" : "#F7F9FB";

  // Fetch dummy users and generate orders
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        const ordersData = Array.from({ length: 50 }, (_, i) => {
          const user = users[i % users.length];
          const status = statuses[Math.floor(Math.random() * statuses.length)];
          // Each order is i hours ago
          const date = new Date(Date.now() - i * 3600 * 1000).toISOString();
          return {
            orderId: `#C${(10000 + i).toString().slice(1)}`,
            user: user.name,
            avatar: `https://randomuser.me/api/portraits/men/${
              (i % 50) + 1
            }.jpg`,
            project: `Project ${(i % 5) + 1}`,
            address: `${user.address.street}, ${user.address.city}`,
            date,
            status,
          };
        });
        setOrders(ordersData);
        setLoading(false);
      });
  }, []);

  const rowsPerPage = 10;

  // Filtering and sorting
  const filteredOrders = orders
    .filter((order) => order.user.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortAsc
        ? a.orderId.localeCompare(b.orderId)
        : b.orderId.localeCompare(a.orderId)
    );

  const pageCount = Math.ceil(filteredOrders.length / rowsPerPage);
  const visibleOrders = filteredOrders.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  // Checkbox handlers
  const handleCheck = (orderId) => {
    setChecked((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  const handleCheckAll = (event) => {
    const checkedOnPage = {};
    visibleOrders.forEach((order) => {
      checkedOnPage[order.orderId] = event.target.checked;
    });
    setChecked((prev) => ({ ...prev, ...checkedOnPage }));
  };

  const allChecked =
    visibleOrders.length > 0 &&
    visibleOrders.every((order) => checked[order.orderId]);

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            width: 67,
            height: 20,
            opacity: 1,
            borderRadius: 1, // 8px
            display: "flex",
            alignItems: "center",
            mb: 5,
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
            gutterBottom
          >
            Order List
          </Typography>
        </Box>

        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 300,
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            {/* Toolbar above table */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: toolbarBg,
                borderRadius: 2,
                p: 1,
                mb: 1,
              }}
            >
              {/* Left icons */}
              <Stack direction="row" spacing={1} alignItems="center">
                <IconButton>
                  <AddIcon />
                </IconButton>
                <IconButton>
                  <FilterListIcon />
                </IconButton>
                <IconButton onClick={() => setSortAsc((prev) => !prev)}>
                  {sortAsc ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                </IconButton>
              </Stack>
              {/* Right search */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: searchBg,
                  borderRadius: 1,
                  px: 1,
                  py: 0.5,
                  minWidth: 200,
                }}
              >
                <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
                <InputBase
                  placeholder="Search user…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  sx={{ width: "100%" }}
                />
              </Box>
            </Box>

            <Paper
              sx={{
                width: "100%",
                overflow: "hidden",
                bgcolor: { textColor },
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      padding="checkbox"
                      sx={{
                        bgcolor: headerBg,
                        color: theme.palette.text.primary,
                      }}
                    >
                      <Checkbox
                        checked={allChecked}
                        indeterminate={
                          !allChecked &&
                          visibleOrders.some((order) => checked[order.orderId])
                        }
                        onChange={handleCheckAll}
                        sx={{
                          color: checkboxColor,
                          "&.Mui-checked": {
                            color: checkboxColor,
                          },
                          "&.MuiCheckbox-indeterminate": {
                            color: checkboxColor,
                          },
                        }}
                      />
                    </TableCell>
                    <TableCell
                      sx={{
                        bgcolor: headerBg,
                        color: theme.palette.text.primary,
                      }}
                    >
                      Order ID
                    </TableCell>
                    <TableCell
                      sx={{
                        bgcolor: headerBg,
                        color: theme.palette.text.primary,
                      }}
                    >
                      User
                    </TableCell>
                    <TableCell
                      sx={{
                        bgcolor: headerBg,
                        color: theme.palette.text.primary,
                      }}
                    >
                      Project
                    </TableCell>
                    <TableCell
                      sx={{
                        bgcolor: headerBg,
                        color: theme.palette.text.primary,
                      }}
                    >
                      Address
                    </TableCell>
                    <TableCell
                      sx={{
                        bgcolor: headerBg,
                        color: theme.palette.text.primary,
                      }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      sx={{
                        bgcolor: headerBg,
                        color: theme.palette.text.primary,
                      }}
                    >
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {visibleOrders.map((order) => {
                    // Capitalize status for display
                    const statusCap = capitalize(order.status);
                    // Use color styles
                    const statusStyle =
                      statusStyles[statusCap] || statusStyles.Pending;
                    return (
                      <TableRow key={order.orderId}>
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={!!checked[order.orderId]}
                            onChange={() => handleCheck(order.orderId)}
                            sx={{
                              color: checkboxColor,
                              "&.Mui-checked": {
                                color: checkboxColor,
                              },
                              "&.MuiCheckbox-indeterminate": {
                                color: checkboxColor,
                              },
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Typography fontWeight={500} color={textColor}>
                            {order.orderId}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                          >
                            <Avatar
                              src={order.avatar}
                              sx={{
                                width: 28,
                                height: 28,
                                bgcolor: "primary.main",
                              }}
                            >
                              <PersonIcon sx={{ fontSize: 18 }} />
                            </Avatar>
                            <span>{order.user}</span>
                          </Stack>
                        </TableCell>
                        <TableCell>{order.project}</TableCell>
                        <TableCell>{order.address}</TableCell>
                        <TableCell>
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                          >
                            <CalendarMonthIcon
                              sx={{ fontSize: 18, color: "text.secondary" }}
                            />
                            <span>{getRelativeDate(order.date)}</span>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                          >
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                bgcolor: statusStyle.dot,
                                mr: 1,
                              }}
                            />
                            <Typography
                              sx={{
                                color: statusStyle.color,
                                fontWeight: 500,
                              }}
                            >
                              {statusStyle.label}
                            </Typography>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              {/* Pagination */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  p: 2,
                  bgcolor: "#F7F9FB", // <-- Set pagination background color
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              >
                <Pagination
                  count={pageCount}
                  page={page}
                  onChange={(_, value) => setPage(value)}
                  color="primary"
                  shape="rounded"
                  showFirstButton
                  showLastButton
                  sx={{
                    "& .Mui-selected": {
                      bgcolor: "#F7F9FB !important", // <-- Active page bg color
                      color: "#1C1C1C !important",
                      borderRadius: "8px",
                    },
                  }}
                />
              </Box>
            </Paper>
          </>
        )}
      </Box>
    </Box>
  );
};

export default OrdersPage;
