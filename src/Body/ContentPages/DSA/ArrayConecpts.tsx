import { Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemText, Divider, Box } from "@mui/material";

export const ArrayConcepts = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "20px" }}>
      {/* Title */}
      <Typography variant="h4" gutterBottom>
        Array Concepts in JavaScript & TypeScript
      </Typography>

      {/* Overview */}
      <Card sx={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h6">Overview</Typography>
          <Typography variant="body1">
            Arrays are fundamental data structures that store elements in a sequential order.  
            They allow efficient access and modification of elements.
          </Typography>
        </CardContent>
      </Card>

      {/* Key Operations */}
      <Card sx={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h6">Key Operations</Typography>
          <List>
            <ListItem>
              <ListItemText primary="1. Insertion - Adding elements to an array." />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="2. Deletion - Removing elements from an array." />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="3. Searching - Finding an element (Linear & Binary Search)." />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="4. Sorting - Arranging elements in order (Bubble, Quick, Merge Sort)." />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* Example Code Snippets */}
      <Card sx={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h6">Example Code</Typography>
          <Typography variant="body2" sx={{ fontFamily: "monospace", backgroundColor: "#f5f5f5", padding: "10px", borderRadius: "5px" }}>
            {`// Inserting an element
const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]

// Deleting an element
arr.pop(); // [1, 2, 3]

// Searching
const index = arr.indexOf(2); // 1

// Sorting
arr.sort((a, b) => a - b);`}
          </Typography>
        </CardContent>
      </Card>

      {/* Time Complexity Table */}
      <Card sx={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h6">Time Complexity</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ backgroundColor: "#e3f2fd", padding: "10px", borderRadius: "5px" }}>
                <Typography variant="body1">Insertion (End) - O(1)</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ backgroundColor: "#e3f2fd", padding: "10px", borderRadius: "5px" }}>
                <Typography variant="body1">Deletion (End) - O(1)</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ backgroundColor: "#ffccbc", padding: "10px", borderRadius: "5px" }}>
                <Typography variant="body1">Searching - O(n) / O(log n)</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ backgroundColor: "#ffccbc", padding: "10px", borderRadius: "5px" }}>
                <Typography variant="body1">Sorting - O(n log n)</Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};
