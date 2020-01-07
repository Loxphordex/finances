import React from 'react';
import Hello from './Example/Hello'
import './App.css';

export const MapStateToProps = (state: any) => ({
    income: state.income
})

const App: React.FC = (props) => {
  console.log(props)
  return (
    <div className="App">
      <Hello name="Silas" enthusiasmLevel={ 7 } />
    </div>
  );
}

export default App;
