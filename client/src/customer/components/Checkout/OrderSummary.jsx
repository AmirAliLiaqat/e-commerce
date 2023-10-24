import React, { useEffect } from 'react';
import CartItem from '../Cart/CartItem'
import AddressCard from '../AddressCard/AddressCard';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../State/Order/Action';
import { useLocation } from 'react-router-dom';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('order_id');
  const { order } = useSelector(store => store); 

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  return (
    <>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div className="lg:grid grid-cols-3 relative mt-5">
        <div className="col-span-2">
          {order.order?.orderItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border rounded-md shadow-lg p-5">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>

            <hr />

            <div className="space-y-3 font-semibold mb-4">
              <div className="flex justify-between pt-3 text-black">
                <span>Price (3 items)</span>
                <span>Rs {order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">-Rs {order.order?.discount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr />
              <div className="flex justify-between text-black">
                <span>Total Amount</span>
                <span className="text-green-600">Rs {order.order?.totalDiscountedPrice}</span>
              </div>
            </div>

            <Button
              variant="contained"
              sx={{
                px: "2.5rem",
                py: "0.7rem",
                bgcolor: "#9155fd",
                width: "100%",
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderSummary
