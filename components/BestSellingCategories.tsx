import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";

import featured from "@/json/featured.json";
import { Paper } from "@mui/material";

export default function BestSellingCategories() {
  return (
    <Box sx={{my:6}}>
      <Typography>Best Selling Categories</Typography>
      <Grid container spacing={4}>
        {featured.categories.map((category) => (
          <Grid xs={12} md={6} lg={3} key={category.title}>
            <Paper>
              <Image
                src={category.img}
                alt={category.title}
                height={400}
                width={400}
              />
              <Box>
                <Typography>{category.title}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
