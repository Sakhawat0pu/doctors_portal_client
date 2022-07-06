import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bgImg from "../../../images/appointment-bg.png";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const bgBanner = {
  background: `url(${bgImg})`,
  backgroundColor: "rgba(36, 57, 92, 0.7)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 120,
};

const AppointmentBanner = () => {
  return (
    <Container sx={{ mb: 5 }}>
      <Box style={bgBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <img style={{ width: 400, marginTop: -110 }} src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              sx={{ color: "#5CE7ED", marginBottom: "10px" }}
            >
              Appointment
            </Typography>
            <Typography
              variant="h4"
              style={{ color: "white", marginBottom: "10px" }}
            >
              Make An Appointment Today
            </Typography>
            <Typography color="white" sx={{ mb: 4 }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its design
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#35C2CC" }}>
              Learn more
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AppointmentBanner;
