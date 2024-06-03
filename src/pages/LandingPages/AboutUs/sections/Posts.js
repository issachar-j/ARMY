import { useEffect, useState } from "react";
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography"; // Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import MKButton from "components/MKButton"; // Material Kit 2 React examples
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard"; // Images
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "./post.css";
import { collection, setDoc, doc, onSnapshot } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, app, storage } from "../../../../firebase.js";
import Carousel from "react-elastic-carousel";
import { v4 } from "uuid";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import add from "../../../../assets/icons/add_img.png";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide"; // @mui icons
import CloseIcon from "@mui/icons-material/Close"; // Material Kit 2 React components
import MKInput from "components/MKInput";

function Places() {
  const auth_check = getAuth(app);
  const [admin, setAdmin] = useState(false);
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  useEffect(() => {
    onAuthStateChanged(auth_check, (user) => {
      if (user) {
        const email = user.email;
        const name = user.displayName;
        if (email == "armyadmin_f63x@gmail.com") {
          setAdmin(true);
        } else {
          setAdmin(false);
        }
        console.log("logged in as : ", email, "name is : ", name);
      } else {
        console.log("not logged in");
      }
    });
  }, []);

  const colref = collection(db, "blog_post");
  const [page_one, setPage_one] = useState([]);
  const [UploadImg, setUploadImg] = useState(null);

  const [event_name, setEname] = useState("");
  const [event_body, setEbody] = useState("");
  const [userId, setUid] = useState("");
  const [UImageURL, setUImageURL] = useState("");
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    window.alert(event.target.checked);
  };
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No file selected");
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
    setPage_one([...params.slice(0, 10)]);
  }

  var arr = [event_name, event_body, UploadImg, checked];
  const handelClick = () => {
    console.log("event_name : ", event_name);
    console.log("event_body : ", event_body);
    console.log("UploadImg : ", UploadImg);
    console.log("checked : ", checked);

    if (arr.indexOf("") == -1) {
      if (UploadImg) {
        const imageRef = ref(storage, `post_imgs/${UploadImg.fileName + v4()}`);

        uploadBytes(imageRef, UploadImg).then(() => {
          getDownloadURL(imageRef)
            .then((Url) => {
              setUImageURL(Url);
            })
            .then(() => {
              setUid(event_name.split(" ").join("_") + v4());
            })
            .then(() => {
              setDoc(doc(db, "blog_post", userId), {
                event_id: userId,
                event_name: event_name,
                event_body: event_body,
                event_image: UImageURL,
                blog_type_full: checked,
              })
                .then(() => {
                  window.alert(event_name + " was successfully posted");
                  toggleModal();
                })
                .catch((err) => {
                  window.alert("Failed to post, check console for more information");
                  console.log(err.message);
                });
            })
            .catch((err) => {
              window.alert("Failed to post, check console for more information");
              console.log(err.message);
            });
        });
      } else {
        window.alert("Please upload an image");
      }
    } else {
      window.alert("Please enter all data");
    }
  };

  return (
    <MKBox component="section" style={{ display: "flex", flexDirection: "column" }} py={2} mt={10}>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        {admin ? (
          <Grid
            container
            item
            xs={12}
            lg={6}
            style={{ display: "flex", flexDirection: "row", columnGap: 10, marginBottom: 20 }}
          >
            <MKTypography variant="h3" mb={6}>
              Check our latest activites
            </MKTypography>
            <MKButton
              size="large"
              color="info"
              style={{ height: 30, marginBottom: 30 }}
              sx={{ color: ({ palette: { dark } }) => dark.main }}
              onClick={toggleModal}
            >
              Add Post
            </MKButton>
          </Grid>
        ) : (
          <Grid container item xs={12} lg={6} style={{ marginBottom: 20 }}>
            <MKTypography variant="h3" mb={6}>
              Check our latest activites
            </MKTypography>
          </Grid>
        )}

        {page_one.length > 0 ? (
          page_one.length > 4 ? (
            <Grid container style={{ width: "90vw", alignSelf: "center" }} spacing={3}>
              <Carousel itemsToShow={4} className="show4">
                {page_one.map((post) => (
                  <Grid key={post.event_id} item xs={12} sm={12} lg={12} className="mr">
                    {post.blog_type_full ? (
                      <BackgroundBlogCard
                        className="mr"
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
                        className="mr"
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
              </Carousel>
              <Carousel itemsToShow={3} className="show3">
                {page_one.map((post) => (
                  <Grid key={post.event_id} item xs={12} sm={12} lg={12} className="mr">
                    {post.blog_type_full ? (
                      <BackgroundBlogCard
                        className="mr"
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
                        className="mr"
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
              </Carousel>
              <Carousel itemsToShow={2} className="show2">
                {page_one.map((post) => (
                  <Grid key={post.event_id} item xs={12} sm={12} lg={12} className="mr">
                    {post.blog_type_full ? (
                      <BackgroundBlogCard
                        className="mr"
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
                        className="mr"
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
              </Carousel>
              <Carousel itemsToShow={1} className="show1">
                {page_one.map((post) => (
                  <Grid key={post.event_id} item xs={12} sm={12} lg={12} className="mr">
                    {post.blog_type_full ? (
                      <BackgroundBlogCard
                        className="mr"
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
                        className="mr"
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
              </Carousel>
            </Grid>
          ) : (
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
          )
        ) : (
          <MKTypography variant="h3" mb={6} style={{ marginLeft: 15 }}>
            Sorry, No Posts Yet
          </MKTypography>
        )}
      </Container>

      <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
        <Slide direction="down" in={show} timeout={500}>
          <MKBox
            position="relative"
            width="500px"
            className="ovf wid"
            display="flex"
            flexDirection="column"
            borderRadius="xl"
            bgColor="white"
            shadow="xl"
          >
            <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
              <MKTypography variant="h5">New Post</MKTypography>
              <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
            </MKBox>
            <Divider sx={{ my: 0 }} />
            <MKBox p={5}>
              <Grid container justifyContent="center" alignItems="center" flexDirection="column">
                <form
                  className={image ? "upload_new" : "upload"}
                  onClick={() => document.querySelector(".file_input").click()}
                >
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    required
                    className="file_input"
                    onChange={({ target: { files } }) => {
                      files[0] && setFileName(files[0].name);
                      if (files) {
                        setImage(URL.createObjectURL(files[0]));
                        setUploadImg(files[0]);

                        console.log("url", URL.createObjectURL(files[0]));
                        console.log(files[0]);
                      }
                    }}
                  />

                  {image ? (
                    <img src={image} className="img_new_n" />
                  ) : (
                    <img alt={fileName} src={add} className="img_n" />
                  )}
                </form>
                {image ? (
                  <MKTypography variant="caption" color="text">
                    (click the picture to change)
                  </MKTypography>
                ) : null}
              </Grid>
              <MKInput
                variant="standard"
                label="Event Name"
                inputProps={{ style: { textTransform: "capitalize" } }}
                fullWidth
                className="margin_bottom"
                onChange={(e) => {
                  setEname(e.target.value);
                }}
              />
              <MKInput
                onChange={(e) => {
                  setEbody(e.target.value);
                }}
                multiline
                variant="standard"
                fullWidth
                required
                rows={6}
                label="Description"
              />
            </MKBox>
            <MKBox display="flex" justifyContent="space-between" p={1.5}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Full Body"
                />
              </FormGroup>

              <MKButton
                variant="gradient"
                color="info"
                style={{ alignSelf: "flex-end" }}
                onClick={() => {
                  handelClick();
                }}
              >
                Post Blog
              </MKButton>
            </MKBox>
          </MKBox>
        </Slide>
      </Modal>
    </MKBox>
  );
}
export default Places;
