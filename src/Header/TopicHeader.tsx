import { AppBar } from "@mui/material";
import { TopicHeaderContent } from "./TopicHeaderContent";

export const TopicHeader = (props: {topic: string}) => {
  return (
    <AppBar
      position="relative"
      sx={{
        backgroundColor: "#f0f0f0",
        color: "#333",
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)", // Light border at bottom
      }}
    >
      <TopicHeaderContent topic ={props.topic} />
    </AppBar>
  );
};
