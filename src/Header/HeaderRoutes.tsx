import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Labels } from "../Localization/EnglishStrings";

export const HeaderRoutes = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button
        color="inherit"
        sx={{ color: "#333", textTransform: "none" }}
        onClick={() => navigate("/system-design")}
      >
        {Labels.RouteSystemDesign}
      </Button>
      <Button
        color="inherit"
        sx={{ color: "#333", textTransform: "none" }}
        onClick={() => navigate("/dsa")}
      >
        {Labels.RouteDSA}
      </Button>
    </Box>
  );
};
