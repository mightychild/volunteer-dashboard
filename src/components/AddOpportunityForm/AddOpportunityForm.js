import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Grid } from '@mui/material';
import './AddOpportunityForm.css';

const AddOpportunityForm = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    organization: '',
    location: '',
    category: '',
    description: '',
    duration: '',
    skillsRequired: '',
    contactEmail: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const newOpportunity = {
      ...formData,
      skillsRequired: formData.skillsRequired.split(',').map(skill => skill.trim())
    };
    onSubmit(newOpportunity);
    setFormData({
      title: '',
      organization: '',
      location: '',
      category: '',
      description: '',
      duration: '',
      skillsRequired: '',
      contactEmail: ''
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Volunteer Opportunity</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              name="title"
              label="Title"
              fullWidth
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="organization"
              label="Organization"
              fullWidth
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="location"
              label="Location"
              fullWidth
              value={formData.location}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="category"
              label="Category"
              fullWidth
              value={formData.category}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="contactEmail"
              label="Contact Email"
              fullWidth
              type="email"
              value={formData.contactEmail}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Description"
              fullWidth
              multiline
              rows={3}
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="duration"
              label="Duration"
              fullWidth
              value={formData.duration}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="skillsRequired"
              label="Skills Required (comma separated)"
              fullWidth
              value={formData.skillsRequired}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button 
          onClick={handleSubmit} 
          color="primary"
          variant="contained"
          disabled={!formData.title || !formData.organization || !formData.location || !formData.category}
        >
          Add Opportunity
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddOpportunityForm;
