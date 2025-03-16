import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

export const DSARoadmap = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 4 }}>
        🚀 Data Structures & Algorithms (DSA) Roadmap
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "center", marginBottom: 4 }}>
        Master **DSA with JavaScript & TypeScript**—just like top tech companies do.  
        **Language should never be a barrier!**  
        We also provide a **JavaScript Cheat Sheet** to help you transition to other languages easily.
      </Typography>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        📌 Roadmap Topics:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="✅ Arrays & Strings" secondary="Basic operations, sliding window, two-pointer techniques." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Recursion & Backtracking" secondary="Solving problems step-by-step recursively." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Linked Lists" secondary="Singly, doubly, circular linked lists." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Stacks & Queues" secondary="Implementation and real-world use cases." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Trees & Graphs" secondary="Binary trees, graphs, BFS, DFS." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Dynamic Programming" secondary="Solving optimization problems efficiently." />
        </ListItem>
      </List>
    </Box>
  );
};

export default DSARoadmap;
