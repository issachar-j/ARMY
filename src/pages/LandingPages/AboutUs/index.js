import React, { useState, useEffect } from "react"; // @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card"; // Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton"; // Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter"; // About Us page sections
import Information from "./sections/Information.js";
import Visit from "./sections/Visit.js";
import Team from "./sections/Team.js";
import Posts from "./sections/Posts.js";
import Contact from "./sections/Contact.js"; // Routes
import routes from "routes";
import adminrouts from "../../../adminrouts.js";
import footerRoutes from "footer.routes"; // Images
import bgImage from "assets/images/bg-about-us.jpg";
import aLogo from "assets/images/logos/armyLogo.png";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide"; // @mui icons
import CloseIcon from "@mui/icons-material/Close"; // Material Kit 2 React components
import MKInput from "components/MKInput";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MKAlert from "components/MKAlert";

import "./index.css";
// import logo from "assets/images/logos/logo.png";// custom css

// import {
//   // onSnapshot,
//   // doc,
//   // updateDoc,
//   // deleteDoc,
//   // setDoc,
//   collection,
//   // query,
//   // where,
//   // serverTimestamp,
// } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  app,
  // auth,
  // added_for_no_reason,
  // added_for_no_reason,
  // added_for_no_reason,
  // added_for_no_reason,
  // added_for_no_reason,
  // added_for_no_reason,
  // db,
} from "../../../firebase.js";

// function firebase_config() {
//   const collectionRef = collection(db, "users");
// }

function AboutUs() {
  const auth_check = getAuth(app);
  const [admin, setAdmin] = useState(false);
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

  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  const [LogIn, setLogIn] = useState(false);
  const toggleLog = () => setLogIn(!LogIn);

  const [showPassword, setShowPassword] = React.useState(false);

  const [Sign_In_Name, setName] = useState("");
  const [Sign_In_Email, setEmail] = useState("");
  const [Sign_In_Password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <DefaultNavbar
        routes={admin ? adminrouts : routes}
        // transparent
        light
        brand={<img src={aLogo} className="MainLogo"></img>}
      />
      <MKBox
        minHeight="90vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.state, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
            className="card_main"
          >
            {/* <img src={aLogo} alt="img" className="LogoImage"></img> */}
            <MKTypography variant="h2" color="white" opacity={1} mt={1} mb={0} className="mb large">
              <div className="showup">
                <b className="gradtxt">A</b>nointed .
              </div>
              <div className="reveal">
                <span>
                  <b className="gradtxt">R</b>eigning . <b className="gradtxt">M</b>ighty .{" "}
                  <b className="gradtxt">Y</b>outh
                </span>
              </div>
            </MKTypography>
            <MKTypography variant="h2" color="white" opacity={1} mt={1} mb={0} className="mb small">
              <b className="gradtxt">A </b>. <b className="gradtxt">R </b>.{" "}
              <b className="gradtxt">M </b>. <b className="gradtxt">Y</b>
            </MKTypography>

            <MKTypography variant="body1" color="white" opacity={1} mt={1} mb={3}>
              Raising a youth that is full of God&apos;s word and spirit and will be a blessing to
              the generation in all directions
            </MKTypography>
            <MKButton
              size="large"
              color="default"
              sx={{ color: ({ palette: { dark } }) => dark.main }}
              onClick={toggleModal}
            >
              Join Us Today
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Visit />
        <Team />
        <Posts />
        <Contact />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
      <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
        <Slide direction="down" in={show} timeout={500}>
          {LogIn ? (
            <MKBox
              position="relative"
              width="500px"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
              className="wid"
            >
              <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">Log In</MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <MKBox p={5}>
                <MKInput
                  variant="standard"
                  type="email"
                  label="Email"
                  fullWidth
                  className="margin_bottom"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <FormControl fullWidth variant="standard">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    id="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <MKAlert
                  variant="body2"
                  color="secondary"
                  fontWeight="regular"
                  className="margin_top_l"
                >
                  <a href="https://t.me/QueenAssaye" target="blank" className="link_text">
                    Click here to contact the page&apos;s admin and register as an official member
                    in our community
                  </a>
                </MKAlert>
              </MKBox>
              <MKBox display="flex" justifyContent="space-between" p={1.5}>
                <MKButton variant="gradient" color="dark" onClick={toggleLog}>
                  Create an account?
                </MKButton>
                <MKButton
                  variant="gradient"
                  color="info"
                  onClick={() => {
                    if (Sign_In_Email != "" && Sign_In_Password != "") {
                      signInWithEmailAndPassword(auth_check, Sign_In_Email, Sign_In_Password)
                        .then(() => {
                          window.alert(`welcom back`);
                          toggleModal();
                        })
                        .catch((error) => {
                          const errorMessage = error.message;
                          console.log(errorMessage);
                          if (errorMessage == "Firebase: Error (auth/network-request-failed).") {
                            window.alert("Please check your internet connection");
                          } else if (errorMessage == "Firebase: Error (auth/invalid-email).") {
                            window.alert("Incorrect Email, Please use a correct format.");
                          } else if (errorMessage == "Firebase: Error (auth/invalid-credential).") {
                            window.alert("Wrong Email or Password");
                          } else {
                            window.alert(
                              "Something went wrong, please check and try again or contact us directly"
                            );
                          }
                        });
                    } else {
                      window.alert("Please fill all fields");
                    }
                  }}
                >
                  Log In
                </MKButton>
              </MKBox>
            </MKBox>
          ) : (
            <MKBox
              position="relative"
              width="500px"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
              className="wid"
            >
              <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">Sign In</MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <MKBox p={5}>
                <MKInput
                  variant="standard"
                  label="Name"
                  fullWidth
                  className="margin_bottom"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <MKInput
                  variant="standard"
                  type="email"
                  label="Email"
                  fullWidth
                  className="margin_bottom"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <FormControl fullWidth variant="standard">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    id="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <MKAlert
                  variant="body2"
                  color="secondary"
                  fontWeight="regular"
                  className="margin_top_l"
                >
                  <a href="https://t.me/QueenAssaye" target="blank" className="link_text">
                    Click here to contact the page&apos;s admin and register as an official member
                    in our community
                  </a>
                </MKAlert>
              </MKBox>
              <MKBox display="flex" justifyContent="space-between" p={1.5}>
                <MKButton variant="gradient" color="dark" onClick={toggleLog}>
                  have an account?
                </MKButton>
                <MKButton
                  variant="gradient"
                  color="info"
                  onClick={() => {
                    if (Sign_In_Email != "" && Sign_In_Password != "" && Sign_In_Name != "") {
                      if (Sign_In_Password.length >= 6) {
                        createUserWithEmailAndPassword(auth_check, Sign_In_Email, Sign_In_Password)
                          .then(() => {
                            updateProfile(auth_check.currentUser, {
                              displayName: Sign_In_Name,
                            }).then(() => {
                              window.alert(`welcom ${Sign_In_Name}`);
                            });
                            toggleModal();
                          })
                          .catch((error) => {
                            const errorMessage = error.message;
                            console.log(errorMessage);
                            if (errorMessage == "Firebase: Error (auth/network-request-failed).") {
                              window.alert("Please check your internet connection");
                            } else if (
                              errorMessage == "Firebase: Error (auth/email-already-in-use)."
                            ) {
                              window.alert(
                                "Email already in use, either use another Email or click on the 'Have an account' option"
                              );
                            } else if (errorMessage == "Firebase: Error (auth/invalid-email).") {
                              window.alert("Incorrect Email, Please use a correct format.");
                            } else {
                              window.alert(
                                "Something went wrong, please check and try again or contact us directly"
                              );
                            }
                          });
                      } else {
                        window.alert("Password should be at least 6 characters");
                      }
                    } else {
                      window.alert("Please fill all fields");
                    }
                  }}
                >
                  Sign in
                </MKButton>
              </MKBox>
            </MKBox>
          )}
        </Slide>
      </Modal>
    </>
  );
}
export default AboutUs;
