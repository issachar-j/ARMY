import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography"; // Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard"; // Images
import team1 from "assets/custom/choir2.jpg";
import team2 from "assets/custom/choir3.jpg";
import team3 from "assets/bg/5.jpg";
import team4 from "assets/bg/14.jpg";
import team5 from "assets/custom/band.jpg";
import team6 from "assets/custom/chero1.jpg";
import team7 from "assets/custom/cleaning.jpg";
import team8 from "assets/custom/deacon.jpg";
import team9 from "assets/custom/ent1.jpg";
import team10 from "assets/custom/it.jpg";
// import team11 from "assets/custom/choir3.jpg";
// import team12 from "assets/custom/choir3.jpg";
import Carousel from "react-elastic-carousel";
import "./Team.css";
function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Service Sectors
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              1 Peter 4:10 - As each has received a gift, use it to serve one another, as good
              stewards of God&apos;s varied grace!
            </MKTypography>
          </Grid>
        </Grid>
        <Carousel>
          <MKBox mb={1} ml={2.5} mr={2.5} className="padding_top">
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={team1}
                    name="Prayer Team"
                    position={{ color: "info", label: "Colossians 4:2" }}
                    description="Serve the load with prayer!"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={team2}
                    name="Choir"
                    position={{ color: "info", label: "Psalm 105:2" }}
                    description="Serve the load with worship!"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={team3}
                    name="Literature"
                    position={{ color: "info", label: "Daniel 1:17" }}
                    description="Serve the load with your wisdom!"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={team4}
                    name="Sound Team"
                    position={{ color: "info", label: "Psalm 28:7" }}
                    description="Serve the load with your knowledge and skill!"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
          <MKBox mb={1} ml={2.5} mr={2.5} className="padding_top">
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={team9}
                    name="Entrepreneurs"
                    position={{ color: "info", label: "Deuteronomy 8:18" }}
                    description="Be God's money on earth!"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={team8}
                    name="Deacon"
                    position={{ color: "info", label: "Mark 10:45" }}
                    description="Serve the load by serving others!"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={team3}
                    name="Multimedia"
                    position={{ color: "info", label: "Psalm 100:2" }}
                    description="Serve the load with your knowledge and skill!"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={team6}
                    name="Cherography"
                    position={{ color: "info", label: "Psalm 95:6" }}
                    description="Serve the load with worship!"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
          <MKBox mb={1} ml={2.5} mr={2.5} className="padding_top">
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={team7}
                    name="Cleaning and Beauty"
                    position={{ color: "info", label: "1 Corinthians 15:58" }}
                    description="Serve the load by keeping his house beautiful!"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={team2}
                    name="Coordinators"
                    position={{ color: "info", label: "1 Corinthians 14:40" }}
                    description="Serve the load by serving others!"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={team5}
                    name="Band"
                    position={{ color: "info", label: "Ephesians 5:19" }}
                    description="Serve the load with your skill!"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={team10}
                    name="IT Team"
                    position={{ color: "info", label: "2 Chronicles 26:15 " }}
                    description="Serve the load with your knowledge and skill!"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Carousel>
      </Container>
    </MKBox>
  );
}
export default Team;
