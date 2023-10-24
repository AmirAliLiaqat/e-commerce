import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewsCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              A
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2 mb-1">
            <div className="">
              <p className="font-semibold text-lg">Aslam</p>
              <p className="opacity-70">April 5, 2023</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, amet
            quod ipsa sequi id dolor?
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewsCard;
