import React from 'react';
import Search from './components/Search';
import FilterNumericValues from './components/FilterNumericValues';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <div>
      <Provider>
        <Search />
        <FilterNumericValues />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
