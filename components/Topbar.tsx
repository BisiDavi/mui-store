import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";

export default function Topbar() {
  return (
    <Box sx={{ backgroundColor: "green", height: "30px" }}>
      <Typography>🔥 Free Shipping - Express</Typography>
      <Box>
        <FacebookIcon />
        <Twitter />
        <Instagram />
      </Box>
    </Box>
  );
}
