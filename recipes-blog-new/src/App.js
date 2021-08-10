import './App.css';
import Input from './Components/UI/Input';
import { Typography } from '@material-ui/core';

function App() {

  return (
    <div className="App">
      <Typography gutterBottom variant="h3">
        Recipes
      </Typography>
      <Typography gutterBottom variant="subtitle1">
        Start searching to find recipes
      </Typography>
      <Input />
    </div>
  );
}

export default App;
