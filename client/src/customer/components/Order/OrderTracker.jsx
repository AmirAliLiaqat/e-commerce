import React from 'react'
import Stepper from '@mui/material/Stepper'
import { Step, StepLabel } from '@mui/material'

const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]

const OrderTracker = ({ activeStep }) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep}>
            {steps.map((label) => <Step>
                <StepLabel sx={{color: '#9155fd', fontSize: '44px'}}>{label}</StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker
