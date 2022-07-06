import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 5,
};

const BookingModal = ({ date, service, open, setOpen, setBookingMessage }) => {
  const { name, time } = service;
  const { user } = useAuth();
  const dateString = new Date(date).toLocaleDateString();

  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
    serviceName: name,
    time: time,
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBookSubmit = (e) => {
    const newBookingInfo = { ...bookingInfo, date: dateString };
    setBookingInfo(newBookingInfo);
    e.preventDefault();
    fetch("http://localhost:3001/appointments", {
      method: "POST",
      body: JSON.stringify(newBookingInfo),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingMessage(
            "Your appointment has been scheduled successfully!!!"
          );
          handleClose();
        }
      });
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              variant="h6"
              style={{ textAlign: "center", color: "#30B6F7" }}
              id="transition-modal-title"
            >
              {name}
            </Typography>
            <form onSubmit={handleBookSubmit}>
              <TextField
                sx={{ width: "95%", m: 1 }}
                id="outlined-size-small"
                defaultValue={time}
                variant="outlined"
                size="small"
                disabled
              />
              <TextField
                sx={{ width: "95%", m: 1 }}
                id="outlined-size-small"
                defaultValue={user.email ? user.displayName : "Name"}
                variant="outlined"
                size="small"
                name="patientName"
                onBlur={handleOnBlur}
                required
              />
              <TextField
                sx={{ width: "95%", m: 1 }}
                id="outlined-size-small"
                type="email"
                defaultValue={user.email ? user.email : "Email"}
                variant="outlined"
                size="small"
                name="email"
                onBlur={handleOnBlur}
                required
              />
              <TextField
                sx={{ width: "95%", m: 1 }}
                id="outlined-size-small"
                placeholder="Phone Number"
                variant="outlined"
                size="small"
                name="phone"
                onBlur={handleOnBlur}
                required
              />
              <TextField
                sx={{ width: "95%", m: 1 }}
                id="outlined-size-small"
                defaultValue={dateString}
                variant="outlined"
                size="small"
                disabled
              />
              <Button type="submit" variant="contained" sx={{ m: 1 }}>
                Submit
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;
