import { Paper, Typography, Box, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const contacts = [
  {
    name: "Jane Smith",
    email: "jane@example.com",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Bob Brown",
    email: "bob@example.com",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const Contacts = () => {
  const theme = useTheme();

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
      {contacts.map((contact, idx) => (
        <Box
          key={idx}
          sx={{
            width: 240,
            height: 44,
            opacity: 1,
            display: "flex",
            alignItems: "center",
            mb: 1,

            borderRadius: 1,
            px: 1,
            py: 0.5,
          }}
        >
          <Avatar
            src={contact.image}
            alt={contact.name}
            sx={{
              width: 32,
              height: 32,
              mr: 1.5,
              borderRadius: 4,
            }}
            variant="rounded"
          />
          <Box sx={{ minWidth: 0 }}>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: 150,
              }}
            >
              {contact.name}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                fontSize: 12,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: 150,
              }}
            >
              {contact.email}
            </Typography>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default Contacts;
