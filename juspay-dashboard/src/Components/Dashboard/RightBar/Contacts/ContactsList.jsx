import { Box, Avatar, Typography } from "@mui/material";

const ContactsList = ({ contacts }) => (
  <>
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
  </>
);

export default ContactsList;
