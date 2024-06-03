// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MKTypography from "components/MKTypography";
import logoCT from "/assets/images/logos/armyLogo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
const date = new Date().getFullYear();
export default {
  brand: {
    name: "A.R.M.Y",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/RevTezerayared/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://x.com/GloryLifeChurch",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/@gospeltvethiopiaofficial9652",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/glorious.life.church/?hl=en",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "" },
        { name: "contact us", href: "" },
        { name: "events", href: "" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "web", href: "" },
        { name: "images", href: "" },
        { name: "funding", href: "" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "" },
        { name: "knowledge center", href: "" },
        { name: "custom development", href: "" },
        { name: "sponsorships", href: "" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "" },
        { name: "privacy policy", href: "" },
        { name: "licenses (EULA)", href: "" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} A.R.M.Y{" "}
      <MKTypography
        component="a"
        href="https://www.youtube.com/@gospeltvethiopiaofficial9652"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        GLC
      </MKTypography>
      .
    </MKTypography>
  ),
};
