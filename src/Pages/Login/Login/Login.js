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
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const paperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Login = () => {
  const [loginData, setLogInData] = useState({});
  const { isLoading, logIn, error, googleSignIn } = useAuth();
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const redirectUri = location?.state?.from || "/home";

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLogInData(newLoginData);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    if (loginData.password.length < 6) {
      setLoginError("Password must be 6 character long");
      return;
    }
    logIn(loginData.email, loginData.password, redirectUri, navigate);
    setLoginError("");
  };
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} style={paperStyle}>
          {!isLoading ? (
            <Paper elevation={3} sx={{ p: 5 }}>
              <Typography style={{ textAlign: "center" }} variant="h6">
                Please Login
              </Typography>
              <form onSubmit={handleLogIn}>
                <TextField
                  sx={{ width: 1, m: 1 }}
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
                  type="password"
                  variant="standard"
                  label="Password"
                  name="password"
                  onBlur={handleChange}
                  required
                ></TextField>
                {loginError && (
                  <Typography color="error">{loginError}</Typography>
                )}
                <Button
                  style={{ width: "75%", marginTop: 20 }}
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
              </form>
              <Typography sx={{ mt: 2, fontSize: 13 }}>
                New user? <Link to="/register">Please Register</Link>
              </Typography>
              <p>-------------- Or ----------------</p>
              <Button
                onClick={() => googleSignIn(redirectUri, navigate)}
                variant="contained"
                sx={{ mb: 2 }}
              >
                Google Sign In
              </Button>

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

export default Login;
