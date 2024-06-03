import MKBox from "components/MKBox";
import img from "/assets/images/13.jpg";
import MKTypography from "components/MKTypography";
import map from "/assets/icons/map.png";
import "./visit.css";
function Visit() {
  return (
    <MKBox
      component="section"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.state, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
      }}
      className="bg_visit"
    >
      <div className="img_visit"></div>
      <div className="white_visit">
        <MKTypography
          variant="h2"
          color="white"
          opacity={1}
          mt={1}
          mb={0}
          style={{
            fontSize: "2.7rem",
            display: "flex",
            columnGap: 15,
            flexWrap: "wrap",
          }}
          className="hidden"
        >
          <div>We</div>
          <div className="focus">
            <div className="focus--mask">
              <div className="focus--mask-inner">Focus</div>
            </div>
          </div>
          <div>On</div>
          <div>The</div>
          <div>Word</div>
          <div>Of</div>
          <div>God!</div>
        </MKTypography>

        <MKTypography
          variant="h2"
          color="white"
          opacity={1}
          mt={1}
          mb={0}
          style={{
            fontSize: "2 rem",
            display: "flex",
            columnGap: 15,
            flexWrap: "wrap",
          }}
          className="shown"
        >
          We Focus On The Word Of God!
        </MKTypography>

        <MKTypography
          variant="body1"
          color="white"
          opacity={1}
          mt={1}
          mb={0}
          className="hidden_sml"
          style={{ textTransform: "capitalize", paddingRight: 90, fontWeight: 700 }}
        >
          Come join us this saturday at 10:00 Local time! you&apos;ll be amazed how your life will
          start to shift!
        </MKTypography>

        <MKTypography
          variant="body1"
          color="#344767"
          opacity={1}
          mt={1}
          mb={0}
          className="hidden_sml_2"
          style={{ textTransform: "capitalize", paddingRight: 7, fontWeight: 700 }}
        >
          Come join us this saturday at 10:00 Local time!
        </MKTypography>

        <div>
          <MKTypography variant="body1" color="white" opacity={1} mt={1} mb={0} className="para">
            <a
              target="blank"
              href="https://www.google.com/maps/place/Glorious+Life+Church+Excellence+Dome/@9.0148875,38.795953,20z/data=!4m6!3m5!1s0x164b856bbd22d02b:0xc4dac4f20f1fcf36!8m2!3d9.0147439!4d38.7958249!16s%2Fg%2F11g6wv1pc4?entry=ttu"
              style={{ color: "white" }}
              className="aa"
            >
              Our Location
              <img className="blinkImg" src={map} />
            </a>
          </MKTypography>
        </div>
      </div>
    </MKBox>
  );
}
export default Visit;
