import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import treatment from "../../../images/treatment.png";
import { Button, Container, Typography } from "@mui/material";

const Care = () => {
  return (
    <Container sx={{ marginTop: 5, marginBottom: 5 }}>
      <Box sx={{ flexGrow: 1 }} style={{ textAlign: "left" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} md={5}>
            <img src={treatment} alt="" style={{ width: 340 }} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            md={7}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h4">
                Exceptional Dental
                <br />
                Care, On Your Terms
              </Typography>
              <Typography style={{ color: "grey" }} my={3}>
                It is a long established fact that a reader will be distracted
                <br />
                by the readable content of a page when looking at its
                <br /> layout. The point of using lorem ipsum that it has
                <br /> a more-or-less normal distribution of letters as opposed
                <br />
                to using 'content here, content there', making it look like
                readable English. Many desktop publishing packages <br /> and
                web pages
              </Typography>
              <Button variant="contained">Learn More</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Care;
