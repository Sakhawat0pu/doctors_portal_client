import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import chair from "../../../images/chair.png";
import Calender from "../../Shared/Calender/Calender";
import aptBg from "../../../images/bg.png";

const appointmentBg = {
  background: `url(${aptBg})`,
  backgroundColor: "rgba(234, 222, 171, 0.3)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 15,
  marginBottom: 50,
};
const AppointmentHeader = ({ date, setDate }) => {
  return (
    <Container style={appointmentBg}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} mb={2}>
            <Calender date={date} setDate={setDate}></Calender>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            mb={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={chair} style={{ width: "100%" }} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AppointmentHeader;
