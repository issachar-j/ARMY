// prop-types is a library for typechecking of props
import PropTypes from "prop-types"; // @mui material components
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack"; // @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
function CenteredFooter({ company, links, socials, light }) {
  const { href, name } = company;
  const year = new Date().getFullYear();
  const renderLinks = links.map((link) => (
    <MKTypography
      key={link.name}
      component={Link}
      href={link.href}
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {link.name}
    </MKTypography>
  ));
  const renderSocials = socials.map((social) => (
    <MKTypography
      key={social.link}
      component={Link}
      href={social.link}
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {social.icon}
    </MKTypography>
  ));
  return (
    <MKBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={{ xs: 2, lg: 3, xl: 6 }}
            mb={3}
          >
            {renderLinks}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
            {renderSocials}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <MKTypography variant="body2" color={light ? "white" : "secondary"}>
            Copyright &copy; {year} IT Team
            <MKTypography
              component={Link}
              href={href}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color={light ? "white" : "secondary"}
            >
              {name}
            </MKTypography>
            .
          </MKTypography>
        </Grid>
      </Grid>
    </MKBox>
  );
} // Setting default values for the props of CenteredFooter
CenteredFooter.defaultProps = {
  company: { href: "https://www.youtube.com/@gospeltvethiopiaofficial9652", name: "A.R.M.Y" },
  links: [
    { href: "https://www.youtube.com/@gospeltvethiopiaofficial9652", name: "Company" },
    { href: "https://www.facebook.com/RevTezerayared/", name: "About Us" },
    { href: "https://www.instagram.com/glorious.life.church/?hl=en", name: "Team" },
    { href: "https://www.instagram.com/glorious.life.church/?hl=en", name: "Products" },
    { href: "https://www.instagram.com/glorious.life.church/?hl=en", name: "Blog" },
  ],
  socials: [
    { icon: <FacebookIcon fontSize="small" />, link: "https://www.facebook.com/RevTezerayared/" },
    {
      icon: <TwitterIcon fontSize="small" />,
      link: "https://x.com/GloryLifeChurch",
    },
    {
      icon: <InstagramIcon fontSize="small" />,
      link: "https://www.instagram.com/glorious.life.church/?hl=en",
    },
  ],
  light: false,
}; // Typechecking props for the CenteredFooter
CenteredFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  socials: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  light: PropTypes.bool,
};
export default CenteredFooter;
