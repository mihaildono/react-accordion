import React from 'react';
import './App.css';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="app">
      <Accordion allowMultipleOpen>
        <Accordion.Section title="title">
          <div>hello</div>
        </Accordion.Section>
        <Accordion.Section isOpen title="title">
          <div>hello</div>
        </Accordion.Section>
      </Accordion>
    </div>
  );
}

export default App;
