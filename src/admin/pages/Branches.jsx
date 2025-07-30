// src/pages/admin/Branches.jsx
import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Paper, Button, IconButton,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { db } from '../../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner';

const Branches = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchBranches = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'branches'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBranches(data);
    } catch (error) {
      console.error("Error fetching branches:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'branches', id));
      fetchBranches(); // Refresh after delete
    } catch (error) {
      console.error("Error deleting branch:", error);
    }
  };

  useEffect(() => {
    fetchBranches();
  }, []);

  return (
    <Box p={3}>
      {loading && <LoadingSpinner />}
      <Typography variant="h4" color="error">Branches</Typography>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="error"
          startIcon={<Add />}
          onClick={() => navigate('/admin/branches/new')}
        >
          Add Branch
        </Button>
      </Box>

      {branches.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography>No branches added yet.</Typography>
        </Paper>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f8d7da' }}>
                <TableCell><strong>Branch Name</strong></TableCell>
                <TableCell>Manager</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Num of Staffs</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {branches.map(branch => (
                <TableRow key={branch.id}>
                  <TableCell>{branch.name}</TableCell>
                  <TableCell>{branch.manager}</TableCell>
                  <TableCell>{branch.phone}</TableCell>
                  <TableCell>{branch.email}</TableCell>
                  <TableCell>{branch.address}</TableCell>
                  <TableCell>{branch.numOfStaffs}</TableCell>
                  <TableCell align="center">
                    <IconButton color="primary" onClick={() => navigate(`/admin/branches/edit/${branch.id}`)}>
                      <Edit />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(branch.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Branches;
