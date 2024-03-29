import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starWarsPlanetsAPI from '../services/starWarsPlanetsAPI';

function Provider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [filtersData, setFiltersData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filterPlanetsData, setFilterPlanetsData] = useState([]);
  const [columns, setColumns] = useState('');
  const [comparison, setComparison] = useState('');
  const [valueNumber, setValueNumber] = useState();
  const [columnsTable, setColumnsTable] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const fetchPlanets = async () => {
    setPlanetsData(await starWarsPlanetsAPI());
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    planetsData,
    setPlanetsData,
    filtersData,
    setFiltersData,
    searchInput,
    setSearchInput,
    filterPlanetsData,
    setFilterPlanetsData,
    columns,
    setColumns,
    comparison,
    setComparison,
    valueNumber,
    setValueNumber,
    columnsTable,
    setColumnsTable,
  };

  return (
    <StarWarsContext.Provider
      value={ context }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Provider;
