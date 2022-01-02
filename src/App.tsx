import React from 'react';
import Button from './Button';
import Display from './Display';
import './App.css';

function App() {
  const [counter, updateCounter] = React.useState(0);

  const onClickFunction = () => {updateCounter(counter + 1)};

  return (
    <div className="App">
      <Button onClickFunction = { onClickFunction }/>
      <Display message = {counter} />
    </div>
  );
}

export default App;
