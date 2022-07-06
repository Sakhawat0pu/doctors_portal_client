import { Container, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import img1 from "../../../images/people-1.png";
import img2 from "../../../images/people-2.png";
import img3 from "../../../images/people-3.png";
import Testimony from "./Testimony";

const testimonials = [
  {
    id: 1,
    img: img1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum exercitationem deserunt aliquid suscipit esse maxime sint quo error facilis voluptas numquam quos amet asperiores!",
    name: "Winson Harry",
    state: "California",
  },
  {
    id: 2,
    img: img2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum exercitationem deserunt aliquid suscipit esse maxime sint quo error facilis voluptas numquam quos amet asperiores!",
    name: "Amanda Smith",
    state: "New York",
  },
  {
    id: 3,
    img: img3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum exercitationem deserunt aliquid suscipit esse maxime sint quo error facilis voluptas numquam quos amet asperiores!",
    name: "Victoria Kinkman",
    state: "Florida",
  },
];

const Testimonial = () => {
  return (
    <Container style={{ textAlign: "left", marginBottom: 30 }}>
      <Typography variant="h6" style={{ color: "#41CBE6", marginBottom: 4 }}>
        Testimonial
      </Typography>
      <Typography variant="h4" mb={3}>
        What's Our Patients Says
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} sm={4} md={4}>
              <Testimony
                key={testimonial.id}
                testimonial={testimonial}
              ></Testimony>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Testimonial;
