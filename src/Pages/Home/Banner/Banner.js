import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bgBanner from "../../../images/bg.png";
import { Box, Button, Container, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const bannerBg = {
  background: `url(${bgBanner})`,
  backgroundColor: "rgba(196, 208, 219, 0.3)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 40,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: "400px",
};
const Banner = () => {
  return (
    <div>
      <Container sx={{ flexGrow: 1 }} style={bannerBg}>
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            style={{ ...verticalCenter, textAlign: "left" }}
          >
            <Box>
              <Typography variant="h4">
                Your New Smile <br />
                Starts Here
              </Typography>
              <Typography
                variant="h6"
                sx={{ my: 2, fontSize: 13, fontWeight: 400, color: "grey" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                reiciendis unde placeat tempore aliquam. Saepe debitis aut
                deserunt soluta tempore.
              </Typography>
              <Link to="/appointment" style={{ textDecoration: "none" }}>
                <Button variant="contained">Get Appointment</Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={verticalCenter}>
            <img style={{ width: "400px" }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
      <Container
        style={{
          flexGrow: 1,
          width: "auto",
          textAlign: "left",
          marginTop: -40,
        }}
      >
        <Grid
          container
          style={{ width: "auto", marginLeft: 60, marginRight: 60 }}
        >
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            style={{
              padding: 0,
              display: "flex",
              backgroundColor: "#35C2CC",
              height: 80,
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box>
              <FontAwesomeIcon
                icon={faClockFour}
                style={{ color: "white", height: 50 }}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                style={{ fontSize: 11, fontWeight: 600, color: "white" }}
              >
                Opening Hours
              </Typography>
              <Typography variant="p" style={{ fontSize: 11, color: "white" }}>
                Lorem ipsum dolor sit amet <br /> elit. Eveniet, dolorem.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            style={{
              padding: 0,
              display: "flex",
              backgroundColor: "#203447",
              height: 80,
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "white", height: 50 }}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                style={{ fontSize: 11, fontWeight: 600, color: "white" }}
              >
                Visit our location
              </Typography>
              <Typography variant="p" style={{ fontSize: 11, color: "white" }}>
                Brooklyn, NY 10036, USA
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            style={{
              padding: 0,
              display: "flex",
              backgroundColor: "#35C2CC",
              height: 80,
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "white", height: 50 }}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                style={{ fontSize: 11, fontWeight: 600, color: "white" }}
              >
                Contact Us Now
              </Typography>
              <Typography variant="p" style={{ fontSize: 11, color: "white" }}>
                Phone: +000 123 456789
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
