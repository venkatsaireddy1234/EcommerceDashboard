import NavBar from "./NavBar";
import { Box } from "@mui/material";
import Ecommerce from "./Ecommerce";
import OrdersPage from "./OrdersPage";

const DashboardLayout = ({ children }) => (
  <Box>
    <NavBar />
    <Box>{children}</Box>
  </Box>
);

export default DashboardLayout;
