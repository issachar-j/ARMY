import ViewDayIcon from '@mui/icons-material/ViewDay';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Posts from "pages/LandingPages/Posts"; // Sections
import Mess from "pages/LandingPages/Message"; // Sections

const routes = [
  {
    name: "Posts",
    icon: <ViewDayIcon />,
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
