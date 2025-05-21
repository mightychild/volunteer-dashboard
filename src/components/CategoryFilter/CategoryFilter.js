import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './CategoryFilter.css';

const CategoryFilter = ({ selectedCategory, setSelectedCategory, opportunities }) => {
  const categories = ['All', ...new Set(opportunities.map(opp => opp.category))];

  return (
    <FormControl variant="outlined" size="small" className="category-filter">
      <InputLabel>Category</InputLabel>
      <Select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        label="Category"
      >
        {categories.map(category => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategoryFilter;
