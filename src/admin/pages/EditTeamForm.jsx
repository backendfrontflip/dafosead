// src/admin/pages/EditTeam.jsx
import React, { useEffect, useState } from 'react';
import {
  Box, Typography, TextField, Button, Paper, MenuItem, Snackbar, Alert
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const roles = ['Admin', 'Manager', 'Engineer', 'HR', 'Support'];

const EditTeam = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [form, setForm] = useState({
    name: '', age: '', phone: '', email: '', role: '', location: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Fetch team member on load
  useEffect(() => {
    const fetchMember = async () => {
      try {
        const docRef = doc(db, 'team', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setMember(docSnap.data());
          setForm(docSnap.data());
        } else {
          setError('Team member not found');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to load team member');
      }
    };
    fetchMember();
  }, [id]);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.phone || !form.email || !form.role || !form.location) {
      setError('Please fill all fields');
      return;
    }

    try {
      await updateDoc(doc(db, 'team', id), form);
      setSuccess(true);
      setTimeout(() => navigate('/admin/team'), 1500);
    } catch (err) {
      console.error(err);
      setError('Update failed');
    }
  };

  if (!member) {
    return <Typography p={3}>Loading...</Typography>;
  }

  return (
    <Box p={3}>
      <Typography variant="h4" color="error" gutterBottom>
        Edit Team Member
      </Typography>

      <Paper sx={{ padding: 4, maxWidth: 600 }}>
        <form onSubmit={handleUpdate}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Age"
            name="age"
            value={form.age}
            onChange={handleChange}
            margin="normal"
            type="number"
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            margin="normal"
            type="email"
          />
          <TextField
            select
            fullWidth
            label="Role"
            name="role"
            value={form.role}
            onChange={handleChange}
            margin="normal"
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>{role}</MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Location"
            name="location"
            value={form.location}
            onChange={handleChange}
            margin="normal"
          />

          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

          <Button
            variant="contained"
            color="error"
            type="submit"
            fullWidth
            sx={{ mt: 3 }}
          >
            Update Team Member
          </Button>
        </form>
      </Paper>

      <Snackbar
        open={success}
        autoHideDuration={2000}
        onClose={() => setSuccess(false)}
      >
        <Alert severity="success">Team member updated successfully!</Alert>
      </Snackbar>
    </Box>
  );
};

export default EditTeam;
