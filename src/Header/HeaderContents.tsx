import {
  Container,
  Toolbar,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Labels } from "../Localization/EnglishStrings";
import { HeaderRoutes } from "./HeaderRoutes";
import { COLOR } from "../Color.palette";

export const HeaderContents = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Toolbar>    
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: COLOR.Primary, fontWeight: "bold" }}
          onClick={() => navigate("/")}
        >
          {Labels.AppName}
        </Typography>

        {/* Navigation Links on the right */}
        <HeaderRoutes />
      </Toolbar>
    </Container>
  );
};
