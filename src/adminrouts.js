import Icon from "@mui/material/Icon"; // @mui icons
import ContactPageIcon from '@mui/icons-material/ContactPage';
import SignIn from "pages/LandingPages/Add"; // Sections
import Contact from "pages/LandingPages/Members"; // Sections
import Mess from "pages/LandingPages/Message"; // Sections
import Posts from "pages/LandingPages/Posts"; // Sections

const routes = [
  {
    name: "Add Member",
    route: "/Admin/Add_Members",
    component: <SignIn />,
  },
  {
    name: "Registered Members",
    route: "/Admin/Registered_Members",
    component: <Contact />,
  },
  {
    name: "Posts",
    icon: <Icon>view_day</Icon>,
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
