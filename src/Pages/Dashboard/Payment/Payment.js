import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LIjLkJuieUjZutapoHTcBzGX1G2acJp6sIlQoy7XspfVGSrH4XzOwsVUBJcggQhncr0Z82xafiFuNKeLM2wlD4S00H3kIw9Fm"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <h2>Payment for: {appointment.serviceName}</h2>
      <h3>Patient Name: {appointment.patientName}</h3>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment}></CheckoutForm>
        </Elements>
      )}
    </div>
  );
};

export default Payment;
