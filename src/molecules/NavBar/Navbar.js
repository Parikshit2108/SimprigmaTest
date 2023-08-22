import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <AppBar>
        <Toolbar
          sx={{
            backgroundColor: "#ffff",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ color: "black" }}>Parikshit Patil</Typography>
          <Typography
            sx={{ color: "black" }}
            onClick={() => (window.location.href = "localhost:3000")}
          >
            Home
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
