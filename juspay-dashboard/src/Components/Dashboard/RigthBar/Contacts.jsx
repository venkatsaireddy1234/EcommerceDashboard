import { useEffect, useState } from "react";
import { Box, Paper, Typography, Avatar, Stack } from "@mui/material";

const ContactItem = ({ name, avatar }) => (
  <Box
    sx={{
      width: 240,
      height: 32,
      gap: 1, // 8px
      opacity: 1,
      borderRadius: 1, // 8px
      p: 0.5, // 4px
      display: "flex",
      alignItems: "center",
      bgcolor: "#F7F9FB",
      mb: 1,
    }}
  >
    <Avatar
      src={avatar}
      sx={{
        width: 24,
        height: 24,
        borderRadius: 1, // 8px
        mr: 1,
        bgcolor: "transparent",
        opacity: 1,
      }}
      variant="circular"
    />
    <Typography
      sx={{
        width: 80,
        height: 20,
        borderRadius: 1, // 8px
        opacity: 1,
        fontWeight: 500,
        fontSize: 14,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {name}
    </Typography>
  </Box>
);

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Dummy API for random users
    fetch("https://randomuser.me/api/?results=3")
      .then((res) => res.json())
      .then((data) => {
        setContacts(
          data.results.map((user) => ({
            name: `${user.name.first} ${user.name.last}`,
            avatar: user.picture.thumbnail,
          }))
        );
      });
  }, []);

  return (
    <Paper
      elevation={0}
      sx={{
        width: 240,
        height: 306,
        gap: 1, // 8px
        opacity: 1,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
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
      <Stack direction="column" spacing={1}>
        {contacts.map((contact, idx) => (
          <ContactItem key={idx} name={contact.name} avatar={contact.avatar} />
        ))}
      </Stack>
    </Paper>
  );
};

export default Contacts;
