export function getSidebarBorder(theme) {
  return {
    color: theme.palette.mode === "dark" ? "#222" : "#E0E0E0",
    width: "2px",
  };
}

export function getIconStyle(theme) {
  return { color: theme.palette.text.secondary };
}