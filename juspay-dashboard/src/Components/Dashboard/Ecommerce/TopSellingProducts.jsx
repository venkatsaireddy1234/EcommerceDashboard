import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const dummyRows = [
  { name: "Product A", price: "$25", quantity: 120, amount: "$3,000" },
  { name: "Product B", price: "$40", quantity: 80, amount: "$3,200" },
  { name: "Product C", price: "$15", quantity: 200, amount: "$3,000" },
  { name: "Product D", price: "$30", quantity: 100, amount: "$3,000" },
  { name: "Product E", price: "$10", quantity: 30, amount: "$1,000" },
];

const TopSellingProducts = () => {
  const theme = useTheme();

  // Dynamic color for table cells and rows
  const cellColor = theme.palette.mode === "dark" ? "#fff" : "#1C1C1C";
  const headerColor = theme.palette.mode === "dark" ? "#FFFFFF66" : "#1C1C1C";
  const borderColor = theme.palette.mode === "dark" ? "#FFFFFF66" : "#E0E0E0";

  const colSx = {
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: "18px",
    letterSpacing: 0,
    color: cellColor,
    border: "none",
    background: "transparent",
    p: 0,
  };

  const nameColSx = {
    width: 224,
    minWidth: 224,
    height: 40,
    opacity: 1,
    px: 0,
    py: 0,
    color: headerColor,
  };

  const otherColSx = {
    width: 130,
    minWidth: 130,
    height: 40,
    opacity: 1,
    px: 0,
    py: 0,
    color: headerColor,
  };

  const nameRowSx = {
    width: 224,
    minWidth: 224,
    height: 40,
    minHeight: 40,
    opacity: 1,
    borderRadius: 1, // 8px
    pt: 1, // 8px
    pr: 1.5, // 12px
    pb: 1, // 8px
    pl: 0,
    display: "table-cell",
    verticalAlign: "middle",
    boxSizing: "border-box",
    background: "transparent",
    color: cellColor,
  };

  const otherRowSx = {
    width: 130,
    minWidth: 130,
    height: 40,
    minHeight: 40,
    opacity: 1,
    borderRadius: 1, // 8px
    pt: 1, // 8px
    pr: 1.5, // 12px
    pb: 1, // 8px
    pl: 1.5, // 12px
    display: "table-cell",
    verticalAlign: "middle",
    boxSizing: "border-box",
    background: "transparent",
    color: cellColor,
  };

  return (
    <Box
      sx={{
        width: 662,
        height: 336,
        minWidth: 662,
        gap: 0.5, // 4px
        opacity: 1,
        p: 3, // 24px
        borderRadius: 2, // 16px
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        bgcolor:
          theme.palette.mode === "dark"
            ? "#1C1C1C"
            : "var(--Primary-Light, #F7F9FB)",
        mt: 3,
      }}
    >
      {/* Title - Number="1" */}
      <Box
        sx={{
          width: 614,
          height: 20,
          borderRadius: 1, // 8px
          opacity: 1,
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            color: headerColor,
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontStyle: "normal",
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: 0,
          }}
        >
          Top Selling Products
        </Typography>
      </Box>
      {/* Table */}
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          width: 614,
          height: 264,
          opacity: 1,
          borderRadius: 1,
          background: "transparent",
          boxShadow: "none",
          overflow: "visible",
        }}
      >
        <Table
          size="small"
          sx={{
            minWidth: 614,
            borderCollapse: "separate",
            borderSpacing: 0,
            tableLayout: "fixed",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  ...colSx,
                  ...nameColSx,
                  borderBottom: `2px solid ${borderColor}`,
                  background: "transparent",
                  fontWeight: 400,
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  ...colSx,
                  ...otherColSx,
                  borderBottom: `2px solid ${borderColor}`,
                  background: "transparent",
                  fontWeight: 400,
                }}
              >
                Price
              </TableCell>
              <TableCell
                sx={{
                  ...colSx,
                  ...otherColSx,
                  borderBottom: `2px solid ${borderColor}`,
                  background: "transparent",
                  fontWeight: 400,
                }}
              >
                Quantity
              </TableCell>
              <TableCell
                sx={{
                  ...colSx,
                  ...otherColSx,
                  borderBottom: `2px solid ${borderColor}`,
                  background: "transparent",
                  fontWeight: 400,
                }}
              >
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyRows.map((row, idx) => (
              <TableRow key={idx} sx={{ background: "transparent" }}>
                <TableCell sx={{ ...colSx, ...nameRowSx }}>
                  {row.name}
                </TableCell>
                <TableCell sx={{ ...colSx, ...otherRowSx }}>
                  {row.price}
                </TableCell>
                <TableCell sx={{ ...colSx, ...otherRowSx }}>
                  {row.quantity}
                </TableCell>
                <TableCell sx={{ ...colSx, ...otherRowSx }}>
                  {row.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopSellingProducts;
