import React from 'react';
import { Card, CardContent, Typography, Button, Chip, Box } from '@mui/material';
import '../../styles/OpportunityCard.css';

const OpportunityCard = ({ opportunity, onClick }) => {
  return (
    <Card className="opportunity-card" onClick={onClick}>
      <CardContent>
        <Typography variant="h5" component="div">
          {opportunity.title}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          {opportunity.organization}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {opportunity.location}
          </Typography>
          <Chip 
            label={opportunity.category} 
            size="small" 
            sx={{ ml: 1 }}
          />
        </Box>
        <Typography variant="caption" color="text.secondary">
          Posted: {opportunity.datePosted}
        </Typography>
        <Button 
          variant="outlined" 
          size="small" 
          sx={{ mt: 2 }}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default OpportunityCard;
