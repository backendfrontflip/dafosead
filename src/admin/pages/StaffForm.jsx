import React, { useState } from 'react';
import {
  Box, Button, TextField, Typography, Paper, Snackbar, Alert
} from '@mui/material';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner';

const StaffForm = () => {
  const [formData, setFormData] = useState({
    staffId: '',
    name: '',
    age: '',
    email: '',
    phone: '',
    branch: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, 'staffs'), formData);
      setSuccess(true);
      setTimeout(() => {
        navigate('/admin/staffs');
      }, 1500);
    } catch (err) {
      console.error('Error adding staff:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={4}>
      {loading && <LoadingSpinner />}
      <Paper elevation={3} sx={{ width: '100%', margin: 'auto', p: 4 }}>
        <Typography variant="h5" color="error" gutterBottom>Add Staff</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Staff ID" name="staffId" onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Name" name="name" onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Age" name="age" onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Email" name="email" onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Phone Number" name="phone" onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Branch" name="branch" onChange={handleChange} margin="normal" required />
          <Button
            type="submit"
            variant="contained"
            color="error"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Paper>

      <Snackbar open={success} autoHideDuration={3000}>
        <Alert severity="success" sx={{ width: '100%' }}>Staff added successfully!</Alert>
      </Snackbar>
    </Box>
  );
};

export default StaffForm;
