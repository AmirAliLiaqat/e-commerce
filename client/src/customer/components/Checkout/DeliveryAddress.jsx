import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../../State/Order/Action'

const DeliveryAddress = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      streetAddress: data.get('address'),
      city: data.get('city'),
      state: data.get('state'),
      zipCode: data.get('zip'),
      mobile: data.get('phoneNumber'),
    }

    const orderData = {address, navigate};
    dispatch(createOrder(orderData));
    console.log(address);
  }

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              variant="contained"
              size="large"
              sx={{ mt: 2, bgcolor: "#9155fd" }}
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={4}
                    id="address"
                    name="address"
                    label="Address"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="city"
                    name="city"
                    label="City"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="state"
                    name="state"
                    label="State / Province / Region"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="zip"
                    name="zip"
                    label="Zip / Postal Code"
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{ py: 1.5, mt: 2, bgcolor: "#9155fd" }}
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DeliveryAddress;
