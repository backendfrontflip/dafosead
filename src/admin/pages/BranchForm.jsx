import React, { useState } from 'react';
import {
  Box, Button, TextField, Typography, Paper, Snackbar, Alert
} from '@mui/material';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner';

const BranchForm = () => {
  const [formData, setFormData] = useState({
    branchName: '',
    managerName: '',
    phone: '',
    email: '',
    address: '',
    numOfStaffs: '',
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
      await addDoc(collection(db, 'branches'), formData);
      setSuccess(true);
      setTimeout(() => {
        navigate('/admin/branches');
      }, 1500);
    } catch (err) {
      console.error('Error adding branch:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={4}>
      {loading && <LoadingSpinner />}
      <Paper elevation={3} sx={{ width: '100%', margin: 'auto', p: 4 }}>
        <Typography variant="h5" color="error" gutterBottom>Add New Branch</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Branch Name" name="branchName" onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Manager Name" name="managerName" onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Phone" name="phone" onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Email" name="email" onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Address" name="address" onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Number of Staffs" name="numOfStaffs" onChange={handleChange} margin="normal" required />
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
        <Alert severity="success" sx={{ width: '100%' }}>Branch added successfully!</Alert>
      </Snackbar>
    </Box>
  );
};

export default BranchForm;
