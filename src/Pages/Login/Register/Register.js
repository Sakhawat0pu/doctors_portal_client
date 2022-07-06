import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const paperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Register = () => {
  const [registrationData, setRegistrationData] = useState({});
  const { user, registerUser, isLoading, error } = useAuth();
  const [registrationError, setRegistrationError] = useState("");
  const navigate = useNavigate();
  const redirectUri = "/home";

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegistrationData = { ...registrationData };
    newRegistrationData[field] = value;
    setRegistrationData(newRegistrationData);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (registrationData.password.length < 6) {
      setRegistrationError("Password must be 6 character long");
      return;
    }
    if (registrationData.password !== registrationData.password2) {
      alert("Your password did not match!");
      return;
    }
    registerUser(
      registrationData.email,
      registrationData.password,
      redirectUri,
      navigate,
      registrationData.name
    );
    setRegistrationError(" ");
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} style={paperStyle}>
          {!isLoading ? (
            <Paper elevation={3} sx={{ p: 5 }}>
              <Typography style={{ textAlign: "center" }} variant="h6">
                Please Register
              </Typography>
              <form onSubmit={handleRegistration}>
                <TextField
                  sx={{ width: 1, m: 1 }}
                  id="standard-basic"
                  variant="standard"
                  label="Name"
                  type="text"
                  name="name"
                  onBlur={handleChange}
                  required
                ></TextField>
                <br />
                <TextField
                  sx={{ width: 1, m: 1 }}
                  id="standard-basic"
                  variant="standard"
                  label="Email"
                  type="email"
                  name="email"
                  onBlur={handleChange}
                  required
                ></TextField>
                <br />
                <TextField
                  sx={{ width: 1, m: 1 }}
                  id="standard-basic"
                  type="password"
                  variant="standard"
                  label="Password"
                  name="password"
                  onBlur={handleChange}
                  required
                ></TextField>
                {registrationError && (
                  <Typography color="error">{registrationError}</Typography>
                )}
                <br />
                <TextField
                  sx={{ width: 1, m: 1 }}
                  id="standard-basic"
                  type="password"
                  variant="standard"
                  label="Re-enter Password"
                  name="password2"
                  onBlur={handleChange}
                  required
                ></TextField>

                <Button
                  style={{ width: "75%", marginTop: 20 }}
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
              </form>
              <Typography sx={{ mt: 2, fontSize: 13 }}>
                Already Registered? <Link to="/login">Please Login</Link>
              </Typography>
              {user?.email && (
                <Alert severity="success">
                  Your account has been created successfully
                </Alert>
              )}
              {error && <Alert severity="error">{error}</Alert>}
            </Paper>
          ) : (
            <CircularProgress color="error"></CircularProgress>
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img src={login} style={{ width: "100%" }} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
