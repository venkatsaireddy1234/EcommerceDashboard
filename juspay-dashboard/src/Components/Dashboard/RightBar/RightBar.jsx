import { Box } from "@mui/material";
import Notifications from "./Notifications";
import Contacts from "./Contacts";
import Activities from "./Activities";

const RightBar = () => (
  <Box
    sx={{
      width: 280,
      height: 1206,
      minWidth: 430,
      opacity: 1,
      py: 2.5,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      boxSizing: "border-box",
      // background: (theme) => theme.palette.background.paper,
      marginLeft: 3,
    }}
  >
    <Notifications />
    <Activities />
    <Contacts />
  </Box>
);

export default RightBar;
