import "./App.css";
import { ContentSkeleton, IContentProps } from "./Body/ContentSkeleton";
import { System_Design_Paths } from "./Body/Navigation/SystemDesign-paths";

export const SystemDesign = () => {
  let topic = "System Design";
  let paths = System_Design_Paths;
  return <ContentSkeleton paths={paths} topic={topic} />;
};
