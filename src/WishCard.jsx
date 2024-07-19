import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function WishCard({ message }) {
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="card-container">
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h5" align="center">
            {message}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default WishCard;
