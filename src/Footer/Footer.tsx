import { Container, Grid, Typography, Link, Divider } from "@mui/material";
import { COLOR } from "../Color.palette";

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: COLOR.BodyShadeColorSecondary,
        padding: "24px",
        marginTop: "40px",
        borderTop: "1px solid #ccc",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} textAlign={{ xs: "center", md: "left" }}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>About Us</Typography>
            <Typography variant="body2">
              We help developers master **DSA with JavaScript & TypeScript** so that language is never a barrier.
              Get ready for tech interviews at top companies! 🚀
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><Link href="/" underline="hover">Home</Link></li>
              <li><Link href="/dsa" underline="hover">DSA Roadmap</Link></li>
              <li><Link href="/system-design" underline="hover">System Design Roadmap</Link></li>
              <li><Link href="/javascript-cheatsheet" underline="hover">JavaScript Cheat Sheet</Link></li>
              <li><Link href="https://cashculate.com" target="_blank" underline="hover">Cashculate</Link></li>
            </ul>
          </Grid>

          {/* Contact & Social Media */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Contact & Socials</Typography>
            <Typography variant="body2">Email: support@yourplatform.com</Typography>
            <Typography variant="body2">LinkedIn: <Link href="https://linkedin.com" target="_blank" underline="hover">Connect with us</Link></Typography>
            <Typography variant="body2">Twitter: <Link href="https://twitter.com" target="_blank" underline="hover">@yourplatform</Link></Typography>
          </Grid>
        </Grid>

        <Divider style={{ margin: "24px 0" }} />

        <Typography variant="body2" align="center">
          &copy; 2025 YourPlatform. Built for developers, by developers. 🚀
        </Typography>
      </Container>
    </footer>
  );
};
