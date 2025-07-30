import React, { useEffect, useState } from 'react';
import {
  Typography, Paper, Box, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, IconButton, Button, Dialog, DialogContent, TextField
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner';

const Staffs = () => {
  const [staffs, setStaffs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editStaff, setEditStaff] = useState(null); // the staff object being edited
  const [formValues, setFormValues] = useState({
    staffId: '',
    name: '',
    age: '',
    email: '',
    phone: '',
    branch: '',
  });

  const navigate = useNavigate();

  const fetchStaffs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'staffs'));
      const staffList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setStaffs(staffList);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching staff data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'staffs', id));
      setStaffs(prev => prev.filter(staff => staff.id !== id));
    } catch (err) {
      console.error('Error deleting staff:', err);
    }
  };

  const handleEditClick = (staff) => {
    setEditStaff(staff);
    setFormValues({
      staffId: staff.staffId,
      name: staff.name,
      age: staff.age,
      email: staff.email,
      phone: staff.phone,
      branch: staff.branch,
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const staffRef = doc(db, 'staffs', editStaff.id);
      await updateDoc(staffRef, formValues);
      setStaffs(prev =>
        prev.map(staff =>
          staff.id === editStaff.id ? { ...staff, ...formValues } : staff
        )
      );
      setEditStaff(null); // close dialog
    } catch (err) {
      console.error('Error updating staff:', err);
    }
  };

  useEffect(() => {
    fetchStaffs();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" color="error">Staffs</Typography>
        <Button
          variant="contained"
          color="#b71c1c"
          startIcon={<Add />}
          onClick={() => navigate('/admin/staff-form')}
        >
          Add Staff
        </Button>
      </Box>

      {staffs.length === 0 ? (
        <Paper elevation={2} sx={{ padding: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">No staff records yet.</Typography>
        </Paper>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#b71c1c' }}>
              <TableRow>
                <TableCell sx={{ color: '#fff' }}>ID</TableCell>
                <TableCell sx={{ color: '#fff' }}>Staff ID</TableCell>
                <TableCell sx={{ color: '#fff' }}>Name</TableCell>
                <TableCell sx={{ color: '#fff' }}>Age</TableCell>
                <TableCell sx={{ color: '#fff' }}>Email</TableCell>
                <TableCell sx={{ color: '#fff' }}>Phone Number</TableCell>
                <TableCell sx={{ color: '#fff' }}>Branch</TableCell>
                <TableCell sx={{ color: '#fff' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staffs.map((staff) => (
                <TableRow key={staff.id}>
                  <TableCell>{staff.id}</TableCell>
                  <TableCell>{staff.staffId}</TableCell>
                  <TableCell>{staff.name}</TableCell>
                  <TableCell>{staff.age}</TableCell>
                  <TableCell>{staff.email}</TableCell>
                  <TableCell>{staff.phone}</TableCell>
                  <TableCell>{staff.branch}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleEditClick(staff)}>
                      <Edit />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(staff.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Fullscreen Edit Dialog */}
      <Dialog
        open={Boolean(editStaff)}
        onClose={() => setEditStaff(null)}
        fullScreen
        PaperProps={{
          style: { backgroundColor: 'rgba(0,0,0,0.8)' },
        }}
      >
        <DialogContent sx={{ maxWidth: 600, mx: 'auto', mt: 8, mb:8, bgcolor: 'white', borderRadius: 2, p: 4 }}>
          <Typography variant="h5" mb={2} color="error">Edit Staff</Typography>
          <TextField fullWidth name="staffId" label="Staff ID" value={formValues.staffId} onChange={handleFormChange} margin="normal" />
          <TextField fullWidth name="name" label="Name" value={formValues.name} onChange={handleFormChange} margin="normal" />
          <TextField fullWidth name="age" label="Age" value={formValues.age} onChange={handleFormChange} margin="normal" />
          <TextField fullWidth name="email" label="Email" value={formValues.email} onChange={handleFormChange} margin="normal" />
          <TextField fullWidth name="phone" label="Phone Number" value={formValues.phone} onChange={handleFormChange} margin="normal" />
          <TextField fullWidth name="branch" label="Branch" value={formValues.branch} onChange={handleFormChange} margin="normal" />
          <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="contained" color="inherit" onClick={() => setEditStaff(null)}>Cancel</Button>
            <Button variant="contained" color="error" onClick={handleUpdate}>Update</Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Staffs;
