import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <Box>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Blog
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Press
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Jobs
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Partners
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <Box>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Blog
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Press
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Jobs
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Partners
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <Box>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Blog
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Press
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Jobs
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Partners
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <Box>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Blog
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Press
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Jobs
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Partners
            </Button>
          </Box>
        </Grid>
        <Grid className="pt-20" item xs={12}>
            <Typography>&copy; Copyright 2023 All Rights Reserved.</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
