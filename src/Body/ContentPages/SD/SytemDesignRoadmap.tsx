import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

export const SystemDesignRoadmap = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 4 }}>
        💡 System Design Roadmap
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "center", marginBottom: 4 }}>
        Learn how to **design scalable systems used by millions**.  
        Explore concepts like **Load Balancing, Caching, Microservices, Databases, and more!**
      </Typography>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        🔥 Key Topics:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="✅ Scalability & Load Balancing" secondary="Horizontal vs. Vertical Scaling, Load Balancers." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Databases (SQL & NoSQL)" secondary="Relational, Document-based, Sharding, Replication." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Caching Strategies" secondary="Redis, Memcached, CDN usage." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Microservices & APIs" secondary="Service-oriented architecture, API Gateway, GraphQL." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Message Queues & Event-Driven Design" secondary="Kafka, RabbitMQ, Pub/Sub architecture." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Security & Authentication" secondary="OAuth, JWT, Role-based access control (RBAC)." />
        </ListItem>
      </List>
    </Box>
  );
};

export default SystemDesignRoadmap;
