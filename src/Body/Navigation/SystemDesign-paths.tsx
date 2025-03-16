import { MenuBook, NewReleases, Speed } from "@mui/icons-material";
import { IMenuPath } from "./INaviagtion.type";

export const System_Design_Paths: IMenuPath[] = [
  {
    title: "System Design Basics",
    path: "/system-design",
    icon: <MenuBook />,
    subItems: [
      { title: "URL Shortner", path: "/system-design/url-shortner", icon: <NewReleases /> },
      { title: "Tiny URL", path: "/system-design/tiny-url" },
      { title: "Rate Limiter", path: "/system-design/rate-limiter" },
      { title: "Cache", path: "/system-design/cache" },
    ],
  },
  {
    title: "System Design Advanced",
    path: "/system-design-advanced",
    icon: <Speed />,
    subItems: [
      { title: "Distributed Cache", path: "/system-design/distributed-cache" },
      {
        title: "Distributed System",
        path: "/system-design/distributed-system",
      },
      { title: "Load Balancer", path: "/system-design/load-balancer" },
      { title: "Sharding", path: "/system-design/sharding" },
    ],
  },
];
