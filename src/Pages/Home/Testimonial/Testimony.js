import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Testimony = (props) => {
  const { name, description, img, state } = props.testimonial;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          {description}
        </Typography>
      </CardContent>
      <CardContent style={{ display: "flex", justifyContent: "space-around" }}>
        <img src={img} alt="" />
        <Box my={"auto"}>
          <Typography style={{ color: "#41CBE6", fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography>{state}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Testimony;
