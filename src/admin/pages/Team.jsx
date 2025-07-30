import React, { useEffect, useState } from 'react';
import {
  Typography, Paper, Box, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, IconButton, Tooltip, Dialog,
  DialogActions, DialogContent, DialogContentText, DialogTitle, Button,
  TextField, Snackbar, Alert
} from '@mui/material';
import { db } from '../../firebase';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import GroupOffIcon from '@mui/icons-material/GroupOff';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const fetchTeam = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'team'));
      const members = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTeamMembers(members);
    } catch (error) {
      console.error('Error fetching team members:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  const handleDelete = async () => {
    try {
      if (deleteId) {
        await deleteDoc(doc(db, 'team', deleteId));
        setDeleteId(null);
        fetchTeam();
      }
    } catch (error) {
      console.error('Error deleting team member:', error);
    }
  };

  const handleEditClick = (member) => {
    setSelectedMember({ ...member });
    setEditDialogOpen(true);
    setFormErrors({});
  };

  const handleEditChange = (e) => {
    setSelectedMember({ ...selectedMember, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!selectedMember.name) errors.name = "Name is required";
    if (!selectedMember.age) errors.age = "Age is required";
    if (!selectedMember.phone) errors.phone = "Phone is required";
    if (!selectedMember.email) errors.email = "Email is required";
    if (!selectedMember.role) errors.role = "Role is required";
    if (!selectedMember.location) errors.location = "Location is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleEditSubmit = async () => {
    if (!validateForm()) return;
    try {
      const docRef = doc(db, 'team', selectedMember.id);
      const updatedData = { ...selectedMember };
      delete updatedData.id;
      await updateDoc(docRef, updatedData);
      setEditDialogOpen(false);
      setSnackbarOpen(true);
      fetchTeam();
    } catch (error) {
      console.error('Error updating team member:', error);
    }
  };

  return (
    <Box p={3}>
      {loading && <LoadingSpinner />}

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" color="error" gutterBottom>
          Team
        </Typography>
        <Tooltip title="Add Team Member">
          <IconButton
            color="error"
            onClick={() => navigate('/admin/team-form')}
            sx={{ backgroundColor: '#fdecea' }}
          >
            <AddCircleOutlineIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>

      {!loading && (
        teamMembers.length === 0 ? (
          <Paper elevation={3} sx={{ padding: 5, mt: 4, textAlign: 'center' }}>
            <GroupOffIcon sx={{ fontSize: 50, color: 'gray' }} />
            <Typography variant="h6" sx={{ mt: 2 }}>No teams added yet</Typography>
          </Paper>
        ) : (
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
              <TableHead sx={{ backgroundColor: '#fce4ec' }}>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teamMembers.map((member, index) => (
                  <TableRow key={member.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.age}</TableCell>
                    <TableCell>{member.phone}</TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>{member.location}</TableCell>
                    <TableCell>
                      <Tooltip title="Edit">
                        <IconButton onClick={() => handleEditClick(member)} color="primary">
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton onClick={() => setDeleteId(member.id)} color="error">
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      )}

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Team Member</DialogTitle>
        <DialogContent>
          {['name', 'age', 'phone', 'email', 'role', 'location'].map((field) => (
            <TextField
              key={field}
              margin="dense"
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              value={selectedMember?.[field] || ''}
              onChange={handleEditChange}
              fullWidth
              required
              error={!!formErrors[field]}
              helperText={formErrors[field]}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)} color="primary">Cancel</Button>
          <Button onClick={handleEditSubmit} color="error">Update</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteId} onClose={() => setDeleteId(null)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this team member? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteId(null)} color="primary">Cancel</Button>
          <Button onClick={handleDelete} color="error">Delete</Button>
        </DialogActions>
      </Dialog>

      {/* Success Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          Team member updated successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Team;
