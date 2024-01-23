import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import { BaseURL } from "../utils/common/APIs";
import { Formik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "300px",
  height: 500,
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  padding: "0px 40px",
};
const MyProfile = ({ user }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [imgData, setImgData] = useState(null);

  // image show function
  const handleFileChange = (event, setFieldValue) => {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
      const selectedFile = fileInput.files[0];
      setImgData(URL.createObjectURL(selectedFile));
      setFieldValue("avatar", selectedFile);
    }
  };

  return (
    <>
      <Container>
        <Row className="my-3">
          <Col>
            <Button variant="contained" color="success" onClick={handleOpen}>
              Edit Profile
            </Button>
          </Col>
        </Row>
        <Row className="my-5 flex items-center justify-center">
          <Col lg={8} className="flex items-end justify-center">
            <Avatar
              alt={user?.firstName}
              src={`${BaseURL}/uploads/users/${user?.avatar}`}
              sx={{
                width: 250,
                height: 250,
              }}
              className="img-fluid"
            />
          </Col>
          <Col lg={4} className="my-2">
            <div className="text-yellow-300 text-4xl fw-bold my-3">{`${user?.firstName} ${user?.lastName}`}</div>
            <div className="text-2xl my-3">
              <span className="text-yellow-300 mr-3">
                <EmailIcon />
              </span>
              <span className="text-gray-200 text-break">{user?.email}</span>
            </div>
            <div className="text-yellow-300 text-2xl my-3">
              <span className="text-yellow-300 mr-3">
                <AccountCircleIcon />
              </span>
              <span className="text-gray-200">{user?.gender}</span>
            </div>
            <div className="text-yellow-300 text-2xl my-3">
              <span className="text-yellow-300 mr-3">
                <PhoneIcon />
              </span>
              <span className="text-gray-200 text-break">{user?.contact}</span>
            </div>
          </Col>
        </Row>
      </Container>
      {/* ===========EDIT PROFILE MODAL ==============  */}
      <Modal
        sx={{ height: "100vh", overflow: "none" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="py-3"
          >
            Edit Profile
          </Typography>
          <Formik
            enableReinitialize
            initialValues={{
              firstName: user?.firstName,
              lastName: user?.lastName,
              email: user?.email,
              gender: user?.gender,
              contact: user?.contact,
              avatar: user?.avatar,
            }}
            validate={(values) => {
              const errors = {};
              if (!values.firstName) {
                errors.firstName = "**firstName required";
              } else if (values.firstName < 3) {
                errors.firstName =
                  "firstName Should be more then 3 charactors !";
              }

              if (!values.lastName) {
                errors.lastName = "**lastName required";
              } else if (values.lastName < 3) {
                errors.lastName = "lastName Should be more then 3 charactors !";
              }

              if (!values.email) {
                errors.email = "Email Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.contact) {
                errors.contact = "Contact Required";
              } else if (isNaN(values.contact)) {
                errors.contact = "Contact should be in Numbers Only.";
              } else if (String(values?.contact)?.length !== 10) {
                errors.contact = "Contact no. should be 10 digits";
              }

              if (!values.gender) {
                errors.gender = "Gender Required";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              if (!user) {
                setSubmitting(false);
                return;
              }
              setImgData(values.avatar);
              const formData = new FormData();
              formData.append("avatar", values?.avatar);
              formData.append("firstName", values?.firstName);
              formData.append("lastName", values?.lastName);
              formData.append("email", values?.email);
              formData.append("contact", values?.contact);
              formData.append("gender", values?.gender);
              const notify = () => toast("Please wait for a while...");
              notify();

              setTimeout(() => {
                axios
                  .put(`${BaseURL}/users/update_user/${user._id}`, formData)
                  .then(async (res) => {
                    await axios
                      .get(`${BaseURL}/users/get_user/${user._id}`)
                      .then((res) => {
                        const UserDetails = JSON.parse(
                          localStorage.getItem("User")
                        );
                        if (UserDetails._id === user._id) {
                          localStorage.setItem(
                            "User",
                            JSON.stringify(res.data.data)
                          );
                          const event = new Event("employeeUpdated");
                          window.dispatchEvent(event);
                        }
                        navigate("/");
                      });

                    if (res && res.data && res.data.message !== undefined) {
                      const notify = () => toast.success(res.data.message);
                      notify();
                      handleClose();
                      localStorage.getItem();
                    }
                  })
                  .catch((error) => {
                    if (error.response) {
                      const notify = () =>
                        toast.error(error.response.data.message, {
                          position: "top-center",
                        });
                      notify();
                      handleClose();
                    }
                  });
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <TextField
                    type="firstName"
                    label="First Name"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                  <span className="text-danger">
                    {errors.firstName && touched.firstName && errors.firstName}
                  </span>

                  <TextField
                    type="lastName"
                    label="last Name"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                  <span className="text-danger">
                    {errors.lastName && touched.lastName && errors.lastName}
                  </span>

                  <TextField
                    type="email"
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <span className="text-danger">
                    {errors.email && touched.email && errors.email}
                  </span>

                  <TextField
                    type="text"
                    label="Contact"
                    name="contact"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contact}
                  />
                  <span className="text-danger">
                    {errors.contact && touched.contact && errors.contact}
                  </span>

                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Gender
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="gender"
                        label="Gender"
                        onBlur={handleBlur}
                        value={values.gender}
                        onChange={handleChange}
                      >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="mt-4 flex flex-col text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            type="file"
                            className="sr-only"
                            name="avatar"
                            // onChange={(e) => {
                            //   setFieldValue("avatar", e.target.files[0]);
                            // }}
                            onChange={(e) => handleFileChange(e, setFieldValue)}
                            onBlur={handleBlur}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                        {imgData && (
                          <img
                            id="previewImage"
                            src={URL.createObjectURL(values.avatar)}
                            style={{
                              marginTop: "10px",
                              maxWidth: "100%",
                              maxHeight: "200px",
                            }}
                            alt="previewImage"
                          />
                        )}
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    className="mb-3"
                  >
                    Submit
                  </Button>
                </Stack>
              </form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default MyProfile;
