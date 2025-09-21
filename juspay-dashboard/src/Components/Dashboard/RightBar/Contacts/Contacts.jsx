import { Paper, Typography } from "@mui/material";
import { contacts } from "./contactsData";
import ContactsList from "./ContactsList";

const Contacts = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: 240,
        minHeight: 180,
        gap: 1,
        opacity: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mb: 3,
        p: 2,
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          fontSize: 16,
          mb: 1,
        }}
      >
        Contacts
      </Typography>
      <ContactsList contacts={contacts} />
    </Paper>
  );
};

export default Contacts;
