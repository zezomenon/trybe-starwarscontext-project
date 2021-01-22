import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starWarsPlanetsAPI from '../services/starWarsPlanetsAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    setPlanets(await starWarsPlanetsAPI());
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ { planets } }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Provider;
