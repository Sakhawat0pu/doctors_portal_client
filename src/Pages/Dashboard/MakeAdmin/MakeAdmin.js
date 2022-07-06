import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { token } = useAuth();
  console.log(token);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };

    fetch("http://localhost:3001/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status !== 403) {
          return res.json();
        }
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("You have been assigned as an admin");
          setEmail("");
          e.target.reset();
        } else {
          alert("Something went wrong");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          type="email"
          onBlur={handleEmail}
          label="Email"
          variant="standard"
        ></TextField>
        <br />
        <br />
        <Button type="submit" variant="contained" style={{ width: "24%" }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
