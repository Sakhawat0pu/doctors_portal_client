import { Alert, Box, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Booking from "../Booking/Booking";

const services = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "08.00 AM - 09.00 PM",
    space: 10,
    price: 200,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 PM",
    space: 8,
    price: 250,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "11.00 AM - 07.00 PM",
    space: 9,
    price: 150,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "08.00 AM - 08.00 PM",
    space: 10,
    price: 200,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "01.00 PM - 10.00 PM",
    space: 6,
    price: 180,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "03.00 PM - 9.00 PM",
    space: 3,
    price: 450,
  },
];

const AvailableApt = ({ date }) => {
  const [bookingMessage, setBookingMessage] = useState("");

  return (
    <Container>
      <Typography variant="h4" mb={3}>
        Available Appointment on {date.toDateString()}
      </Typography>
      {bookingMessage && (
        <Alert severity="success" style={{ margin: "30px 50px" }}>
          {bookingMessage}
        </Alert>
      )}
      <Box>
        <Grid container spacing={2}>
          {services.map((service) => (
            <Grid item xs={12} sm={4} md={4} key={service.id}>
              <Booking
                key={service.id}
                setBookingMessage={setBookingMessage}
                date={date}
                service={service}
              ></Booking>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AvailableApt;
