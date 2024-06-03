import * as React from "react";
import { useState, useEffect } from "react";
import BaseLayout from "layouts/sections/components/BaseLayout";
// import MKBox from "components/MKBox";
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import MKTypography from "components/MKTypography";
// import routes from "routes";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.js";
import "./style.css";
import alt_img from "../../../assets/icons/alt_img.png";

function ContactUs() {
  const columns = [
    {
      field: "image",
      headerName: "",
      width: 55,
      editable: true,
      renderCell: (params) => (
        <img
          src={params.value ? params.value : alt_img}
          className={params.value ? "img" : "img_alt"}
        />
      ), // renderCell will render the component
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      editable: false,
    },
    {
      field: "age",
      headerName: "Age",
      width: 80,
      editable: false,
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      width: 150,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: false,
    },
    {
      field: "residential_address",
      headerName: "Residence",
      width: 150,
      editable: false,
    },
    {
      field: "foundation_level",
      headerName: "Foundation",
      width: 150,
      editable: false,
    },
  ];

  const [rows, setR] = useState([]);
  var users = [];
  useEffect(() => {
    const colref = collection(db, "users");

    getDocs(colref)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          users.push({ ...doc.data() });
        });
        setR([...users]);
        console.log(users);
        console.log("data : ", rows);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <BaseLayout
        title="Registered members"
        breadcrumb={[
          { label: "Home", route: "/ARMY/home" },
          { label: "Add members", route: "/ARMY/Admin/Add_Members" },
          { label: "Registered members" },
        ]}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mt: 10 }}
        >
          <div>
            <Box sx={{ height: 620, width: "100%" }}>
              <DataGrid
                getRowId={(row) => row.user_id}
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                pageSizeOptions={[5]}
              />
            </Box>
          </div>
        </Grid>
      </BaseLayout>
    </>
  );
}

export default ContactUs;
