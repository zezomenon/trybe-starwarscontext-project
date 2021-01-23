import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Search() {
  const { search, setSearch } = useContext(StarWarsContext);

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Pesquisar"
        aria-label="Username"
        name="search"
        data-testid="name-filter"
        value={ search }
        onChange={ (event) => setSearch(event.target.value) }
      />
    </div>
  );
}

export default Search;
