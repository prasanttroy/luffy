import { Container, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HeaderRoutes } from "./HeaderRoutes";

export const TopicHeaderContent = (props: { topic: string }) => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#000", fontWeight: "bold" }}
        >
          {props.topic}
        </Typography>

        {/* Navigation Links on the right */}
        <HeaderRoutes />
      </Toolbar>
    </Container>
  );
};
