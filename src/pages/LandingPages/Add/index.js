import React, { useState } from "react"; // @mui material components
import BaseLayout from "layouts/sections/components/BaseLayout";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./main.css";
import add from "../../../assets/icons/add_img.png";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  // onSnapshot,
  doc,
  // updateDoc,
  // deleteDoc,
  setDoc,
  // collection,
  // query,
  // where,
  // serverTimestamp,
} from "firebase/firestore";
import {
  // app,
  // auth,
  // added_for_no_reason,
  // added_for_no_reason,
  // added_for_no_reason,
  // added_for_no_reason,
  // added_for_no_reason,
  // added_for_no_reason,
  db,
  storage,
} from "../../../firebase.js";
import { v4 } from "uuid";
// function firebase_config() {
//   const collectionRef = collection(db, "users");
// }

function FormSimple() {
  const [image, setImage] = useState(null);
  const [UploadImg, setUploadImg] = useState(null);
  const [fileName, setFileName] = useState("No file selected");

  const [Month_v, setMonth] = useState();
  const [Day_v, setDay] = useState();
  const [Year_v, setYear] = useState();

  const [Age, setAge] = useState("");
  const [FullName, setFullName] = useState("");
  const [EducationalStatus, setEducationalStatus] = useState("");
  const [FoundationLevel, setFoundationLevel] = useState("");
  const [Gender, setGender] = useState("");
  const [BirthDate, setBirthDate] = useState("");
  const [SchoolName, setSchoolName] = useState("");
  const [SchoolAddress, setSchoolAddress] = useState("");
  const [ResidentialAddress, setResidentialAddress] = useState("");
  const [PhoneNum, setPhoneNum] = useState("");
  const [YearJoined, setYearJoined] = useState("");
  const [Email, setEmail] = useState("");
  const [Vision, setVision] = useState("");
  const [UImageURL, setUImageURL] = useState("");
  const [userId, setUid] = useState("");
  var arr = [
    FullName,
    EducationalStatus,
    FoundationLevel,
    Gender,
    BirthDate,
    SchoolName,
    SchoolAddress,
    ResidentialAddress,
    PhoneNum,
    YearJoined,
    Email,
    Vision,
  ];

  const handelClick = () => {
    console.log("FullName : ", FullName);
    console.log("EducationalStatus : ", EducationalStatus);
    console.log("FoundationLevel : ", FoundationLevel);
    console.log("Gender : ", Gender);
    console.log("BirthDate : ", BirthDate);
    console.log("SchoolName : ", SchoolName);
    console.log("SchoolAddress : ", SchoolAddress);
    console.log("ResidentialAddress : ", ResidentialAddress);
    console.log("PhoneNum : ", PhoneNum);
    console.log("YearJoined : ", YearJoined);
    console.log("Email : ", Email);
    console.log("Vision : ", Vision);

    if (arr.indexOf("") == -1) {
      var year = Year_v;
      var month = Month_v;
      var day = Day_v;
      var today = new Date();
      var age = today.getFullYear() - year;
      if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        age--;
      }
      setAge(age);
      if (UploadImg) {
        const imageRef = ref(storage, `user_imgs/${UploadImg.fileName + v4()}`);

        uploadBytes(imageRef, UploadImg)
          .then(() => {
            getDownloadURL(imageRef)
              .then((Url) => {
                setUImageURL(Url);
              })
              .then(() => {
                setUid(FullName.split(" ").join("_") + v4());
              })
              .then(() => {
                console.log(UImageURL);
                setDoc(doc(db, "users", userId), {
                  user_id: userId,
                  age: Age,
                  name: FullName,
                  educational_status: EducationalStatus,
                  foundation_level: FoundationLevel,
                  gender: Gender,
                  birth_date: BirthDate,
                  school_name: SchoolName,
                  school_address: SchoolAddress,
                  residential_address: ResidentialAddress,
                  phone_number: PhoneNum,
                  year_joined: YearJoined,
                  email: Email,
                  vision: Vision,
                  image: UImageURL,
                })
                  .then(() => {
                    window.alert(FullName + " was successfully registered as an ARMY");
                  })
                  .catch((err) => {
                    window.alert("Failed to register user, check console for more information");
                    console.log(err.message);
                  });
              });
          })
          .catch((err) => {
            window.alert("Failed to post, check console for more information");
            console.log(err.message);
          });
      } else {
        window.alert("Please upload an image");
      }
    } else {
      window.alert("Please enter all data");
    }
  };

  return (
    <>
      <BaseLayout
        title="Register new members"
        breadcrumb={[
          { label: "Home", route: "/home" },
          { label: "Registered members", route: "/Admin/Registered_Members" },
          { label: "Add members" },
        ]}
      >
        <MKBox component="section" py={12}>
          <Container>
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
                  <img src={image} className="img_new" />
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
            <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
              <MKBox width="100%" component="form" autoComplete="off">
                <MKBox p={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <MKInput
                        variant="standard"
                        label="Full Name"
                        fullWidth
                        required
                        inputProps={{ style: { textTransform: "capitalize" } }}
                        onChange={() => {
                          setFullName(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                        <FormLabel color="info" id="gender_radio">
                          Gender
                        </FormLabel>
                        <RadioGroup
                          required
                          row
                          aria-labelledby="gender_radio"
                          name="gender_radio"
                          onChange={() => setGender(event.target.value)}
                        >
                          <FormControlLabel
                            value="Female"
                            color="info"
                            control={<Radio size="large" />}
                            label="Female"
                          />
                          <FormControlLabel
                            value="Male"
                            color="info"
                            control={<Radio size="large" />}
                            label="Male"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                        <FormLabel color="info" id="edu_radio">
                          Educational Level
                        </FormLabel>
                        <RadioGroup
                          required
                          row
                          aria-labelledby="edu_radio"
                          name="edu_radio"
                          onChange={() => setEducationalStatus(event.target.value)}
                        >
                          <FormControlLabel
                            value="Highschool"
                            color="info"
                            control={<Radio size="large" />}
                            label="Highschool"
                          />
                          <FormControlLabel
                            value="College/University"
                            color="info"
                            control={<Radio size="large" />}
                            label="College/University"
                          />
                          <FormControlLabel
                            value="Employee"
                            color="info"
                            control={<Radio size="large" />}
                            label="Employee"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                        <FormLabel color="info" id="foundation_radio">
                          Foundation Level
                        </FormLabel>
                        <RadioGroup
                          required
                          row
                          aria-labelledby="foundation_radio"
                          name="foundation_radio"
                          onChange={() => setFoundationLevel(event.target.value)}
                        >
                          <FormControlLabel
                            value="Learning 1"
                            color="info"
                            control={<Radio size="large" />}
                            label="Learning 1"
                          />
                          <FormControlLabel
                            value="Completed 1"
                            color="info"
                            control={<Radio size="large" />}
                            label="Completed 1"
                          />
                          <FormControlLabel
                            value="Learning 2"
                            color="info"
                            control={<Radio size="large" />}
                            label="Learning 2"
                          />
                          <FormControlLabel
                            value="Completed 2"
                            color="info"
                            control={<Radio size="large" />}
                            label="Completed 2"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
                        <DatePicker
                          fullWidth
                          slotProps={{ textField: { variant: "standard" } }}
                          label="Date of Birth"
                          disableFuture
                          onChange={(value) => {
                            setBirthDate(`${value.$M + 1}-${value.$D}-${value.$y}`);
                            setMonth(value.$M);
                            setDay(value.$D);
                            setYear(value.$y);
                          }}
                          views={["month", "day", "year"]}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
                        <DatePicker
                          fullWidth
                          slotProps={{ textField: { variant: "standard" } }}
                          label="When Did You Join GLC"
                          disableFuture
                          onChange={(value) => {
                            setYearJoined(value.$y);
                          }}
                          views={["year"]}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        variant="standard"
                        label="School Name"
                        inputProps={{ style: { textTransform: "capitalize" } }}
                        fullWidth
                        required
                        onChange={() => setSchoolName(event.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        variant="standard"
                        label="School Address"
                        fullWidth
                        inputProps={{ style: { textTransform: "capitalize" } }}
                        required
                        onChange={() => setSchoolAddress(event.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        variant="standard"
                        label="Residence Address"
                        fullWidth
                        inputProps={{ style: { textTransform: "capitalize" } }}
                        required
                        onChange={() => setResidentialAddress(event.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        variant="standard"
                        defaultValue="09"
                        label="Phone Number"
                        inputProps={{ style: { textTransform: "capitalize" } }}
                        fullWidth
                        onChange={() => setPhoneNum(event.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        variant="standard"
                        type="email"
                        label="Email Address"
                        fullWidth
                        inputProps={{ style: { textTransform: "capitalize" } }}
                        required
                        onChange={() => setEmail(event.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        variant="standard"
                        label="Your Vision"
                        multiline
                        fullWidth
                        required
                        rows={6}
                        onChange={() => setVision(event.target.value)}
                      />
                    </Grid>
                    {/* <Grid item xs={12} alignItems="center" ml={-1}>
                    <Switch checked={checked} onChange={handleChecked} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      ml={-1}
                      sx={{ cursor: "pointer", userSelect: "none" }}
                      onClick={handleChecked}
                    >
                      &nbsp;&nbsp;I agree the&nbsp;
                    </MKTypography>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="button"
                      fontWeight="regular"
                      color="dark"
                    >
                      Terms and Conditions
                    </MKTypography>
                  </Grid> */}
                  </Grid>
                  <Grid container item justifyContent="center" xs={12} my={2}>
                    <MKButton
                      variant="gradient"
                      color="dark"
                      fullWidth
                      onClick={() => {
                        handelClick();
                      }}
                    >
                      Add Member
                    </MKButton>
                  </Grid>
                </MKBox>
              </MKBox>
            </Grid>
          </Container>
        </MKBox>
      </BaseLayout>
    </>
  );
}
export default FormSimple;
