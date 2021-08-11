/*inspired by the tutorial by Jason Rivera
Youtube: https://www.youtube.com/watch?v=HaEB0vdxpdg*/

import './App.css';
import GetPokemon from './Components/APICalls/GetPokemon';
import Navbar from './Components/UI/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GetPokemon />
    </div>
  );
}

export default App;
