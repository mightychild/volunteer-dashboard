import React, { useState, useEffect } from 'react';l
import { Box, Container, Typography, Button, CircularProgress, Grid } from '@mui/material';
import OpportunityCard from './components/OpportunityCard/OpportunityCard';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import AddOpportunityForm from './components/AddOpportunityForm/AddOpportunityForm';
import OpportunityDetails from './components/OpportunityDetails/OpportunityDetails';
import './styles/App.css';

const App = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openForm, setOpenForm] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchOpportunities = async () => {
      try {
        // Mock data
        const mockOpportunities = [
          {
            id: '1',
            title: 'Community Garden Volunteer',
            organization: 'Green Earth',
            location: 'New York, NY',
            datePosted: '2023-05-20',
            category: 'Environment',
            description: 'Help maintain community gardens in urban areas.',
            duration: '3 months',
            skillsRequired: ['Gardening', 'Teamwork'],
            contactEmail: 'contact@greenearth.org'
          },
          {
            id: '2',
            title: 'Food Bank Assistant',
            organization: 'Feed the Hungry',
            location: 'Chicago, IL',
            datePosted: '2023-05-18',
            category: 'Social Services',
            description: 'Sort and package food donations for distribution.',
            duration: 'Flexible',
            skillsRequired: ['Organization', 'Teamwork'],
            contactEmail: 'volunteer@feedthehungry.org'
          },
          {
            id: '3',
            title: 'Tutor for Kids',
            organization: 'Education for All',
            location: 'Los Angeles, CA',
            datePosted: '2023-05-15',
            category: 'Education',
            description: 'Help elementary school students with reading and math.',
            duration: '6 months',
            skillsRequired: ['Teaching', 'Patience'],
            contactEmail: 'info@educationforall.org'
          }
        ];
        
        setOpportunities(mockOpportunities);
        setFilteredOpportunities(mockOpportunities);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching opportunities:', error);
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, []);

  useEffect(() => {
    let results = opportunities;
    
    if (searchTerm) {
      results = results.filter(opportunity => 
        opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        opportunity.organization.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'All') {
      results = results.filter(opportunity => 
        opportunity.category === selectedCategory
      );
    }
    
    setFilteredOpportunities(results);
  }, [searchTerm, selectedCategory, opportunities]);

  const handleAddOpportunity = (newOpportunity) => {
    const updatedOpportunities = [...opportunities, {
      ...newOpportunity,
      id: (opportunities.length + 1).toString(),
      datePosted: new Date().toISOString().split('T')[0]
    }];
    setOpportunities(updatedOpportunities);
    setOpenForm(false);
  };

  const handleCardClick = (opportunity) => {
    setSelectedOpportunity(opportunity);
  };

  const handleCloseDetails = () => {
    setSelectedOpportunity(null);
  };

  return (
    <Container maxWidth="lg" className="app-container">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Volunteer Opportunities
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, flexWrap: 'wrap', gap: 2 }}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
            opportunities={opportunities}
          />
        </Box>
        
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => setOpenForm(true)}
          sx={{ mb: 3 }}
        >
          Add New Opportunity
        </Button>
        
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filteredOpportunities.length > 0 ? (
              filteredOpportunities.map(opportunity => (
                <Grid item xs={12} sm={6} md={4} key={opportunity.id}>
                  <OpportunityCard 
                    opportunity={opportunity} 
                    onClick={() => handleCardClick(opportunity)}
                  />
                </Grid>
              ))
            ) : (
              <Typography variant="body1" sx={{ ml: 2, mt: 2 }}>
                No opportunities found matching your criteria.
              </Typography>
            )}
          </Grid>
        )}
      </Box>
      
      <AddOpportunityForm 
        open={openForm} 
        onClose={() => setOpenForm(false)} 
        onSubmit={handleAddOpportunity}
      />
      
      {selectedOpportunity && (
        <OpportunityDetails 
          opportunity={selectedOpportunity} 
          onClose={handleCloseDetails}
        />
      )}
    </Container>
  );
};

export default App;
