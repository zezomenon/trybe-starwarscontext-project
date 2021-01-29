import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterNumericValues() {
  const {
    planetsData,
    setColumns,
    setComparison,
    setValueNumber,
    setFiltersData,
    columns,
    comparison,
    valueNumber,
    columnsTable,
    setColumnsTable,
  } = useContext(StarWarsContext);

  const comparisonTable = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'setColumns') {
      setColumns(value);
    }
    if (name === 'setComparison') {
      setComparison(value);
    }
    if (name === 'setValueNumber') {
      setValueNumber(value);
    }
  };

  const removeColumn = (column) => {
    const arrColumn = columnsTable.filter((item) => item !== column);
    setColumnsTable(arrColumn);
  };

  // source: https://medium.com/javascript-in-plain-english/how-to-remove-an-element-from-array-in-javascript-c968b920a03d
  const handleClick = () => {
    if (comparison === 'maior que') {
      const filtered = planetsData.filter(
        (planet) => Number(planet[columns]) > Number(valueNumber),
      );
      setFiltersData(filtered);
    }
    if (comparison === 'menor que') {
      const filtered = planetsData.filter(
        (planet) => Number(planet[columns]) < Number(valueNumber),
      );
      setFiltersData(filtered);
    }
    if (comparison === 'igual a') {
      const filtered = planetsData.filter(
        (planet) => Number(planet[columns]) === Number(valueNumber),
      );
      setFiltersData(filtered);
    }

    removeColumn(columns);
  };

  return (
    <div>
      <div>
        <select
          className="form-select"
          data-testid="column-filter"
          name="setColumns"
          onChange={ handleChange }
        >
          <option disabled selected>Escolha...</option>
          {columnsTable.map((column) => (
            <option key={ column } value={ column }>{ column }</option>))}
        </select>
      </div>
      <div>
        <select
          className="form-select"
          data-testid="comparison-filter"
          name="setComparison"
          onChange={ handleChange }
        >
          <option disabled selected>Escolha...</option>
          {comparisonTable.map((item) => (
            <option key={ item } value={ item }>{ item }</option>))}
        </select>
      </div>
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          data-testid="value-filter"
          name="setValueNumber"
          onChange={ handleChange }
        />
      </div>
      <button
        type="button"
        className="btn btn-light"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Button
      </button>
    </div>
  );
}

export default FilterNumericValues;
