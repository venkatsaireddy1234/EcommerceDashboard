import { Box } from "@mui/material";
import NavBar from "./Ecommerce/NavBar";

const DashboardLayout = ({ children }) => (
  <Box>
    <NavBar />
    <Box>{children}</Box>
  </Box>
);

export default DashboardLayout;
