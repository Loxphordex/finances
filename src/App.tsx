import React from 'react';
import './App.css';

export const MapStateToProps = (state: any) => ({
    income: state.income
})

const App: React.FC = (props) => {
  console.log(props)
  return (
    <div className="App">
    </div>
  );
}

export default App;
