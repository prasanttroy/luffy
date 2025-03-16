import { AppBar } from "@mui/material";
import { HeaderContents } from "./HeaderContents";

export const HomeHeader = () => {
  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: "#f0f0f0", color: "#333", boxShadow: "none" }}
    >
      <HeaderContents />
    </AppBar>
  );
};
