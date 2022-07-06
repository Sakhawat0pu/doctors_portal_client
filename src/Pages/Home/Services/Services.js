import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Typography from "@mui/material/Typography";

const services = [
  {
    id: 1,
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta molestias modi voluptatibus, sequi nemo harum recusandae numquam sunt, iste explicabo consequuntur voluptatum?",
    img: fluoride,
  },
  {
    id: 2,
    name: "Cavity Filling",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum magnam quas debitis molestias nihil obcaecati quibusdam, qui dolorem sequi optio exercitationem alias sapiente aspernatur illo?",
    img: cavity,
  },
  {
    id: 3,
    name: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repellendus, inventore quas error laboriosam rem perferendis ea aliquid accusantium vitae officiis deleniti deserunt itaque ut.",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: 35 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 400, m: 2, color: "success.main" }}
          variant="h5"
          component="div"
        >
          OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600, m: 4 }} variant="h5" component="div">
          Services We Provide
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          {services.map((service) => (
            <Grid item xs={4} sm={4} md={4} key={service.id}>
              <Service service={service}></Service>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
