"use client";
import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React, { Fragment } from "react";
import NextImage from "next/image";
import { Logout, Settings } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import NightlightTwoToneIcon from "@mui/icons-material/NightlightTwoTone";
import IconButton from "@mui/material/IconButton";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@mui/material";
import { useMounted } from "../../hook";

const UserSession = () => {
  const { data } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();
  return (
    <Fragment>
      {!data ? (
        <Button
          variant="contained"
          onClick={() => signIn("google", { callbackUrl: "/speaking-club" })}
        >
          Sign In
        </Button>
      ) : (
        <Fragment>
          <Tooltip title="Account settings">
            <Avatar
              sx={{ width: 40, height: 40, cursor: "pointer" }}
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <NextImage
                src={data?.user?.image ?? ""}
                alt={data?.user?.name ?? ""}
                width={40}
                height={40}
              />
            </Avatar>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              sx={{
                height: "100%",
              }}
              onClick={() =>
                router.push(`/profile/${data?.user?.email?.split("@")[0]}`)
              }
            >
              <Avatar sx={{ width: 50, height: 50, cursor: "pointer" }}>
                <NextImage
                  src={data?.user?.image ?? ""}
                  alt={data?.user?.name ?? ""}
                  width={50}
                  height={50}
                />
              </Avatar>
              <div className="flex flex-col ml-3">
                <div className="font-bold text-lg">{data?.user?.name}</div>
                <div className="text-sx text-muted-foreground">
                  {data?.user?.email}
                </div>
              </div>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Fragment>
      )}
    </Fragment>
  );
};
function MainHeader() {
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();
  if (!mounted) return null;
  return (
    <header className="flex items-center justify-between gap-12 py-3 flex-grow max-w-[1400px]">
      <div className="font-bold text-3xl bg-gradient-to-r from-blue-400 to-violet-900 text-transparent bg-clip-text hover:cursor-pointer">
        Cam's English
      </div>
      <div className="flex items-center gap-3">
        <IconButton
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          color="inherit"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <NightlightTwoToneIcon color="primary" />
          ) : (
            <LightModeTwoToneIcon color="primary" />
          )}
        </IconButton>
        <UserSession />
      </div>
    </header>
  );
}

export default MainHeader;
