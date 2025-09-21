export const userImages = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
];

export const activities = [
  {
    user: "John Doe",
    image: userImages[0],
    message: "Payment received from John Doe for invoice #INV-1001.",
    time: new Date(Date.now() - 10 * 60 * 1000),
  },
  {
    user: "Jane Smith",
    image: userImages[1],
    message: "Revenue increased by 15% this week due to new subscriptions.",
    time: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    user: "Alice Johnson",
    image: userImages[2],
    message: "New user Alice Johnson registered and completed onboarding.",
    time: new Date(Date.now() - 26 * 60 * 60 * 1000),
  },
  {
    user: "Emily Brown",
    image: userImages[3],
    message: "Order #C12346 placed by Emily Brown for 3 items.",
    time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
];