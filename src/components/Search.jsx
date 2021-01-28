import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Search() {
  const {
    planetsData,
    searchInput,
    setSearchInput,
    setFiltersData,
  } = useContext(StarWarsContext);

  const handleChange = ({ target: { value } }) => {
    setSearchInput(value);
    const filtered = planetsData.filter((planet) => planet.name.toLowerCase()
      .includes(value.toLowerCase()));
    setFiltersData(filtered);
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Pesquisar"
          aria-label="Username"
          name="searchInput"
          data-testid="name-filter"
          value={ searchInput }
          onChange={ handleChange }
        />
      </div>
    </div>
  );
}

export default Search;
