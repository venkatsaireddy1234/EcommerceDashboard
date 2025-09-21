export function getCardColors(theme, bgcolor, textColor) {
  const cardBg =
    bgcolor ||
    (theme.palette.mode === "light" ? "#f5f5f5" : "#232323");
  const cardText =
    textColor ||
    (theme.palette.mode === "light" ? "#232323" : "#fff");
  return { cardBg, cardText };
}