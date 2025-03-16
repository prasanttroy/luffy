import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HomeHeader } from "./Header/HomeHeader";
import { COLOR } from "./Color.palette";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeHeader />
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: COLOR.Primary,
          }}
        >
          404
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: "16px",
            color: COLOR.PrimaryFont,
          }}
        >
          This page is under development and will be implemented soon! 🚀
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "8px",
            color: COLOR.PrimaryFont,
          }}
        >
          Meanwhile, check out our <strong>DSA Roadmap</strong> or{" "}
          <strong>System Design</strong> content.
        </Typography>

        <Box
          sx={{
            marginTop: "32px",
            display: "flex",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: COLOR.Primary,
              color: "#fff",
            }}
            onClick={() => navigate("/")}
          >
            Go to Home
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: COLOR.Secondary,
              color: COLOR.Secondary,
            }}
            onClick={() => navigate("/dsa")}
          >
            Explore DSA Roadmap
          </Button>
        </Box>
      </Container>
    </>
  );
};