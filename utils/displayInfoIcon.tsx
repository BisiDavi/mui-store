import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaidIcon from "@mui/icons-material/Paid";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";

export default function displayInfoIcon(icon: string) {
  switch (icon) {
    case "LocalShippingIcon":
      return <LocalShippingIcon />;
    case "AccessTimeIcon":
      return <AccessTimeIcon />;
    case "PaidIcon":
      return <PaidIcon />;
    case "AssuredWorkloadIcon":
      return <AssuredWorkloadIcon />;
  }
}
