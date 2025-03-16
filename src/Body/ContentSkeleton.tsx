import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { TopicHeader } from "../Header/TopicHeader";
import { IMenuPath } from "./Navigation/INaviagtion.type";
import { Sidebar } from "./Sidebar/Sidebar";
import { DsaRoadmapAd } from "../AdCards/DSARoadmapAd";
import { JsCheatSheetAd } from "../AdCards/JsCheatSheetAd ";

export interface IContentProps {
  topic: string;
  tags?: string[];
  paths: IMenuPath[];
}
export const ContentSkeleton = (props: IContentProps) => {
  const [activePath, setActivePath] = React.useState<IMenuPath | undefined>();

  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        paths={props.paths}
        onSelectPath={(path) => {
          setActivePath(path);
        }}
      />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TopicHeader topic={props.topic} />
        {/* Content */}
        <div style={{ display: "flex", flexGrow: 1, padding: "20px" }}>
          <div style={{ flex: 3 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 20px",
                alignItems: "center",
              }}
            >
              <Button
                startIcon={<NavigateBefore />}
                onClick={() => navigate(-1)}
              >
                Prev
              </Button>
              <Typography variant="h5">{activePath?.title || ""}</Typography>
              <Button endIcon={<NavigateNext />} onClick={() => navigate(1)}>
                Next
              </Button>
            </div>
            <Outlet />
          </div>
          <div style={{ flex: 1, backgroundColor: "#f8f8f8", padding: "20px" }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={3}
            >
              <DsaRoadmapAd />
              <JsCheatSheetAd />
            </Box>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
