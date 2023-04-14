import Box from "@mui/material/Box";

import Logo from "@/components/Logo";
import Search from "@/components/Search";

export default function Header() {
  return (
    <Box component="header">
      <Logo />
      <Search />
    </Box>
  );
}
