import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

function WishForm({ onWishSubmit }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onWishSubmit(message);
    setMessage('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="form-container" sx={{ mt: 2 }}>
      <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
        <TextField
          label="Your Wish"
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </motion.div>
    </Box>
  );
}

export default WishForm;
