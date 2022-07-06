import React, { useState } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailableApt from "../AvailableApt/AvailableApt";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Navigation></Navigation>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvailableApt date={date}></AvailableApt>
    </div>
  );
};

export default Appointment;
