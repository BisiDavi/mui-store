import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function Banner() {
  return (
    <Grid container>
      <Grid md={6} xs={12}>
        <Typography component="h1">Fashionable</Typography>
        <Typography component="h1">Collection</Typography>
        <Typography component="h6">
          Get free shipping on all orders over $100.00
        </Typography>
        <Button>Shop Now</Button>
      </Grid>
      <Grid md={6} xs={12}></Grid>
    </Grid>
  );
}
