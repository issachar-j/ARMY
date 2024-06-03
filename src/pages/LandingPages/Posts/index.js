import * as React from "react";
import { useState, useEffect } from "react";
import BaseLayout from "layouts/sections/components/BaseLayout";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Material Kit 2 React components
import MKBox from "components/MKBox";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import MKTypography from "components/MKTypography"; // Material Kit 2 React components
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard"; // Images
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase.js";

function ContactUs() {
  const [page_one, setPage_one] = useState([]);
  const colref = collection(db, "blog_post");

  useEffect(() => {
    const unsub = onSnapshot(colref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      update(items);
    });
    return () => {
      unsub();
    };
  }, []);

  function update(params) {
    setPage_one(params);
  }

  console.log(page_one);

  return (
    <>
      <BaseLayout
        title="Posts"
        breadcrumb={[{ label: "Home", route: "/home" }, { label: "Posts" }]}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mt: -10 }}
        >
          <MKBox
            component="section"
            style={{ display: "flex", felxDirection: "column" }}
            py={2}
            mt={10}
          >
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
              }}
            >
              {page_one.length > 0 ? (
                <Grid container spacing={3}>
                  {page_one.map((post) => (
                    <Grid key={post.event_id} item xs={12} sm={6} lg={3}>
                      {post.blog_type_full ? (
                        <BackgroundBlogCard
                          image={post.event_image}
                          title={post.event_name}
                          description={post.event_body}
                          action={{
                            type: "external",
                            route: "",
                            label: "read more",
                            color: "info",
                          }}
                        />
                      ) : (
                        <TransparentBlogCard
                          image={post.event_image}
                          title={post.event_name}
                          description={post.event_body}
                          action={{
                            type: "external",
                            route: "",
                            label: "read more",
                            color: "info",
                          }}
                        />
                      )}
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <MKTypography variant="h3" mb={6} style={{ marginLeft: 15 }}>
                  Sorry, No Posts Yet
                </MKTypography>
              )}
            </Container>
          </MKBox>
        </Grid>
      </BaseLayout>
    </>
  );
}

export default ContactUs;
