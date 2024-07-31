import ContactPageIcon from '@mui/icons-material/ContactPage';
import SignIn from "pages/LandingPages/Add"; // Sections
import Contact from "pages/LandingPages/Members"; // Sections
import Mess from "pages/LandingPages/Message"; // Sections
import Posts from "pages/LandingPages/Posts"; // Sections
import Icon from "@mui/material/Icon";

const routes = [
  {
    name: "Add Member",
    route: "/Admin/Add_Members",
    component: <SignIn />,
  },
  {
    name: "Posts",
    icon: <Icon>dashboard</Icon>,
    route: "/Admin/Posts",
    component: <Posts />,
  },
  {
    name: "Contact Us",
    route: "/Admin/Contact",
    icon: <ContactPageIcon />,
    component: <Mess />,
  },
];
export default routes;
