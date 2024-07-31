/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

import "./information.css";

function Info() {
  return (
    <MKBox className="marr z-index" component="section" py={6} my={6}>
      <Container>
        <Grid className="container-info" container item xs={11} spacing={2} alignItems="center" sx={{ mx: "auto" }}>
          <div className="info-cont">
            <div className="info-header">- summer camp -</div>
            <div className="info-title">Change your life with one week!</div>
            <div className="info-body">
              Learn and grow with the word of God with us at the annual week-long summer camp hosted by A.R.M.Y GLC!!
            </div>
          </div>
          <Grid className="padding" item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Feel the
                    <br />
                    Presence of God
                  </>
                }
                description="A week of for the spirit!! A week of renewal! a week of change!"
              />
              <RotatingCardBack
                image={bgBack}
                title="Have A Better Life!"
                description="Register today and let the word of God and his divine Spirit transform your life!!."
                action={{
                  type: "internal",
                  route: "",
                  label: "contact us today!",
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Info;
