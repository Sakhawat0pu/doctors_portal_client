import React, { useState } from "react";
import { Grid } from "@mui/material";
import Calender from "../../Shared/Calender/Calender";
import ScheduledAppt from "../ScheduledAppt/ScheduledAppt";

const DashboardHome = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5} md={5}>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} sm={7} md={7}>
          <ScheduledAppt date={date}></ScheduledAppt>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardHome;
