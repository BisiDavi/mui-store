import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function BestSellingCategories() {
  return (
    <Box>
      <Typography>Best Selling Categories</Typography>
      <Grid container>
        <Grid xs={12} md={6} lg={3}></Grid>
      </Grid>
    </Box>
  );
}
