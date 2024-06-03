import * as React from "react";
import BaseLayout from "layouts/sections/components/BaseLayout";
import Grid from "@mui/material/Grid";
import Contact from "../AboutUs/sections/Contact.js";

function ContactUs() {
  return (
    <>
      <BaseLayout
        title="Contact Us"
        breadcrumb={[{ label: "Home", route: "/home" }, { label: "Contact Us" }]}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mt: 10 }}
        >
          <div>
            <Contact />
          </div>
        </Grid>
      </BaseLayout>
    </>
  );
}

export default ContactUs;
