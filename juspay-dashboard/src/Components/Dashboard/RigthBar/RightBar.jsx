import { Box } from "@mui/material";
import Notifications from "./Notifications";
import Contacts from "./Contacts";
import Activities from "./Activities";

const RightBar = () => (
  <Box
    sx={{
      width: 280,
      height: 1206,
      minWidth: 280,
      opacity: 1,
      p: 2.5,
      borderLeft: (theme) => `1px solid ${theme.palette.divider}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxSizing: "border-box",
      background: (theme) => theme.palette.background.paper,
    }}
  >
    <Notifications />
    <Activities />
    <Contacts />
  </Box>
);

export default RightBar;
