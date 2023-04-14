import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import info_banner from "@/json/info_banner.json";
import displayInfoIcon from "@/utils/displayInfoIcon";

export default function InfoBanner() {
  return (
    <Paper sx={{ display: "flex" }}>
      {info_banner.map((item) => (
        <Box key={item.title}>
          {displayInfoIcon(item.icon)}
          <Typography component="h3">{item.title}</Typography>
          <Typography component="p">{item.text}</Typography>
        </Box>
      ))}
    </Paper>
  );
}
