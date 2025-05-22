import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Chip, Box, Divider } from '@mui/material';
import '../../styles/OpportunityDetails.css';

const OpportunityDetails = ({ opportunity, onClose }) => {
  return (
    <Dialog open={!!opportunity} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{opportunity?.title}</DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" color="text.secondary">
            {opportunity?.organization}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <Typography variant="body2">{opportunity?.location}</Typography>
            <Chip 
              label={opportunity?.category} 
              size="small" 
              sx={{ ml: 1 }}
            />
          </Box>
          <Typography variant="caption" color="text.secondary">
            Posted: {opportunity?.datePosted}
          </Typography>
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        <Typography variant="body1" paragraph>
          {opportunity?.description}
        </Typography>
        
        <Box sx={{ display: 'flex', mt: 2 }}>
          <Box sx={{ mr: 4 }}>
            <Typography variant="subtitle2">Duration:</Typography>
            <Typography>{opportunity?.duration || 'Not specified'}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">Contact Email:</Typography>
            <Typography>{opportunity?.contactEmail}</Typography>
          </Box>
        </Box>
        
        {opportunity?.skillsRequired?.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2">Skills Required:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
              {opportunity.skillsRequired.map((skill, index) => (
                <Chip key={index} label={skill} size="small" />
              ))}
            </Box>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default OpportunityDetails;
