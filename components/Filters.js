import { useState } from 'react';
import { properties } from '../utils/data';

export default function Filters({ setFilteredProperties }) {
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    const filtered = properties.filter((property) => {
      return (
        (filters.location === '' || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (filters.minPrice === '' || property.price >= parseInt(filters.minPrice)) &&
        (filters.maxPrice === '' || property.price <= parseInt(filters.maxPrice)) &&
        (filters.bedrooms === '' || property.bedrooms === parseInt(filters.bedrooms))
      );
    });
    setFilteredProperties(filtered);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleFilterChange}
          className="border  bg-black rounded px-2 py-1"
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleFilterChange}
          className="border bg-black rounded px-2 py-1"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleFilterChange}
          className="border  bg-black rounded px-2 py-1"
        />
        <input
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          value={filters.bedrooms}
          onChange={handleFilterChange}
          className="border bg-black rounded px-2 py-1"
        />
      </div>
      <button
        onClick={applyFilters}
        className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
      >
        Apply Filters
      </button>
    </div>
  );
}