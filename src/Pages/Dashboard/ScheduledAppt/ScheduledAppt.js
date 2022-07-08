import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ScheduledAppt = ({ date }) => {
  const { user, token } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:3001/appointments?email=${
        user.email
      }&&date=${date.toLocaleDateString()}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [date, user.email, token]);

  return (
    <div>
      <h3>Appointments: {appointments.length}</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 410 }} aria-label="Appointments">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: 12 }} align="left">
                Name
              </TableCell>
              <TableCell style={{ fontSize: 12 }} align="left">
                Time
              </TableCell>
              <TableCell style={{ fontSize: 12 }} align="left">
                Service
              </TableCell>
              <TableCell style={{ fontSize: 12 }} align="left">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow
                key={appointment._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="left"
                  component="th"
                  scope="row"
                  style={{ fontSize: 10 }}
                >
                  {appointment.patientName}
                </TableCell>
                <TableCell align="left" style={{ fontSize: 10 }}>
                  {appointment.time}
                </TableCell>
                <TableCell align="left" style={{ fontSize: 10 }}>
                  {appointment.serviceName}
                </TableCell>
                <TableCell align="left" style={{ fontSize: 10 }}>
                  {appointment.payment ? (
                    "Paid"
                  ) : (
                    <Link
                      to={`payment/${appointment._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button style={{ fontSize: 10 }} variant="contained">
                        Pay
                      </Button>
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ScheduledAppt;
