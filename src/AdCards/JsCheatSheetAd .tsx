import { Card, CardContent, Typography, Button } from "@mui/material";
import { COLOR } from "../Color.palette";

export const JsCheatSheetAd = () => {
  return (
    <Card sx={{ 
      backgroundColor: COLOR.BodyShadeColorSecondary, 
      color: COLOR.PrimaryFont, 
      borderLeft: `5px solid ${COLOR.Tertiary}`, 
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", 
      maxWidth: 400 
    }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          JavaScript Cheat Sheet 📜
        </Typography>
        <Typography variant="body2" sx={{ marginY: 1 }}>
          Quickly reference key JavaScript concepts & patterns. 
          Make transitioning to other languages easier!
        </Typography>
        <Button 
          variant="contained" 
          sx={{ backgroundColor: COLOR.Tertiary, color: "#fff", "&:hover": { backgroundColor: "#0000cc" } }}
        >
          Download Now
        </Button>
      </CardContent>
    </Card>
  );
};
