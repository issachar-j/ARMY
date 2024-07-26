import ContactPageIcon from '@mui/icons-material/ContactPage';
import Posts from "pages/LandingPages/Posts"; // Sections
import Mess from "pages/LandingPages/Message"; // Sections
import Icon from "@mui/material/Icon";

const routes = [
  {
    name: "Posts",
    icon: <Icon>dashboard</Icon>,
    route: "/Posts",
    component: <Posts />,
  },
  {
    name: "Contact Us",
    route: "/Contact",
    icon: <ContactPageIcon />,
    component: <Mess />,
  },
];
export default routes;
