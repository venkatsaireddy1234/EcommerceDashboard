import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const columns = [
  { label: "Name", key: "name", width: 224 },
  { label: "Price", key: "price", width: 130 },
  { label: "Quantity", key: "quantity", width: 130 },
  { label: "Amount", key: "amount", width: 130 },
];

const TopSellingProductsTable = ({ rows }) => {
  const theme = useTheme();
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

  return (
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
            {columns.map((col) => (
              <TableCell
                key={col.key}
                sx={{
                  ...colSx,
                  width: col.width,
                  minWidth: col.width,
                  height: 40,
                  borderBottom: `2px solid ${borderColor}`,
                  background: "transparent",
                  fontWeight: 400,
                  color: headerColor,
                }}
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx} sx={{ background: "transparent" }}>
              {columns.map((col) => (
                <TableCell
                  key={col.key}
                  sx={{
                    ...colSx,
                    width: col.width,
                    minWidth: col.width,
                    height: 40,
                    minHeight: 40,
                    borderRadius: 1,
                    pt: 1,
                    pr: 1.5,
                    pb: 1,
                    pl: col.key === "name" ? 0 : 1.5,
                    display: "table-cell",
                    verticalAlign: "middle",
                    boxSizing: "border-box",
                    background: "transparent",
                  }}
                >
                  {row[col.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopSellingProductsTable;
