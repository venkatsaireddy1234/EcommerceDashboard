import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Avatar,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { statusStyles } from "./statusConfig";
import { getRelativeDate, capitalize } from "./ordersUtils";
import { useTheme } from "@mui/material/styles";

const OrdersTable = ({
  visibleOrders,
  checked,
  handleCheck,
  allChecked,
  handleCheckAll,
  checkboxColor,
  headerBg,
  textColor,
  theme,
}) => (
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
              "&.Mui-checked": { color: checkboxColor },
              "&.MuiCheckbox-indeterminate": { color: checkboxColor },
            }}
          />
        </TableCell>
        <TableCell
          sx={{ bgcolor: headerBg, color: theme.palette.text.primary }}
        >
          Order ID
        </TableCell>
        <TableCell
          sx={{ bgcolor: headerBg, color: theme.palette.text.primary }}
        >
          User
        </TableCell>
        <TableCell
          sx={{ bgcolor: headerBg, color: theme.palette.text.primary }}
        >
          Project
        </TableCell>
        <TableCell
          sx={{ bgcolor: headerBg, color: theme.palette.text.primary }}
        >
          Address
        </TableCell>
        <TableCell
          sx={{ bgcolor: headerBg, color: theme.palette.text.primary }}
        >
          Date
        </TableCell>
        <TableCell
          sx={{ bgcolor: headerBg, color: theme.palette.text.primary }}
        >
          Status
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {visibleOrders.map((order) => {
        const statusCap = capitalize(order.status);
        const statusStyle = statusStyles[statusCap] || statusStyles.Pending;
        return (
          <TableRow key={order.orderId}>
            <TableCell padding="checkbox">
              <Checkbox
                checked={!!checked[order.orderId]}
                onChange={() => handleCheck(order.orderId)}
                sx={{
                  color: checkboxColor,
                  "&.Mui-checked": { color: checkboxColor },
                  "&.MuiCheckbox-indeterminate": { color: checkboxColor },
                }}
              />
            </TableCell>
            <TableCell>
              <Typography fontWeight={500} color={textColor}>
                {order.orderId}
              </Typography>
            </TableCell>
            <TableCell>
              <Stack direction="row" alignItems="center" spacing={1}>
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
              <Stack direction="row" alignItems="center" spacing={1}>
                <CalendarMonthIcon
                  sx={{ fontSize: 18, color: "text.secondary" }}
                />
                <span>{getRelativeDate(order.date)}</span>
              </Stack>
            </TableCell>
            <TableCell>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: statusStyle.dot,
                    mr: 1,
                  }}
                />
                <Typography sx={{ color: statusStyle.color, fontWeight: 500 }}>
                  {statusStyle.label}
                </Typography>
              </Stack>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);

export default OrdersTable;
