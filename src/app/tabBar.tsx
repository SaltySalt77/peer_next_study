"useClient";
import { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import UploadIcon from "@mui/icons-material/Upload";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useRouter } from "next/navigation";

const TabBar: React.FC<{ defaultTab: number }> = ({ defaultTab }) => {
  const [value, setValue] = useState<number>(defaultTab);
  const router = useRouter();
  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            // console.log(newValue);
            setValue(newValue);
            if (newValue === 1) {
              router.push("/upload");
            } else if (newValue === 2) {
              // router.push("/profile");
            } else {
              router.push("/");
            }
          }}
        >
          <BottomNavigationAction label="main" icon={<HomeIcon />} />
          <BottomNavigationAction label="upload" icon={<UploadIcon />} />
          <BottomNavigationAction label="profile" icon={<AccountBoxIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default TabBar;
