import { Box } from "@mui/material";
import StatsCard from "./StatsCard";

const cardsData = [
  {
    title: "Customers",
    value: "2,420",
    percentage: 12.5,
    isIncrease: true,
    bgcolor: "#E3F5FF",
    textColor: "#232323",
  },
  {
    title: "Orders",
    value: "1,210",
    percentage: 8.1,
    isIncrease: false,
    onClickKey: "onOrdersClick",
  },
  {
    title: "Revenue",
    value: "$8,120",
    percentage: 15.3,
    isIncrease: true,
  },
  {
    title: "Growth",
    value: "21.8%",
    percentage: 32.7,
    isIncrease: true,
    bgcolor: "#E5ECF6",
    textColor: "#232323",
  },
];

const CardsGrid = ({ onOrdersClick }) => {
  const eventHandlers = { onOrdersClick };

  return (
    <Box
      sx={{
        width: 432,
        height: 252,
        gap: 3.5,
        opacity: 1,
        borderRadius: 2,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        background: "none",
        p: 0,
      }}
    >
      {cardsData.map((card, idx) => (
        <StatsCard
          key={card.title}
          {...card}
          onClick={card.onClickKey ? eventHandlers[card.onClickKey] : undefined}
        />
      ))}
    </Box>
  );
};

export default CardsGrid;
