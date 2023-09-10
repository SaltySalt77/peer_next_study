"use client";
import React from "react";
import TabBar from "../tabBar";
import { Box } from "@mui/material";

const page = () => {
  return (
    <Box>
      <h1>This is a upload page</h1>
      <TabBar defaultTab={1} />
    </Box>
  );
};

export default page;
