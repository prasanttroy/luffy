import { Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemText, Divider } from "@mui/material";

export const UrlShortenerDesign = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "20px" }}>
      {/* Title */}
      <Typography variant="h4" gutterBottom>
        URL Shortener System Design
      </Typography>

      {/* Overview */}
      <Card sx={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h6">Overview</Typography>
          <Typography variant="body1">
            A URL Shortener is a system that converts long URLs into short, manageable links. 
            When users access a short URL, the system redirects them to the original long URL.
          </Typography>
        </CardContent>
      </Card>

      {/* Key Components */}
      <Card sx={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h6">Key Components</Typography>
          <List>
            <ListItem>
              <ListItemText primary="1. API Gateway - Handles requests for shortening and redirection." />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="2. Database - Stores mappings of short URLs to long URLs (e.g., PostgreSQL, MongoDB)." />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="3. Caching - Uses Redis to quickly fetch frequently accessed short URLs." />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="4. Load Balancer - Distributes traffic across multiple servers." />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="5. URL Encoding & Hashing - Generates unique short URLs (e.g., Base62 encoding, Hash functions)." />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* Architecture Diagram (Placeholder) */}
      <Card sx={{ marginBottom: "20px", textAlign: "center", padding: "20px" }}>
        <Typography variant="h6">Architecture Diagram</Typography>
        <Typography variant="body2" color="textSecondary">
          [Insert System Diagram Here]
        </Typography>
      </Card>

      {/* Challenges & Considerations */}
      <Card>
        <CardContent>
          <Typography variant="h6">Challenges & Considerations</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                🚀 Scalability - How to handle millions of URL requests efficiently.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                🔐 Security - Preventing abuse (e.g., spam, phishing links).
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                💾 Storage - Managing URL expiration and cleanup.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                ⏩ Performance - Using caching and load balancing for fast redirection.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};
