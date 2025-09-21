import { Box } from "@mui/material";
import Activities from "./Activities/Activities";
import Notifications from "./Notifications/Notifications";
import Contacts from "./Contacts/Contacts";

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
      marginLeft: 3,
    }}
  >
    <Notifications />
    <Activities />
    <Contacts />
  </Box>
);

export default RightBar;
