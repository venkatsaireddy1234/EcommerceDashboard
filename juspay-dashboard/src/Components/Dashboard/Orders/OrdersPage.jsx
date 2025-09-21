import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Stack,
  Checkbox,
  InputBase,
  IconButton,
  CircularProgress,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import OrdersTable from "./OrdersTable";
import { statuses } from "./statusConfig";
import { getRelativeDate, capitalize } from "./ordersUtils";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [checked, setChecked] = useState({});
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const checkboxColor = theme.palette.mode === "light" ? "#111" : "#F7F9FB";
  const toolbarBg = theme.palette.mode === "light" ? "#F7F9FB" : "#222";
  const headerBg = theme.palette.mode === "light" ? "#F7F9FB" : "#333";
  const searchBg = theme.palette.mode === "light" ? "#F7F9FB" : "#333";
  const textColor = theme.palette.mode === "light" ? "#111" : "#F7F9FB";

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        const ordersData = Array.from({ length: 50 }, (_, i) => {
          const user = users[i % users.length];
          const status = statuses[Math.floor(Math.random() * statuses.length)];
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
    <Box
      sx={{ mt: 2, height: "200px", display: "flex", justifyContent: "center" }}
    >
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            width: 67,
            height: 20,
            opacity: 1,
            borderRadius: 1,
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
              <OrdersTable
                visibleOrders={visibleOrders}
                checked={checked}
                handleCheck={handleCheck}
                allChecked={allChecked}
                handleCheckAll={handleCheckAll}
                checkboxColor={checkboxColor}
                headerBg={headerBg}
                textColor={textColor}
                theme={theme}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  p: 2,
                  bgcolor: isDark ? "#1C1C1C" : "#e0e0e0",
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  bgcolor: toolbarBg,
                }}
              >
                <Pagination
                  count={pageCount}
                  page={page}
                  onChange={(_, value) => setPage(value)}
                  shape="rounded"
                  sx={{
                    "& .MuiPaginationItem-root": {
                      color: isDark ? "#fff" : "#1C1C1C",
                    },
                    "& .Mui-selected": {
                      bgcolor: isDark ? "#333" : "#e0e0e0",
                      color: isDark ? "#fff" : "#1C1C1C",
                      "&:hover": {
                        bgcolor: isDark ? "#1C1C1C" : "#e0e0e0",
                      },
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
