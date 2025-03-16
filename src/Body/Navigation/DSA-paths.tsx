import { IMenuPath } from "./INaviagtion.type";
import {
  ArrowDownwardOutlined,
  MenuBook,
  PatternOutlined,
  QuestionAnswerOutlined,
  QuestionMarkOutlined,
} from "@mui/icons-material";

export const DSA_Paths: IMenuPath[] = [
  {
    title: "Concepts",
    path: "/concepts",
    icon: <MenuBook fontSize="small" className="text-green-500" />,
    subItems: [
      { title: "Array", path: "/dsa/array" },
      { title: "Linked List", path: "/dsa/linked-list" },
      { title: "Stack", path: "/dsa/stack" },
      { title: "Queue", path: "/dsa/queue" },
      { title: "Tree", path: "/dsa/tree" },
    ],
  },
  {
    title: "Questions",
    path: "/questions",
    icon: <QuestionMarkOutlined fontSize="small" className="text-green-500" />,
    subItems: [
      { title: "Leetcode 1", path: "/dsa/leetcode1" },
      { title: "Leetcode 2", path: "/dsa/leetcode2" },
      { title: "Leetcode 3", path: "/dsa/leetcode3" },
      { title: "Leetcode 4", path: "/dsa/leetcode4" },
    ],
  },
  {
    title: "Deep dive",
    path: "/deepdice",
    icon: <ArrowDownwardOutlined fontSize="small" className="text-green-500" />,
    subItems: [
      { title: "bonary search", path: "/dsa/binary-search" },
      { title: "recursion", path: "/dsa/recursion" },
      { title: "dynamic programming", path: "/dsa/dynamic-programming" },
      { title: "backtracking", path: "/dsa/backtracking" },
      { title: "bit manipulation", path: "/dsa/bit-manipulation" },
    ],
  },
  {
    title: "DSA Patterns",
    path: "/dsa-patterns",
    icon: <PatternOutlined fontSize="small" className="text-green-500" />,
    subItems: [
      { title: "Sliding Window", path: "/dsa/sliding-window" },
      { title: "Two Pointers", path: "/dsa/two-pointers" },
      { title: "Fast & Slow Pointers", path: "/dsa/fast-slow-pointers" },
      { title: "Merge Intervals", path: "/dsa/merge-intervals" },
      { title: "Cyclic Sort", path: "/dsa/cyclic-sort" },
      {
        title: "In-place Reversal of Linked List",
        path: "/dsa/in-place-reversal",
      },
      { title: "Tree Breadth First Search", path: "/dsa/tree-bfs" },
    ],
  },
];
