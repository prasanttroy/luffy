import {
  Container,
  Typography,
  Paper,
  Divider,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { COLOR } from "../../Color.palette";

export const BlogSkeleton = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper
        sx={{ p: 4, backgroundColor: COLOR.BodyShadeColorSecondary }}
        elevation={3}
      >
        <Typography variant="body1" fontWeight="medium" gutterBottom>
          Blog
        </Typography>
        <Typography
          variant="h4"
          color={COLOR.Primary}
          fontWeight="bold"
          gutterBottom
        >
          Blog Title
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Blog Summary: A brief overview of what this blog covers.
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" fontWeight="bold" color={COLOR.SecondaryFont}>
          Introduction Title
        </Typography>
        <Typography variant="body1" paragraph>
          Introduction description providing context about the blog.
        </Typography>

        <Typography variant="h6" fontWeight="bold" color={COLOR.SecondaryFont}>
          Topic 1 Title
        </Typography>
        <Typography variant="body1" paragraph>
          Detailed discussion about topic 1.
        </Typography>
        <Box sx={{ p: 2, bgcolor: COLOR.BodyShadeColor, borderRadius: 2 }}>
          <Typography variant="body2" fontStyle="italic">
            A note for the above topic providing additional insights.
          </Typography>
        </Box>

        <Typography
          variant="h6"
          fontWeight="bold"
          color={COLOR.SecondaryFont}
          sx={{ mt: 2 }}
        >
          Topic 2 Title
        </Typography>
        <Typography variant="body1" paragraph>
          Detailed discussion about topic 2.
        </Typography>

        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" fontWeight="bold" color={COLOR.Primary}>
          Conclusion
        </Typography>
        <Typography variant="body1" paragraph>
          A summary wrapping up the discussion and key takeaways.
        </Typography>

        <Divider sx={{ my: 2 }} />
        <Typography
          variant="h6"
          fontWeight="bold"
          color={COLOR.Primary}
          gutterBottom
        >
          Comments
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Leave a comment..."
          multiline
          rows={3}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" sx={{ bgcolor: COLOR.Primary }}>
          Submit
        </Button>
      </Paper>
    </Container>
  );
};
