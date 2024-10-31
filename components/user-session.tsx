"use client";
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Session } from "next-auth";
import React, { Fragment } from "react";
import NextImage from "next/image";
import { Logout, Settings } from "@mui/icons-material";
import { useRouter } from "next/navigation";

function UserSession({ session }: { session: Session }) {
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
      <Tooltip title="Account settings">
        <Avatar
          sx={{ width: 40, height: 40, cursor: "pointer" }}
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <NextImage
            src={session?.user?.image ?? ""}
            alt={session?.user?.name ?? ""}
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
            router.push(`/profile/${session.user?.email?.split("@")[0]}`)
          }
        >
          <Avatar sx={{ width: 50, height: 50, cursor: "pointer" }}>
            <NextImage
              src={session?.user?.image ?? ""}
              alt={session?.user?.name ?? ""}
              width={50}
              height={50}
            />
          </Avatar>
          <Box className="flex flex-col ml-3">
            <Box className="font-bold text-lg">{session.user?.name}</Box>
            <Box className="text-sx text-muted-foreground">
              {session.user?.email}
            </Box>
          </Box>
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
  );
}

export default UserSession;
