import { Card, CardContent, Typography, Button } from "@mui/material";
import { COLOR } from "../Color.palette";

export const DsaRoadmapAd = () => {
  return (
    <Card sx={{ 
      backgroundColor: COLOR.BodyShadeColor, 
      color: COLOR.PrimaryFont, 
      borderLeft: `5px solid ${COLOR.Primary}`, 
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", 
      maxWidth: 400 
    }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          Master DSA Roadmap 🚀
        </Typography>
        <Typography variant="body2" sx={{ marginY: 1 }}>
          Learn Data Structures & Algorithms with JavaScript & TypeScript. 
          Crack top tech interviews without language barriers!
        </Typography>
        <Button 
          variant="contained" 
          sx={{ backgroundColor: COLOR.Primary, color: "#fff", "&:hover": { backgroundColor: "#16a085" } }}
        >
          Start Learning
        </Button>
      </CardContent>
    </Card>
  );
};
