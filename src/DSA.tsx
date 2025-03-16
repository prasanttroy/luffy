import "./App.css";
import { ContentSkeleton } from "./Body/ContentSkeleton";
import { DSA_Paths } from "./Body/Navigation/DSA-paths.util";

export const DSA = () => {
  let topic = "DSA";
  let paths = DSA_Paths;
  return <ContentSkeleton topic={topic} paths={paths} />;
};
