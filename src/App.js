import React from 'react';
import Search from './components/Search';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <div>
      <Provider>
        <Search />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
