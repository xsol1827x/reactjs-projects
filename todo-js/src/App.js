import React from 'react';
import './App.css';
import ThemeContextProvider from './Components/contexts/ThemeContext';
import TodoInput from './Components/Functionality/TodoInput';
import Header from './Components/UI/Header';

function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
        <Header />
        <TodoInput />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
