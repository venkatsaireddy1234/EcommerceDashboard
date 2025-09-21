import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StorefrontIcon from "@mui/icons-material/Storefront";

export function getSalesData() {
  return [
    {
      label: "Orders",
      value: "$300.56",
      icon: ShoppingCartIcon,
      iconColor: "#1976d2",
    },
    {
      label: "Discounts",
      value: "$120.00",
      icon: LocalOfferIcon,
      iconColor: "#43a047",
    },
    {
      label: "Growth",
      value: "$80.25",
      icon: TrendingUpIcon,
      iconColor: "#fbc02d",
    },
    {
      label: "Stores",
      value: "$50.00",
      icon: StorefrontIcon,
      iconColor: "#8e24aa",
    },
  ];
}