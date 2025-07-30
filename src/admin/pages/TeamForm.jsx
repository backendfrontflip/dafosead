import React, { useEffect, useState } from 'react';
import {
  TextField, Button, Box, Typography, Paper, Snackbar, Alert
} from '@mui/material';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner';

const TeamForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    role: '',
    location: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Show loading spinner when page loads
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const { name, age, phone, email, role, location } = formData;
    if (!name || !age || !phone || !email || !role || !location) {
      setError('All fields are required');
      return false;
    }
    if (!/^\d{10,15}$/.test(phone)) {
      setError('Phone number must be 10-15 digits');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await addDoc(collection(db, 'team'), formData);
      setSuccess(true);
      setFormData({
        name: '', age: '', phone: '', email: '', role: '', location: ''
      });

      // Navigate to team page after short delay
      setTimeout(() => {
        navigate('/admin/team');
      }, 1500);
    } catch (error) {
      setError('Error adding team member');
      console.error('Firestore error:', error);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <Box p={3}>
      <Typography variant="h4" color="error" mb={2}>Add Team Member</Typography>
      <Paper sx={{ padding: 3 }}>
        <form onSubmit={handleSubmit}>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Age" name="age" value={formData.age} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Role" name="role" value={formData.role} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Location" name="location" value={formData.location} onChange={handleChange} margin="normal" />
          <Button type="submit" variant="contained" color="error" fullWidth sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Paper>

      <Snackbar open={success} autoHideDuration={4000} onClose={() => setSuccess(false)}>
        <Alert severity="success" onClose={() => setSuccess(false)}>
          Team member added successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default TeamForm;
