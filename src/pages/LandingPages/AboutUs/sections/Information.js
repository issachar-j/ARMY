import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Material Kit 2 React components
import MKBox from "components/MKBox"; // Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import img from "/assets/images/logos/glcLogo.png";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="hug"
                    title="Familyhood"
                    description="The connection we have between us is what keeps the fire alive!"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="service"
                    title="Serve God how you want to"
                    description="Find yourself serving God in one of the 11 service sectors!"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="bible"
                    title="Full of the word"
                    description="'Your word is a lamp for my feet, a light on my path.' - Psalm 119:105 (NIV)"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="lesson"
                    title="Life changing lessons"
                    description="Learn new and relatable things weekly and shape your life with God's word!"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={img}
              title="Our Church"
              description=""
              action={{
                type: "external",
                route: "https://t.me/QueenAssaye",
                color: "info",
                label: "Regester here, be part of our family",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
export default Information;
