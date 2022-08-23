import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

function App() {

  const [ valid, setValid ] = useState(false);

  return (
    <div className="container">
      <h2 className="title">Password checker</h2>
      <div className="form--container">
        <Input validation={ setValid } />
        <Button isVisible={ valid } />
      </div>
    </div>
  );
};

export default App;
