import React from 'react';
import './App.css';
import AddContact from './component/AddContact';

function App() {
  return (
    <div className="App">
      <AddContact />
    </div>
  );
}
export const add = (num1,num2) => {
  return num1+num2
}
export default App;
