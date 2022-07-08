import { Button, Container, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ service, date, setBookingMessage }) => {
  const [open, setOpen] = useState(false);
  const { name, time, space, price } = service;

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Container>
      <Paper elevation={3} sx={{ py: 4 }}>
        <Typography style={{ color: "#09CBA3", fontWeight: 600 }} variant="h6">
          {name}
        </Typography>
        <Typography style={{ fontSize: 14, fontWeight: 500 }} variant="p">
          {time}
        </Typography>
        <Typography
          style={{
            fontSize: 14,
            fontWeight: 500,
            display: "block",
            marginTop: 10,
            color: "red",
          }}
        >
          Price: ${price}
        </Typography>
        <Typography my={1} variant="caption" display="block">
          {space} spaces available
        </Typography>
        <Button onClick={handleOpen} variant="contained">
          Book Appointment
        </Button>
      </Paper>
      <BookingModal
        service={service}
        date={date}
        open={open}
        setOpen={setOpen}
        setBookingMessage={setBookingMessage}
      ></BookingModal>
    </Container>
  );
};

export default Booking;
