import PropTypes from "prop-types";
// @mui material components
// import Icon from "@mui/material/Icon";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import SERVICE from "assets/images/i-service.png";
import LESSON from "assets/images/i-lesson.png";
import BIBLE from "assets/images/i-bible.png";
import HUG from "assets/images/i-hug.png";
import "./index.css";
function DefaultInfoCard({ color, icon, title, description, direction, small }) {
  return (
    <MKBox lineHeight={1} p={direction === "center" ? 2 : 0} textAlign={direction}>
      {icon == "hug" ? (
        <MKTypography
          display="block"
          variant={direction === "center" ? "h2" : "h3"}
          color={color}
          textGradient
        >
          {" "}
          <img className="icon" src={HUG}></img>{" "}
        </MKTypography>
      ) : icon == "service" ? (
        <MKTypography
          display="block"
          variant={direction === "center" ? "h2" : "h3"}
          color={color}
          textGradient
        >
          {" "}
          <img className="icon" src={SERVICE}></img>{" "}
        </MKTypography>
      ) : icon == "lesson" ? (
        <MKTypography
          display="block"
          variant={direction === "center" ? "h2" : "h3"}
          color={color}
          textGradient
        >
          {" "}
          <img className="icon" src={LESSON}></img>{" "}
        </MKTypography>
      ) : (
        <MKTypography
          display="block"
          variant={direction === "center" ? "h2" : "h3"}
          color={color}
          textGradient
        >
          {" "}
          <img className="icon" src={BIBLE}></img>{" "}
        </MKTypography>
      )}
      <MKTypography
        display="block"
        variant="5"
        fontWeight="bold"
        mt={direction === "center" ? 1 : 2}
        mb={1.5}
      >
        {title}
      </MKTypography>
      <MKTypography
        display="block"
        variant={small ? "button" : "body2"}
        color="text"
        pr={direction === "left" ? 6 : 0}
        pl={direction === "right" ? 6 : 0}
        className="stst"
      >
        {description}
      </MKTypography>
    </MKBox>
  );
} // Setting default props for the DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  direction: "left",
  small: false,
}; // Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right", "center"]),
  small: PropTypes.bool,
};
export default DefaultInfoCard;
