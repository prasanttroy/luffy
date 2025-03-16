import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  ListItemIcon,
} from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Labels } from "../../Localization/EnglishStrings";
import { IMenuPath } from "../Navigation/INaviagtion.type";
import { COLOR } from "../../Color.palette";

export const Sidebar = (props: {
  paths: IMenuPath[];
  onSelectPath: (path: IMenuPath) => void;
}) => {
  const [menuOpen, setMenuOpen] = useState<{ [key: string]: boolean }>({});
  const location = useLocation();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleMenuClick = (menu: string) => {
    setMenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const handleSubItemClick = (path: IMenuPath) => {
    props.onSelectPath(path);
    navigate(path.path);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      anchor="left"
      open={drawerOpen}
      onClose={toggleDrawer}
      sx={{
        width: drawerOpen ? 240 : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          bgcolor: COLOR.BodyShadeColor,
        },
      }}
    >
      {/* Sidebar Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)", // Light separator
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", cursor: "pointer", color: COLOR.Primary }}
          onClick={() => navigate("/")}
        >
          {Labels.AppName}
        </Typography>
      </Box>

      {/* Menu List */}
      <List>
        {props.paths.map((menu) => (
          <div key={menu.title}>
            {/* Parent List Item */}
            <ListItemButton
              onClick={() => handleMenuClick(menu.title)}
              selected={location.pathname === menu.path}
              sx={{ padding: "8px 16px" }}
            >
              {/* Left-side Icon */}
              {menu.icon && (
                <ListItemIcon sx={{ minWidth: 36 }}>{menu.icon}</ListItemIcon>
              )}
              <ListItemText
                primaryTypographyProps={{ fontSize: "0.875rem" }}
                primary={menu.title}
              />
              {/* Expand/Collapse Icon */}
              {menu.subItems ? (
                menuOpen[menu.title] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItemButton>

            {/* Sublist Items */}
            <Collapse in={menuOpen[menu.title]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {menu.subItems?.map((sub) => (
                  <ListItemButton
                    key={sub.title}
                    sx={{ pl: 4, padding: "4px 48px" }} // Adjust padding for better structure
                    onClick={() => handleSubItemClick(sub)}
                    selected={location.pathname === sub.path}
                  >
                    <ListItemText
                      primary={sub.title}
                      primaryTypographyProps={{ fontSize: "0.875rem" }}
                    />
                    {/* Right-side Icon */}
                    {sub.icon && (
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        {sub.icon}
                      </ListItemIcon>
                    )}
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Drawer>
  );
};
